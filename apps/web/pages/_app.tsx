import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import AppLayout from "@/common/AppLayout";
import "@/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AppLayout>
  );
}
