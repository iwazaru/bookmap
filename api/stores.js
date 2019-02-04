import PlaceDesLibraires from '../src/lib/PlaceDesLibraires';

const { parse } = require('url');

export default async (req, res) => {
  const { query } = parse(req.url, true);
  const { ean } = query;
  const date = Date.now();

  const stores = PlaceDesLibraires.getStoresForEan(ean);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ean, date, stores }));
};
