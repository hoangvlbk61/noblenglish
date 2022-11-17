import '../styles/nicepage.css'
import '../styles/globals.css'
import '../styles/landingpage.css'
import "../styles/wp.css";

import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}
