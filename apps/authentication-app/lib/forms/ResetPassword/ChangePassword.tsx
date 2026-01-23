import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";

export const ChangePasswordForm = () => {
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
        type="password"
        label="New Password"
        placeholder="Enter your new password"
        before={<Icons icon="lock" />}
      />
      <InputField
        size="lg"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your new password"
        before={<Icons icon="lock" />}
      />
      <Row flexX="center">
        <Button color="error">
          <Icons icon="checkMark" size="22" />
          Change Password
        </Button>
      </Row>
    </Form>
  );
};
