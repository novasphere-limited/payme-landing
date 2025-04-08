import "@/styles/globals.css";

import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/Theme";
import createEmotionCache from "../src/createEmotionCache";
import TanstackProvider from "@/providers/tanstackProvider";
import { Toaster } from "sonner";

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>PayyMe</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713368199/PayyMe_favicon_sp6p1h.png"
          type="image/x-icon"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <TanstackProvider>
          <CssBaseline />
          <Toaster position="top-right" richColors closeButton />
          <Component {...pageProps} />
        </TanstackProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
