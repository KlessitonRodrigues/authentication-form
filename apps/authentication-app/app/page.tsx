import {
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  Card,
  Column,
  NumberInput,
  Text,
  TextInput,
} from "@packages/common-components";

export default function Home() {
  return (
    <Column gap={8} className="p-4">
      <Card>
        <Text tag="h3" fs="xl" bold>
          Welcome to the home page!
        </Text>
        <ButtonGreen>TEST</ButtonGreen>
      </Card>
      <Card>
        <Text tag="h3" fs="xl" bold>
          Welcome to the home page!
        </Text>
        <ButtonBlue>TEST</ButtonBlue>
      </Card>
      <Card>
        <Text tag="h3" fs="xl" bold>
          Welcome to the home page!
        </Text>
        <ButtonRed>TEST</ButtonRed>
        <NumberInput />
        <TextInput />
      </Card>
    </Column>
  );
}
