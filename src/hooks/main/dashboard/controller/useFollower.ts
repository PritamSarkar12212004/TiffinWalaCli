import api from '../../../../utils/api/Axios';

const useFollower = () => {
  const fetchFollower = async ({
    followingId,
    FollowerId,
    setFollowing,
    status,
    setFollowerLoading,
  }: any) => {
    api
      .post('/api/product/user-followfetch', {
        payload: {
          followingId: followingId,
          FollowerId: FollowerId,
          status: status,
        },
      })
      .then(res => {
        setFollowing(res.data.status);
        setFollowerLoading(false);
      })
      .catch(err => {
        console.log(err);
        setFollowerLoading(false);
      });
  };

  return {
    fetchFollower,
  };
};

export default useFollower;
