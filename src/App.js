import React from "react";
import ReactDOM , { createRoot }  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUsPage from "./components/Contactus";
import CartPage from "./components/Cart";
// import RestaurantDetails from "./components/RestaurantDetails";
import DetailedView from "./components/DetailedView";

import Profile from "./components/Profile"; 



const AppLayout = () => {
    return (
        <>
            <Header />
            
            <Outlet /> 

            <Footer />
        </>
        
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path : "/",
                element: <Body />,
            },
            {
                path: "/home",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About  />,
                children:[{
                    path:"profile", // dont give slash
                    element:<Profile />
                }]
            },
            {
                path:"/contactUs",
                element:<ContactUsPage />
            },
            {
                
                path:"/cart",
                element:<CartPage />

            },
            {
                path:"/restaurant/:resId",
                element:<DetailedView />
            },
            
          
        ]
    }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);