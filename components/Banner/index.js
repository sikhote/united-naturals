import React, { useState } from 'react';
import PropTypes from 'prop-types';
import language from 'lib/language';
import styles from './styles';
import { merge } from 'lodash';

const SmallPillar = ({ title, center, footer }) => (
  <div css={styles.pillar}>
    <div css={styles.pillarTitle}>{title}</div>
    <div css={styles.pillarCenter}>{center}</div>
    <div css={styles.pillarFooter}>{footer}</div>
  </div>
);

SmallPillar.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.any.isRequired,
  footer: PropTypes.string.isRequired,
};

const Radio = ({ title, onChange, align, id, name, value, checked }) => (
  <div
    role="button"
    css={merge(
      {},
      styles.radio,
      checked ? styles.radioIsSelected : {},
      align === 'center' ? styles.radioIsCenter : {},
    )}
    onClick={onChange}
  >
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      css={styles.radioInput}
      checked={checked}
      onChange={onChange}
    />
    <div
      css={merge(
        {},
        styles.radioCircle,
        checked ? styles.radioCircleIsSelected : {},
      )}
    />
    <label htmlFor={id} css={styles.radioTitle}>
      {title}
    </label>
  </div>
);

Radio.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  align: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  // eslint-disable-next-line react/boolean-prop-naming
  checked: PropTypes.bool.isRequired,
};

const Banner = () => {
  const [radio, setRadio] = useState('3');

  return (
    <div css={styles.root}>
      <div css={styles.title}>{language.banner.title}</div>
      <div css={styles.pillSection}>
        <img
          css={styles.bottle}
          src="/images/gut_connect365-1-600_530x@2x.png"
          alt={language.banner.bottle}
        />
        <div css={styles.bulletAndFlyer}>
          <div css={styles.bulletsColumns}>
            <ul css={styles.bullets}>
              <li css={styles.bullet}>{language.banner.bullets[0]}</li>
              <li css={styles.bullet}>{language.banner.bullets[1]}</li>
            </ul>
            <ul css={styles.bullets}>
              <li css={styles.bullet}>{language.banner.bullets[2]}</li>
              <li css={styles.bullet}>{language.banner.bullets[3]}</li>
            </ul>
          </div>
          <div css={styles.flyer}>
            <span css={styles.num1}>{language.banner.num1}</span>
            <span css={styles.inGut}>{language.banner.inGut}</span>
          </div>
        </div>
      </div>
      <div css={styles.pillars}>
        <SmallPillar
          {...{
            title: language.banner.side1Title,
            center: (
              <img
                css={styles.moneyBack}
                src="/images/Group 3111.svg"
                alt={language.banner.side1Alt}
              />
            ),
            footer: language.banner.side1Desc,
          }}
        />
        <div css={styles.largePillar}>
          <div css={styles.largePillarTitle}>{language.banner.centerTitle}</div>
          <div css={styles.largeCenter}>
            <fieldset css={styles.fieldset}>
              <Radio
                align="center"
                title={language.banner.center3}
                checked={radio === '3'}
                value="3"
                id="center3"
                name="jars"
                onChange={() => setRadio('3')}
              />
              <div css={styles.splitJars}>
                <Radio
                  align="left"
                  title={language.banner.center6}
                  checked={radio === '6'}
                  value="6"
                  id="center6"
                  name="jars"
                  onChange={() => setRadio('6')}
                />
                <Radio
                  align="left"
                  title={language.banner.center1}
                  checked={radio === '1'}
                  value="1"
                  id="center1"
                  name="jars"
                  onChange={() => setRadio('1')}
                />
              </div>
            </fieldset>
            <div css={styles.centerNor}>
              {language.banner.centerNor}{' '}
              <span css={styles.centerNorPrice}>
                {language.banner.centerNorPrice}
              </span>
            </div>
            <div css={styles.centerInst}>{language.banner.centerInst}</div>
            <div css={styles.centerPrice}>{language.banner.centerPrice}</div>
            <div css={styles.centerParen}>{language.banner.centerParen}</div>
            <button type="button" css={styles.centerBuy} onClick={() => null}>
              {language.banner.centerBuy}
              <img
                css={styles.arrow}
                src="/images/Arrow CTA.svg"
                alt={language.banner.centerBuy}
              />
            </button>
            <div css={styles.centerFree}>
              {language.banner.centerFree}
              <img
                css={styles.truck}
                src="/images/delivery icon.svg"
                alt={language.banner.centerFree}
              />
            </div>
          </div>
          <div css={styles.largePillarFooter}>
            <div css={styles.center100}>{language.banner.center100}</div>
            <div css={styles.centerOffer}>{language.banner.centerOffer}</div>
          </div>
        </div>
        <SmallPillar
          {...{
            title: language.banner.side2Title,
            center: (
              <div css={styles.doctorPic} title={language.banner.side2Alt} />
            ),
            footer: language.banner.side2Desc,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
