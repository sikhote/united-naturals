import React from 'react';
import PropTypes from 'prop-types';
import 'public/css/global.css';

const Page = ({ Component, pageProps }) => <Component {...pageProps} />;

Page.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

Page.defaultProps = {
  pageProps: {},
};

export default Page;
