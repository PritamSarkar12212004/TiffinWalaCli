import api from '../../../utils/api/Axios';

const useTopProductFetch = () => {
  const top3ProductFinder = async ({
    location,
    distance,
    setTop3Product,
  }: any) => {
    await api
      .post('/api/product/filter-top-3-product', {
        locationData: location,
        distance: distance.icon,
      })
      .then(res => {
        setTop3Product(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return {
    top3ProductFinder,
  };
};

export default useTopProductFetch;
