import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 5000, 
  position: toast.POSITION.TOP_CENTER,
  
  //etc you get the idea
});
 const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          toast("You Must Login First..!", {
                
                });
          return (
            <Redirect
              to="/user/login"
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;