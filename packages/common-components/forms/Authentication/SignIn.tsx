import { PiEyeBold, PiLockBold, PiMailboxBold } from "react-icons/pi";
import { Row } from "../../base/containers/Flex";
import { InputField } from "../../base/inputs/InputField";
import { Form } from "../../base/containers/Forms";
import { Button } from "../../base/buttons/Button";
import { Icons } from "../../base/icons/IconMap";

export const SignInForm = () => {
  return (
    <Form>
      <InputField
        inputSize="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<PiMailboxBold size={20} />}
      />
      <InputField
        inputSize="lg"
        type="password"
        label="Password"
        placeholder="Enter your password"
        before={<PiLockBold size={20} />}
        after={<PiEyeBold size={20} />}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="signIn" size="20" />
          Sign In
        </Button>
        <Button ghost>
          <Icons icon="userPlus" size="20" />
          Create Account
        </Button>
      </Row>
    </Form>
  );
};
