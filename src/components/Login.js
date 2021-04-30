import React, { useEffect } from "react";
import useAuth from "../services/auth";
import { logIn, logOut } from "../actions";
import { useGlobalContext } from "../context/context";
// CSS
import "./login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  const { state, dispatch } = useGlobalContext();

  const { signInUser, logOutUser } = useAuth();
  const signIn = async () => {
    const user = await signInUser();
    if (user) dispatch(logIn(user));
  };

  const singOutUser = async () => {
    await logOutUser();
    dispatch(logOut());
  };

  useEffect(() => {
    if (state.auth.user) {
      localStorage.setItem("user", JSON.stringify(state.auth.user));
    } else {
      localStorage.setItem("user", JSON.stringify(null));
    }
  }, [state.auth.user]);

  return (
    <>
      <div className="login">
        {!state.auth.user ? (
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={signIn}
          >
            sign in with google
          </Button>
        ) : null}
        <div className="login__info">
          {state.auth.user ? (
            <>
              <div className="login__infoContainer">
                <div className="login__imgContainer">
                  <img
                    src={state.auth.user.photoURL}
                    alt={state.auth.user.displayame}
                  />
                </div>
                <p>{state.auth.user.displayName}</p>
              </div>
            </>
          ) : null}
          <div className="login__logoutBtnContainer">
            {state.auth.user ? (
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={singOutUser}
              >
                logout
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
