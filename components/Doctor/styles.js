import { colors, fontWeights, bps } from 'lib/styling';

export default {
  root: {
    margin: '0 auto',
    paddingTop: 81,
    paddingBottom: 137,
    background: colors.skyBlue,
    [`@media (max-width: ${bps.d}px)`]: {
      padding: '16px 16px 0 16px',
    },
  },
  inner: {
    maxWidth: 912,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    [`@media (max-width: ${bps.d}px)`]: {
      display: 'flex',
    },
    [`@media (max-width: ${bps.b}px)`]: {
      display: 'block',
    },
  },
  title: {
    fontWeight: fontWeights.regular,
    fontSize: 39,
    color: colors.blue,
  },
  description: {
    paddingTop: 21,
    fontWeight: fontWeights.regular,
    fontSize: 22,
    lineHeight: '30px',
    color: colors.grey1,
    maxWidth: 644,
  },
  picture: {
    height: 373,
    width: 271,
    position: 'absolute',
    bottom: -137,
    left: 756,
    display: 'block',
    [`@media (max-width: ${bps.d}px)`]: {
      position: 'relative',
      bottom: 'auto',
      left: 'auto',
      marginLeft: 16,
    },
  },
};
