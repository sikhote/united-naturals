import { colors, fontWeights } from 'lib/styling';

export default {
  root: {
    background: 'rgba(0, 0, 0, .05)',
  },
  inner: {
    maxWidth: 1280,
    width: '100%',
    margin: '0 auto',
    background: colors.white,
  },
  smallBlue: {
    fontWeight: fontWeights.normal,
    fontSize: 22,
    background: colors.skyBlue,
    padding: 24,
    textAlign: 'center',
    color: colors.grey1,
  },
};
