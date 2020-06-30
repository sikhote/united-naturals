import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
// eslint-disable-next-line import/extensions
import 'public/css/global.css';

const Page = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <Component {...pageProps} />
  </CacheProvider>
);

Page.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

Page.defaultProps = {
  pageProps: {},
};

export default Page;
