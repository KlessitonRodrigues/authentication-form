import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";

export const VerifyCodeForm = () => {
  return (
    <Form>
      <InputField
        inputSize="lg"
        type="text"
        label="Verification Code"
        placeholder="Enter your verification code"
        before={<Icons icon="emailbox" size="20" />}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="signIn" size="20" />
          Sign In
        </Button>
      </Row>
    </Form>
  );
};
