import {
  PutCommand,
  PutCommandInput,
  QueryCommand,
  QueryCommandInput,
} from '@aws-sdk/lib-dynamodb';
import { Auth, CreateAuthUserDTO } from '@packages/common-types';
import * as bcrypt from 'bcrypt';

import { docClient } from '../../../config/dynamoDb';
import { resourceNames } from '../../../contants/resources';

export const getAuthUserByEmail = async (email: string) => {
  const params: QueryCommandInput = {
    TableName: resourceNames.authTable,
    IndexName: 'emailIndex',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  };
  const result = await docClient.send(new QueryCommand(params));
  return result.Items?.[0] as CreateAuthUserDTO | undefined;
};

export const createAuthUser = async (authUser: Auth.SignUpRequest) => {
  const authUserInstance = await CreateAuthUserDTO.create(authUser);

  await getAuthUserByEmail(authUserInstance.email).then(existingUser => {
    if (existingUser) throw new Error('Email already exists');
  });

  const newUser = {
    userId: crypto.randomUUID(),
    email: authUserInstance.email,
    userName: authUserInstance.userName,
    password: await bcrypt.hash(authUserInstance.password, 12),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const params: PutCommandInput = {
    TableName: resourceNames.authTable,
    Item: newUser,
    ConditionExpression: 'attribute_not_exists(email)',
  };

  await docClient.send(new PutCommand(params));
  return newUser;
};
