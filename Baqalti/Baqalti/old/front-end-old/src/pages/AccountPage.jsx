import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import BasketPage from "./basket_page/basket_page";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  function logout() {
    axios
      .post("/logout")
      .then((res) => {
        setRedirect("/");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!ready) return "Loading...";

  if (ready && !user && !redirect) return <Navigate to={"/login"} />;

  if (redirect) return <Navigate to={redirect} />;

  function linkClasses(type = null) {
    let classes = "py-2 px-6 rounded-xl ";

    if (type === subpage) {
      classes += "bg-blueDark text-beigeDark";
    } else {
      classes += "text-blueDark hover:bg-blueDark hover:text-beigeDark";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 justify-center gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("basket")} to={"/account/basket"}>
          My basket
        </Link>
      </nav>
      {subpage === "profile" ? (
        <div className="bg-blueDark flex flex-col items-center max-w-lg mx-auto rounded-md pt-8 ">
          <div className="rounded-md border bg-beigeLight text-blueDark mb-2 w-5/6 text-center">
            Logged in as {user.username}
          </div>
          <div className="rounded-md border bg-beigeLight text-blueDark mb-2 w-5/6 text-center">
            email: {user.email}
          </div>
          <div className="rounded-md border bg-beigeLight text-blueDark mb-2 w-5/6 text-center">
            phone: {user.phone}
          </div>
          <div className="">
            <button className="log" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ): <BasketPage></BasketPage>}
    </div>
  );
};

export default AccountPage;
