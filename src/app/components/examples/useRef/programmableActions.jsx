import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = ({ target }) => {
        switch (target.id) {
        case "ref_focus":
            inputRef.current.focus();
            inputRef.current.style.width = "100%";
            break;
        case "ref_width":
            inputRef.current.style.width = "50%";
            break;
        }
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control" id="email" />
            <button className="btn btn-primary" id="ref_focus" onClick={handleClick}>Активировать ввод</button>
            <button className="btn btn-secondary" id="ref_width" onClick={handleClick}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
