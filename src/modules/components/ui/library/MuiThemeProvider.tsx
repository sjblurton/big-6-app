import { primary } from "@/styles/colors/_exports.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
});

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}

export default MuiThemeProvider;
