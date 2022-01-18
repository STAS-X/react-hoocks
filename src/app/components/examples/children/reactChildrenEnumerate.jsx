import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            label: `${child.props.label} [компонент списка номер ${index + 1}]`,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ReactChildrenEnumerate = () => {
    return (
        <CardWrapper>
            <SmallTitle>
                Enumerate child component in list by order priority
            </SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="user" label="User" />
                <TextField name="email" label="Email" />
                <TextField name="password" label="Password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenEnumerate;
