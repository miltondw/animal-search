import GoogleLogin from "react-google-login";
import { actionTypes } from "../../../redux/reducer";
import { useStateValue } from "../../../redux/StateProvider";
export default function Login() {
  const [{ user }, dispatch] = useStateValue();
  const responseGoogle = (res: any) => {
    dispatch({
      type:actionTypes.SET_USER,
      user:res.profileObj
    })
    console.log(res.profileObj);
  };
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        clientId="622485363057-kjrjp6qb78p166fmdmdbl23epoenhk06.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
