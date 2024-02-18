//Importing React in our JavaScript
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

//components
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import About from "./component/About";
import Search from "./component/Search";
import Contact from "./component/Contact";
import SignIn from "./component/SignIn";
import Cart from "./component/Cart";
import ErrorPage from "./component/ErrorPage";
import appStore from "./utils/appStore";
const RestaurantMenu = lazy(() => import("./component/RestaurantMenu"));

const MainContent = () => {
  return (
    <Provider store={appStore}>
      <div className='bg-sky-950'>
        <Header />
        {/* Outlet is used for replacing children according to the link */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

//creating root to rendering element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
