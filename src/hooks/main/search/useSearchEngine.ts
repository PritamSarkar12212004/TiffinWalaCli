import api from '../../../utils/api/Axios';

const useSearchEngine = () => {
  const searchEngine = (
    location: any,
    query: string,
    setResults: any,
    setLoading: any,
    distance: any,
  ) => {
    api
      .post('/api/search/main-engine', {
        query,
        distance,
        location,
      })
      .then(res => {
        setResults(res.data.products);
        console.log(res.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    searchEngine,
  };
};

export default useSearchEngine;
