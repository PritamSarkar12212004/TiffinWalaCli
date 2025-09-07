import api from '../../../../utils/api/Axios';

const useFollower = () => {
  const fetchFollower = async ({
    followingId,
    FollowerId,
    followerLocation,
    imageUri,
    User_Name,
    setFollowing,
    status,
    setFollowerLoading,
  }: any) => {
    api
      .post('/api/product/user-followfetch', {
        payload: {
          followingId: followingId,
          FollowerId: FollowerId,
          followerLocation: followerLocation,
          imageUri: imageUri,
          User_Name: User_Name,
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
