import api from '../../../utils/api/Axios';

const useFetchMainProduct = () => {
  const fetchMaindata = ({
    setLoading,
    setMainData,
    location,
    distance,
    foodType,
  }: any) => {
    api
      .post('/api/product/fetch-mainData-product', {
        locationData: location,
        distance: distance,
        foodType,
      })
      .then(res => {
        if (!res.data.products) {
          setMainData(false);
          setLoading(false);
        }
        setMainData(res.data.products);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return {
    fetchMaindata,
  };
};

export default useFetchMainProduct;
