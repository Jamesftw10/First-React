import LandingPage from "../LandingPage.jsx";
import App from "../App.jsx";

function Login({condition}) {
   return condition.isLoggedIn ? <App/> : <LandingPage/>
}
export default Login