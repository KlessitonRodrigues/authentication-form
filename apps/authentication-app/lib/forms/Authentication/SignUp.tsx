import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";

export const SignUpForm = () => {
  return (
    <Form>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
      />
      <InputField
        size="lg"
        type="text"
        label="Username"
        placeholder="Choose a username"
        before={<Icons icon="user" />}
      />
      <InputField
        size="lg"
        type="password"
        label="Password"
        placeholder="Enter your password"
        before={<Icons icon="lock" />}
      />
      <InputField
        size="lg"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter your password"
        before={<Icons icon="lock" />}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="userPlus" />
          Create Account
        </Button>
        <Button ghost>
          <Icons icon="signIn" />
          Sign In
        </Button>
      </Row>
    </Form>
  );
};
