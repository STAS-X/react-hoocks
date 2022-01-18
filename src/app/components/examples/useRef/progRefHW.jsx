import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgRefHW = () => {
    const [data, setData] = useState({ type: "email" });
    const inputRef = useRef();
    const labelRef = useRef();

    useEffect(() => {
        if (data.type === "text") {
            inputRef.current.style.width = "150px";
            inputRef.current.style.height = "80px";
        } else {
            inputRef.current.style.width = "100%";
            inputRef.current.style.height = "auto";
        }
        inputRef.current.type = data.type;
        labelRef.current.textContent = data.type[0].toUpperCase() + data.type.slice(1);
    }, [data]);
    const handleClick = () => {
        // console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };
    const handleChangeInputStyle = () => {
        setData((prevState) =>
            prevState.type === "email"
                ? { ...prevState, type: "text" }
                : { ...prevState, type: "email" }
        );
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label ref={labelRef} htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-4"
                id="email"
            />
            <button className="btn btn-primary mx-auto" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary mx-2"
                onClick={handleChangeInputStyle}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgRefHW;
