import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@/styles/global.css";

import AppLayout from "@/common/AppLayout";
import Header from "@/common/Header";
import Footer from "@/components/common/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Header />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <Footer />
    </AppLayout>
  );
}
