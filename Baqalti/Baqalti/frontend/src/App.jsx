import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


import MainPage from "./Pages/MainPage/Main";
import AboutUs from "./Pages/AboutUsPage/AboutUsPage";
import Register from "./Pages/RegisterPage/Main";
import Login from "./Pages/LoginPage/LoginPage";
import Profile from "./Pages/ProfilePage/ProfilePage";
import NotFound from "./Pages/NotFoundPage/NotFoundPage";
import Logout from "./Pages/LogoutPage/LogoutPage";
import AddProducts from "./Pages/AddProductsPage/AddProductsPage"
import ViewProducts from "./Pages/ViewProductsPage/ViewProductsPage"

import Header from "./Header/Main";
import Footer from "./Footer/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact Component={MainPage} />
        <Route path="/AboutUs" exact Component={AboutUs} />
        <Route path="/Register" exact Component={Register} />
        <Route path="/Login" exact Component={Login} />
        <Route path="/Profile" exact Component={Profile} />
        <Route path="/Logout" exact Component={Logout} />
        <Route path="/AddProducts" exact Component={AddProducts} />
        <Route path="/ViewProducts" exact Component={ViewProducts} />
        <Route path="/*" exact Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
