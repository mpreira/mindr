import React from "react";
import { Route } from "react-router-dom";

//components
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const PageLayout = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    );
}

const PageLayoutRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={(matchProps) =>
                <PageLayout>
                    <Component {...matchProps} />
                </PageLayout>

            }
        />
    )
}
export default PageLayoutRoute;