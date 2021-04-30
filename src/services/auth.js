import { auth, provider } from "../firebase/config";

const useAuth = () => {
  const signInUser = async () => {
    const user = await auth
      .signInWithPopup(provider)
      .then((res) => {
        return res.user;
      })
      .catch((error) => {
        console.log(error.message);
        return null;
      });
    return user;
  };

  const logOutUser = async () => {
    await auth.signOut().catch((err) => console.log(err.message));
  };

  return { signInUser, logOutUser };
};

export default useAuth;
