import { Button, TextInput } from "@mantine/core";

export default function Home() {
  return (
    <>
      <TextInput label="Hello" id="text-input" placeholder="Hello" />
      <Button
        component="a"
        href="https://mantine.dev"
        onClick={(event) => event.preventDefault()}
        style={{ marginTop: 40 }}
      >
        Mantine
      </Button>
    </>
  );
}
