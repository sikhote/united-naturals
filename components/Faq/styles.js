import { colors, fontWeights, bps } from 'lib/styling';

export default {
  root: {
    maxWidth: 912,
    width: '100%',
    margin: '0 auto',
    paddingTop: 99,
    paddingBottom: 37,
    [`@media (max-width: ${bps.c}px)`]: {
      padding: 16,
    },
  },
  title: {
    fontWeight: fontWeights.regular,
    fontSize: 39,
    color: colors.blue,
  },
  items: {
    '& li': {
      position: 'relative',
      marginTop: 6.5,
      paddingTop: 20.5,
      paddingBottom: 20.5,
      borderTop: `1px solid ${colors.grey3}`,
      fontWeight: fontWeights.regular,
      fontSize: 22,
      lineHeight: '30px',
      color: colors.grey1,
      '& > div:nth-of-type(1)': {
        cursor: 'pointer',
      },
      '& > div:nth-of-type(1) img': {
        height: 10,
        width: 20,
        position: 'absolute',
        top: 20,
        right: 0,
      },
      '&.closed > div:nth-of-type(1) img': {
        transform: 'rotate(180deg)',
      },
      '& > div:nth-of-type(1) div': {
        fontWeight: fontWeights.bold,
        color: colors.blue,
        paddingRight: 40,
      },
      '& > div:nth-of-type(2)': {
        whiteSpace: 'pre-wrap',
        '& img.supplement-facts': {
          display: 'block',
          padding: '24px 0',
        },
      },
      '&.closed > div:nth-of-type(2)': {
        display: 'none',
      },
    },
  },
};
