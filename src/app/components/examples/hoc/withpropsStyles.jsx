import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
    return (
        <>
            <CardWrapper>
                <Component {...props} name="with PropsStyles" />
                <SmallTitle>Props and Styles</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default withPropsStyles;
