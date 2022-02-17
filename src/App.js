import MainRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { getUserInfo, setUserInfo } from "./utils/AuthUtils";
import { Auth } from "aws-amplify";
// import './components/Style/Style.scss'
import './Style/tailwind.css';


function App() {
  useEffect(() => {

    !getUserInfo() &&
      Auth.currentUserPoolUser().then((obj) => {
        const userObj = {
          username: obj.username,
          email: obj?.attributes?.email,
          email_verified: obj?.attributes?.email_verified,
          phone_number: obj?.attributes?.phone_number,
          phone_number_verified: obj?.attributes?.phone_number_verified,
          id: obj?.attributes?.sub,
          userRole: "user",
        }
        userObj["isQuestion"] = true
        setUserInfo(userObj)
        window.location.reload()
      })

  }, [])

  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  );
}

export default withAuthenticator(App);
