import TodoList from "../components/TodoList";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <Button<"a">
      component="a"
      href="https://mantine.dev"
      onClick={(event) => event.preventDefault()}
    >
      Mantine
    </Button>
  );
}
