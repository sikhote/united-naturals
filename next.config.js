const isProduction = process.env.NODE_ENV === 'production';
const assetPrefix = isProduction
  ? 'https://pages-dev.unitednaturals.com/next-test/out'
  : '';

module.exports = {
  env: {
    assetPrefix,
  },
  assetPrefix,
};
