import Head from 'next/head';

import Flow from '../components/Flow';

import styles from '../styles/FlowTest.module.css';

export default function FlowTest() {
  return (
    <div style={{width: '100vw', height: '90vh'}}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>React Flow - Next.js Example</header>
        <Flow />
      </div>
    </div>
  );
};