import { bps, colors, fontFamilies, fontWeights } from 'lib/styling';

export default {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '23px 90px',
    borderBottom: '2px solid rgba(0, 0, 0, .1)',
    [`@media (max-width: ${bps.b}px)`]: {
      display: 'block',
      padding: 16,
    },
  },
  logo: {
    maxWidth: 399,
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    color: colors.blue,
    textDecoration: 'none',
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.muli,
    fontSize: 20,
    [`@media (max-width: ${bps.b}px)`]: {
      marginTop: 16,
    },
  },
  icon: {
    width: 24.58,
    height: 24.58,
    marginRight: 4,
  },
};
