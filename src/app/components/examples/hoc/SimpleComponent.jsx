import React, { useState } from "react";

import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ name, onLogIn, onLogOut, isAuth }) => {
    const [data, setData] = useState({ isAuth });

    const handleClick = () => {
        if (data.isAuth) onLogOut();
        else onLogIn();
        setData((prev) => ({ isAuth: !prev.isAuth }));
    };

    return (
        <>
            <Subtitle>
                {(data.isAuth ? "LogInComponent" : "LogOutComponent") || name }
            </Subtitle>
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                {data.isAuth ? "Выйти из системы" : "Войти в систему"}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    name: PropTypes.string,
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
