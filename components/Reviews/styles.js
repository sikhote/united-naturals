import { colors, fontWeights, bps } from 'lib/styling';

export default {
  root: {
    maxWidth: 723,
    width: '100%',
    margin: '0 auto',
    paddingTop: 89,
    paddingBottom: 58,
    [`@media (max-width: ${bps.b}px)`]: {
      padding: 16,
    },
  },
  title: {
    fontWeight: fontWeights.regular,
    fontSize: 40,
    color: colors.blue,
    textAlign: 'center',
  },
  subTitle: {
    fontWeight: fontWeights.regular,
    fontSize: 30,
    color: colors.blue,
    textAlign: 'center',
  },
  starRoot: {
    '& > img': {
      width: 18,
      height: 18,
      marginRight: 6,
    },
    '& span': {
      fontWeight: fontWeights.regular,
      fontSize: 16,
      color: colors.green,
      paddingLeft: 2,
    },
  },
  average: {
    marginTop: 20,
    textAlign: 'center',
  },
  items: {
    paddingTop: 50,
    '& li:nth-of-type(n + 2)': {
      paddingTop: 60,
    },
  },
  itemTitle: {
    fontWeight: fontWeights.bold,
    fontSize: 20,
    color: colors.grey1,
  },
  itemStars: {
    paddingTop: 5,
  },
  description: {
    fontWeight: fontWeights.regular,
    fontStyle: 'italic',
    fontSize: 16,
    color: colors.grey1,
    paddingTop: 5,
  },
  author: {
    fontWeight: fontWeights.bold,
    fontSize: 16,
    color: colors.grey1,
    paddingTop: 5,
  },
  showMore: {
    paddingTop: 73,
    fontWeight: fontWeights.bold,
    fontSize: 18,
    color: colors.grey1,
    textAlign: 'center',
    cursor: 'pointer',
  },
};
