import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({className, variant}) => {

    
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    // Handle successful login
  };

  const onFailureGoogle = (error) => {
    console.log("dsfsfsdsdfsdf",error);
    // Handle failed login
  };
// client id
//   1009962957539-omcfep2ilpos3igq7crknrf440o4v7ac.apps.googleusercontent.com

//c s
//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
  return (
    <GoogleLogin
      clientId="1009962957539-omcfep2ilpos3igq7crknrf440o4v7ac.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={responseGoogle}
      onFailure={onFailureGoogle}
      cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  variant={variant}
  className={className}
    />
//     <GoogleLogin
//   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//   onSuccess={responseGoogle}
// />
  );
};

export default GoogleLoginButton;
