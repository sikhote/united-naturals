import React from 'react';
import language from 'lib/language';
import styles from './styles';
import BuyNow from 'components/BuyNow';

const Footer = () => (
  <div css={styles.root}>
    <div css={styles.section}>
      <img
        css={styles.bottle}
        src={`${process.env.assetPrefix}/images/gut_connect365-ChocolateCoconut_01.png`}
        alt={language.footer.bottle}
      />
      <div css={styles.right}>
        <div css={styles.title}>{language.footer.title}</div>
        <div css={styles.description}>{language.footer.description}</div>
        <BuyNow css={styles.buyNow} />
      </div>
    </div>
    <div css={styles.cards}>
      {[
        { src: `${process.env.assetPrefix}/images/VISA.png`, alt: 'VISA' },
        { src: `${process.env.assetPrefix}/images/Master.png`, alt: 'Master' },
        {
          src: `${process.env.assetPrefix}/images/discover.png`,
          alt: 'Discover',
        },
        {
          src: `${process.env.assetPrefix}/images/americanexpress.png`,
          alt: 'AMEX',
        },
      ].map(({ src, alt }) => (
        <img key={src} css={styles.card} src={src} alt={alt} />
      ))}
    </div>
    <div css={styles.copyright}>{language.footer.copyright}</div>
  </div>
);

export default Footer;
