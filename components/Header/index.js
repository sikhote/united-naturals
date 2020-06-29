import React from 'react';
import language from 'lib/language';
import styles from './styles';

const Header = () => (
  <div css={styles.root}>
    <img
      css={styles.logo}
      src="/images/Layer 2.svg"
      alt={language.header.logo}
    />
    <a css={styles.phone} href={`tele:${language.header.number}`}>
      <img
        css={styles.icon}
        src="/images/phone icon.svg"
        alt={language.header.phone}
      />
      {language.header.number}
    </a>
  </div>
);

export default Header;
