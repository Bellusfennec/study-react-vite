import { Button, Container, Fieldset, Flex, PasswordInput, TextInput, UnstyledButton } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { UserSignIn } from "../../types";
import { useForm } from "@mantine/form";

export const SignIn = (props: UserSignIn) => {
  const { onSubmit } = props;
  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    }
  });

  const [, setParams] = useSearchParams();

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Container size="xs">
        <Fieldset legend="SignIn">
          <Flex gap="md" direction="column">
            <TextInput type="email" label="Email" placeholder="Email" {...form.getInputProps("name")} />
            <PasswordInput label="Пароль" placeholder="Пароль" {...form.getInputProps("password")} />
            <Button type="submit">Войти</Button>
            <Flex justify="center">
              <UnstyledButton onClick={() => setParams({ page: "registration" })}>Регистрация</UnstyledButton>
            </Flex>
          </Flex>
        </Fieldset>
      </Container>
    </form>
  );
};
