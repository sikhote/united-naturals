import { colors, fontWeights } from 'lib/styling';

export default {
  root: {
    background: colors.yellow1,
    borderRadius: 4,
    fontWeight: fontWeights.bold,
    fontSize: 26,
    color: colors.grey1,
    height: 58,
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      opacity: 0.9,
    },
  },
  arrow: {
    width: 9.9,
    height: 20,
    marginLeft: 18,
  },
};
