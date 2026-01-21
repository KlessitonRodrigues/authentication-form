import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";

export const ResetPassForm = () => {
  return (
    <Form>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="emailbox" />
          Reset Password
        </Button>
      </Row>
    </Form>
  );
};
