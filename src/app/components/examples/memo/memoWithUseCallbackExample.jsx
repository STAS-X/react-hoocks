import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut !== nextProps.onLogOut) return false;
    return true;
}

const MemoLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeitem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
