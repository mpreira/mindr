import React from "react";
import { Route } from "react-router-dom";

//components
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const HomeLayout = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </>
    );
}

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={(matchProps) =>
                    <HomeLayout>
                        <Component {...matchProps} />
                    </HomeLayout>

            }
        />
    )
}
export default HomeLayoutRoute;