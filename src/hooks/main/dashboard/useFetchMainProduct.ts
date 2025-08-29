import api from '../../../utils/api/Axios';

const useFetchMainProduct = () => {
  const fetchMaindata = ({
    setLoading,
    setMainData,
    location,
    distance,
    foodType,
    navigation,
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
        navigation.replace('HelperNavigation', {
          screen: 'ErrorScreen',
        } as never);
        setLoading(false);
      });
  };
  return {
    fetchMaindata,
  };
};

export default useFetchMainProduct;
