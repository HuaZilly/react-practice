import {useContext} from "react";
import {TextFieldContext} from './textFieldContent';

function Label() {
    const textFieldContext = useContext(TextFieldContext)
    return (
        <label htmlFor={textFieldContext?.name}>
            {textFieldContext?.label}
        </label>
    )
}

export default Label;