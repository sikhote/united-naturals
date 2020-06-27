import React from 'react';
import Head from 'next/head';
import language from 'lib/language';

const Index = ({ store, dispatch }) => (
  <div>
    <Head>
      <title key="title">{language.index.title}</title>
    </Head>
    <p>Hello world!</p>
  </div>
);

export default Index;
