import React from 'react';
import language from 'lib/language';
import styles from './styles';

const BuyNow = (props) => (
  <button type="button" css={styles.root} onClick={() => null} {...props}>
    {language.buyNow.centerBuy}
    <img
      css={styles.arrow}
      src={`${process.env.assetPrefix}/images/Arrow CTA.svg`}
      alt={language.buyNow.centerBuy}
    />
  </button>
);

export default BuyNow;
