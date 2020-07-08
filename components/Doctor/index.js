import React from 'react';
import language from 'lib/language';
import styles from './styles';

const Doctor = () => (
  <div css={styles.root}>
    <div css={styles.inner}>
      <div>
        <div css={styles.title}>{language.doctor.title}</div>
        <div css={styles.description}>{language.doctor.description}</div>
      </div>
      <img
        css={styles.picture}
        src={`${process.env.assetPrefix}/images/PedrePhotoMagazine_rgb_free.png`}
        alt={language.doctor.title}
      />
    </div>
  </div>
);

export default Doctor;
