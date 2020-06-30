import { colors, fontWeights, bps } from 'lib/styling';

export default {
  root: {
    margin: '0 auto',
    paddingTop: 87,
    paddingBottom: 63,
    background: colors.skyBlue,
    [`@media (max-width: ${bps.c}px)`]: {
      padding: 16,
    },
  },
  section: {
    maxWidth: 796,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    left: -40,
    display: 'flex',
    [`@media (max-width: ${bps.c}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      left: 'auto',
    },
  },
  bottle: {
    flex: '0 0 auto',
    width: 304,
    height: 'auto',
  },
  right: {
    flex: '1 1 auto',
    width: '100%',
    paddingLeft: 52,
    paddingTop: 25,
    [`@media (max-width: ${bps.c}px)`]: {
      paddingLeft: 0,
    },
  },
  title: {
    fontWeight: fontWeights.regular,
    fontSize: 39,
    color: colors.blue,
    paddingTop: 25,
    [`@media (max-width: ${bps.c}px)`]: {
      paddingTop: 0,
      textAlign: 'center',
    },
  },
  description: {
    paddingTop: 21,
    fontWeight: fontWeights.regular,
    fontSize: 16,
    lineHeight: '22px',
    color: colors.grey1,
  },
  buyNow: {
    marginTop: 20,
  },
  cards: {
    marginTop: 133,
    textAlign: 'center',
  },
  card: {
    width: 43,
    height: 30,
    '&:nth-of-type(n + 2)': {
      marginLeft: 6,
    },
  },
  copyright: {
    paddingTop: 18,
    fontWeight: fontWeights.regular,
    fontSize: 18,
    color: colors.grey1,
    textAlign: 'center',
  },
};
