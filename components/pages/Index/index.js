import React from 'react';
import Head from 'next/head';
import language from 'lib/language';
import styles from './styles';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Faq from 'components/Faq';
import Doctor from 'components/Doctor';
import Reviews from 'components/Reviews';
import Footer from 'components/Footer';

const Index = () => (
  <div css={styles.root}>
    <Head>
      <title key="title">{language.index.title}</title>
    </Head>
    <div css={styles.inner}>
      <Header />
      <Banner />
      <div css={styles.smallBlue}>{language.index.smallBlue}</div>
      <Faq />
      <Doctor />
      <Reviews />
      <Footer />
    </div>
  </div>
);

export default Index;
