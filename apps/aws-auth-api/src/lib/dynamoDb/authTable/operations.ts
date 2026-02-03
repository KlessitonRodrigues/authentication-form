import {
  PutCommand,
  PutCommandInput,
  QueryCommand,
  QueryCommandInput,
} from '@aws-sdk/lib-dynamodb';
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
  return result.Items?.[0] as any | undefined;
};

export const createAuthUser = async (authUser: any) => {
  if (!authUser.email || !authUser.password || !authUser.userName) {
    throw new Error('Missing required fields');
  }

  await getAuthUserByEmail(authUser.email).then(existingUser => {
    if (existingUser) throw new Error('Email already exists');
  });

  const newUser = {
    userId: crypto.randomUUID(),
    email: authUser.email,
    userName: authUser.userName,
    password: await bcrypt.hash(authUser.password, 12),
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
