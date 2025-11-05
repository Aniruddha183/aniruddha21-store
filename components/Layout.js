import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>aniruddha21</title>
        <meta name="description" content="Beautiful products for modern living" />
      </Head>
      <div className="min-h-screen">{children}</div>
    </>
  );
}