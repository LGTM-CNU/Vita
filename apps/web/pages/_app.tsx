import "../src/styles/global.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/components/AppLayout";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AppLayout>
  );
}
