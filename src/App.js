import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import AllProvider from "./context/AllProvider";
import Form from "./Pages/Form/Form";
import SignIn from "./Pages/Form/SignIn/SignIn";
import SignUp from "./Pages/Form/SignUp/SignUp";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  return (
    <div className="main">
      <AllProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="/form/signin">
              <Form>
                <SignIn></SignIn>
              </Form>
            </Route>
            <Route exact path="/form/signup">
              <Form>
                <SignUp></SignUp>
              </Form>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AllProvider>
    </div>
  );
}

export default App;
