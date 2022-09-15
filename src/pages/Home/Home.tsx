import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
};

export default Home;
