import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = ({ ...props }) => {
    const field = (
        <TextField
            label="email"
            name="email"
            onChange={() => console.log("test")}
        />
    );
    const handleChange = (target) => {
        console.log("change: ", target.name);
    };

    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                name: "cloned",
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
