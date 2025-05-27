const useCreateProfile = () => {
  const createProfile = ({name, email, bio, location, image}: any) => {
    console.log(name, email, bio, location, image);
  };
  return {
    createProfile,
  };
};

export default useCreateProfile;
