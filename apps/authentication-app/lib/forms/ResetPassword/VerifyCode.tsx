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
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
        disabled
      />
      <InputField
        size="lg"
        type="text"
        label="Verification Code"
        placeholder="Enter your verification code"
        before={<Icons icon="code" size="22" />}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="checkMark" size="22" />
          Verify Code
        </Button>
      </Row>
    </Form>
  );
};
