import MuiThemeProvider from "@/modules/components/ui/library/MuiThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <Component {...pageProps} />;
    </MuiThemeProvider>
  );
}

export default App;
