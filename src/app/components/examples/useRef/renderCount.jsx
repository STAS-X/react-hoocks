// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);

    // eslint-disable-next-line no-unused-vars
    const [otherState, setOtherState] = useState(false);

    const toggleOtherState = () => {
        setOtherState((prevState) => !prevState);
    };
    useEffect(() => {
        renderCount.current++;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Количество рендеров: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Посчитать</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
