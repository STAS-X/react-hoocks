import React, { useState } from "react";
import SimpleComponent from "./SimpleComponent";
import CardWrapper from "../../common/Card";

const withLogInOut = (Component) => (props) => {
    const [isLogin, setAuth] = useState(!!localStorage.getItem("user"));

    const handleLogIn = () => {
        if (!isLogin && !localStorage.getItem("user")) localStorage.setItem("user", {});
        setAuth((prev) => !prev);
    };

    const handleLogOut = () => {
        if (isLogin && localStorage.getItem("user")) localStorage.removeItem("user");
        setAuth((prev) => !prev);
    };

    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                isAuth={isLogin}
            />
        </CardWrapper>
    );
};

export default withLogInOut;
