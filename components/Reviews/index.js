import React from 'react';
import PropTypes from 'prop-types';
import language from 'lib/language';
import styles from './styles';

const Stars = ({ count, text, ...props }) => (
  <div css={styles.starRoot} {...props}>
    {Array.from({ length: count }, (v, i) => (
      <img
        key={i}
        css={styles.starImage}
        src={`${process.env.assetPrefix}/images/Favorite.svg`}
        alt={language.reviews.star}
      />
    ))}
    <span css={styles.starText}>{text}</span>
  </div>
);

Stars.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

const Reviews = () => (
  <div css={styles.root}>
    <div css={styles.title}>{language.reviews.title}</div>
    <div css={styles.subTitle}>{language.reviews.subTitle}</div>
    <Stars css={styles.average} count={5} text={language.reviews.average} />
    <ul css={styles.items}>
      {language.reviews.items.map(
        ({ author, title, description, stars, date }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <div css={styles.itemTitle}>{title}</div>
            <Stars
              css={styles.itemStars}
              count={stars}
              text={`${stars} ${language.reviews.stars}`}
            />
            <div css={styles.description}>{description}</div>
            <div css={styles.author}>
              - {author}
              <br />
              {date}
            </div>
          </li>
        ),
      )}
    </ul>
    <div css={styles.showMore}>{language.reviews.showMore}</div>
  </div>
);

export default Reviews;
