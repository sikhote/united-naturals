import React from 'react';
import Head from 'next/head';
import language from 'lib/language';
import styles from './styles';
import Header from 'components/Header';
import Banner from 'components/Banner';

const Index = () => (
  <div css={styles.root}>
    <Head>
      <title key="title">{language.index.title}</title>
    </Head>
    <div css={styles.inner}>
      <Header />
      <Banner />
    </div>
  </div>
);

export default Index;
