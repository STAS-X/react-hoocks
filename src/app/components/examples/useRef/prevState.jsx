import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");

    // eslint-disable-next-line no-unused-vars
    const [otherState, setOtherState] = useState("false");

    const toggleOtherState = () => {
        setOtherState((prevState) => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Предыдущее состяоние: {prevState.current}</p>
            <p>Текущее состояние: {otherState}</p>

            <button className="btn btn-primary" onClick={toggleOtherState}>Посчитать</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
