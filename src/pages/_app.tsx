import type { AppProps } from "next/app";

import "./_app.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default App;
