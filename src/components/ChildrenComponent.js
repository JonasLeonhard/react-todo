import React, {useState} from "react";
import PropTypes from "prop-types";

export default function ChildrenComponent(props) {
    return (
        // props.cildren is input into <ChildrenComponent>children...</ChildrenComponent>
        // could also be a named prop by <ChildrenComponent left={<TodoItem />}/> and calling it here as props.left
        <div>
        {props.children}
        </div>
    )
}

