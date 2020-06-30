import { colors, fontFamilies, fontWeights, bps } from 'lib/styling';
import { merge } from 'lodash';

const pillarTitle = {
  height: 70,
  background: colors.blue,
  borderRadius: '4px 4px 0 0',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  fontWeight: fontWeights.medium,
  fontSize: 22,
  color: colors.white,
  textTransform: 'uppercase',
  [`@media (max-width: ${bps.a}px)`]: {
    padding: 8,
    height: 'auto',
    minHeight: 70,
  },
};

export default {
  root: {
    paddingTop: 45,
    paddingBottom: 114,
    background: 'url("/images/jay-mantri-TFyi0QOx08c-unsplash.png") no-repeat',
    backgroundSize: 'cover',
    '@media (min-resolution: 192dpi)': {
      background:
        'url("/images/jay-mantri-TFyi0QOx08c-unsplash@2x.png") no-repeat',
      backgroundSize: 'cover',
    },
    [`@media (max-width: ${bps.d}px)`]: {
      padding: 16,
    },
  },
  title: {
    fontWeight: fontWeights.medium,
    fontSize: 39,
    color: colors.blue,
    textAlign: 'center',
  },
  pillSection: {
    paddingTop: 18,
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width: ${bps.b}px)`]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  bottle: {
    width: 162,
    height: 'auto',
  },
  bulletAndFlyer: {
    paddingTop: 45,
    paddingLeft: 31,
    [`@media (max-width: ${bps.b}px)`]: {
      paddingTop: 0,
      paddingLeft: 0,
    },
  },
  bulletsColumns: {
    display: 'flex',
    [`@media (max-width: ${bps.d}px)`]: {
      display: 'block',
    },
  },
  bullets: {
    fontWeight: fontWeights.normal,
    fontSize: 22,
    color: colors.blue,
    lineHeight: '30px',
    '&:nth-of-type(n + 2)': {
      paddingLeft: 50,
    },
    [`@media (max-width: ${bps.d}px)`]: {
      '&:nth-of-type(n + 2)': {
        paddingLeft: 0,
      },
    },
  },
  flyer: {
    paddingTop: 29,
    fontWeight: fontWeights.bold,
    fontSize: 20,
    [`@media (max-width: ${bps.b}px)`]: {
      textAlign: 'center',
    },
  },
  num1: {
    background: 'url("/images/Union 2.svg") no-repeat',
    backgroundSize: 'cover',
    color: colors.white,
    display: 'inline-flex',
    width: 180,
    height: 33,
    padding: '4px 27px 5px 19px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inGut: {
    color: colors.blue,
    paddingLeft: 10,
    [`@media (max-width: ${bps.b}px)`]: {
      display: 'block',
      paddingLeft: 0,
    },
  },
  pillars: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 43,
    [`@media (max-width: ${bps.d}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 0,
    },
  },
  pillar: {
    width: 309,
    textAlign: 'center',
    paddingTop: 43,
    [`@media (max-width: ${bps.d}px)`]: {
      paddingTop: 36,
    },
    [`@media (max-width: ${bps.a}px)`]: {
      width: '100%',
    },
  },
  pillarTitle,
  pillarCenter: {
    height: 215,
    background: colors.white,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pillarFooter: {
    height: 149,
    background: colors.skyBlue,
    borderRadius: '0 0 4px 4px',
    padding: '18px 22px',
    fontWeight: fontWeights.normal,
    lineHeight: '20px',
    fontSize: 16,
    color: colors.grey1,
    whiteSpace: 'pre-line',
    [`@media (max-width: ${bps.a}px)`]: {
      height: 'auto',
    },
  },
  moneyBack: {
    width: 201,
    height: 161,
    alignSelf: 'center',
  },
  doctorPic: {
    height: '100%',
    width: '100%',
    background: 'url("/images/PedrePhotoMagazine_rgb_free.png") no-repeat',
    backgroundSize: '193px 266px',
    backgroundPosition: 'top 0 left 77px',
    '@media (min-resolution: 192dpi)': {
      background:
        'url("/images/PedrePhotoMagazine_rgb_free.png@2x.png") no-repeat',
      backgroundSize: '193px 266px',
    },
  },
  largePillar: {
    width: 440,
    margin: '0 23px',
    [`@media (max-width: ${bps.d}px)`]: {
      marginTop: 36,
    },
    [`@media (max-width: ${bps.a}px)`]: {
      width: '100%',
    },
  },
  largePillarTitle: merge({}, pillarTitle, {
    fontSize: 26,
  }),
  largeCenter: {
    background: colors.white,
    padding: '17px 17px 20px 17px',
    textAlign: 'center',
  },
  fieldset: {
    border: 'none',
    padding: 0,
  },
  radio: {
    paddingLeft: 66,
    height: 60,
    background: colors.grey4,
    fontWeight: fontWeights.medium,
    fontSize: 30,
    color: colors.grey2,
    textTransform: 'uppercase',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.grey4,
    cursor: 'pointer',
    '& *': {
      pointerEvents: 'none',
    },
    [`@media (max-width: ${bps.a}px)`]: {
      fontSize: 18,
      paddingLeft: 50,
    },
  },
  radioIsCenter: {
    paddingLeft: 0,
    justifyContent: 'center',
    [`@media (max-width: ${bps.a}px)`]: {
      paddingLeft: 0,
    },
  },
  radioIsSelected: {
    background: colors.skyBlue,
    borderColor: colors.cyan,
    color: colors.blue,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    border: `2px solid ${colors.grey3}`,
    background: colors.white,
    position: 'absolute',
    left: 22,
    top: 18,
  },
  radioCircleIsSelected: {
    border: `6px solid ${colors.blue}`,
  },
  radioTitle: {
    textAlign: 'center',
  },
  radioInput: {
    display: 'none',
  },
  splitJars: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 15,
    '& > *': {
      width: 'calc(50% - 7.5px)',
    },
  },
  centerNor: {
    paddingTop: 20,
    fontWeight: fontWeights.medium,
    fontSize: 20,
    color: colors.blue,
  },
  centerNorPrice: {
    textDecoration: 'line-through',
  },
  centerInst: {
    fontWeight: fontWeights.medium,
    fontSize: 26,
    color: colors.blue,
  },
  centerPrice: {
    paddingTop: 13,
    fontWeight: fontWeights.medium,
    fontSize: 40,
    color: colors.blue,
  },
  centerParen: {
    fontWeight: fontWeights.normal,
    fontSize: 20,
    color: colors.blue,
  },
  centerBuy: {
    marginTop: 19,
  },
  centerFree: {
    marginTop: 23,
    fontWeight: fontWeights.normal,
    fontSize: 20,
    color: colors.blue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  truck: { width: 40, height: 25, marginLeft: 6.5 },
  largePillarFooter: {
    background: colors.skyBlue,
    padding: 18,
    textAlign: 'center',
    borderRadius: '0 0 4px 4px',
  },
  center100: {
    fontFamily: fontFamilies.muli,
    fontWeight: fontWeights.bold,
    fontSize: 20,
    color: colors.blue,
  },
  centerOffer: {
    fontFamily: fontFamilies.muli,
    fontWeight: fontWeights.normal,
    fontSize: 14,
    color: colors.blue,
    marginTop: 5,
  },
};
