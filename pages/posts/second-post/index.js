import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href='/posts/first-post'>
          <a>First post</a>
        </Link>
      </h2>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
