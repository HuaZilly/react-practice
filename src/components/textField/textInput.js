import {useContext} from "react";
import {TextFieldContext} from './textFieldContent';

function TextInput() {
    const textFieldContext = useContext(TextFieldContext);
    return (
        <input type={'text'} name={textFieldContext?.name} id={textFieldContext?.id}  />
    )
}

export default TextInput;