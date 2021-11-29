import Search from "components/Search.jsx";
import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer.jsx";
import MainLogo from "../components/MainLogo.jsx";
import HomeResults from "../components/HomeResults.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>¡Black Friday Autocomplete App!</title>
        <meta name="description" content="Black Friday Autocomplete App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainLogo />
        <Search />
        <HomeResults />
      </main>

      <Footer />
    </div>
  );
}
