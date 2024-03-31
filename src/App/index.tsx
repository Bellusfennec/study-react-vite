import { MantineColorsTuple, MantineProvider, createTheme } from "@mantine/core";
import AuthProvider from "../contexts/AuthProvider";
import AppRoutes from "../routes/AppRoutes";
import "@mantine/core/styles.css";

const myColor: MantineColorsTuple = [
  "#e1f9ff",
  "#ccedff",
  "#9ad7ff",
  "#64c1ff",
  "#3baefe",
  "#20a2fe",
  "#099cff",
  "#0088e4",
  "#0078cd",
  "#0069b6"
];

const theme = createTheme({
  colors: {
    myColor
  }
});

export function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MantineProvider>
  );
}
