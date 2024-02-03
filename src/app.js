//Importing React in our JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components
import Header from "./component/Header";
import BannerSection from "./component/BannerSection";
import TopBrandsSection from "./component/TopBrandsSection";
import Offers from "./component/Offers";
import Search from "./component/Search";
import Help from "./component/Help";
import SignIn from "./component/SignIn";
import Cart from "./component/Cart";
import ErrorPage from "./component/ErrorPage";
import RestaurantMenu from "./component/RestaurantMenu";

const Body = () => {
  return (
    <>
      <BannerSection />
      <TopBrandsSection />
    </>
  );
};

const MainContent = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Outlet is used for replacing children according to the link */}
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

//creating root to rendering element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
