import React from 'react';
import language from 'lib/language';
import styles from './styles';
import BuyNow from 'components/BuyNow';

const Footer = () => (
  <div css={styles.root}>
    <div css={styles.section}>
      <img
        css={styles.bottle}
        src="/images/gut_connect365-ChocolateCoconut_01.png"
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
        { src: '/images/VISA.png', alt: 'VISA' },
        { src: '/images/Master.png', alt: 'Master' },
        { src: '/images/discover.png', alt: 'Discover' },
        { src: '/images/americanexpress.png', alt: 'AMEX' },
      ].map(({ src, alt }) => (
        <img key={src} css={styles.card} src={src} alt={alt} />
      ))}
    </div>
    <div css={styles.copyright}>{language.footer.copyright}</div>
  </div>
);

export default Footer;
