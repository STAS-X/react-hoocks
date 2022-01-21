import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";

const withLogInOut = (Component) => (props) => {
    const [isLogin, setAuth] = useState(!!localStorage.getItem("user"));

    const handleOutputToConsole = () => {
        console.log(`Rendering subComponent ${Component.name}`, isLogin ? "user is auth" : "user not auth");
    };

    useEffect(() => {
        handleOutputToConsole();
    }, [isLogin]);

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
            <Component
                {...props}
                name={Component.name}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                isAuth={isLogin}
            />
        </CardWrapper>
    );
};

export default withLogInOut;
