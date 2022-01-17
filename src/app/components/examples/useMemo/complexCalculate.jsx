import React, { useState, useEffect, useMemo } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    console.log("Run calculation");
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("Run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(true);

    const buttonColor = useMemo(() => ({ value: otherState ? "primary" : "secondary" }), [otherState]);
    useEffect(() => console.log("render"), [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value: {value}</p>
                <p>Result factorial func: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary mx-2"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${buttonColor.value} mt-2`}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
