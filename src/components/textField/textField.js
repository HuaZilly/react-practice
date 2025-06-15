import Label from './label';
import Input from './textInput';
import {TextFieldContext} from "./textFieldContent";

function TextField(props) {
    return (
        <TextFieldContext value={props?.inputData}>
            <div>
                <Label />
                <Input />
            </div>
        </TextFieldContext>
    )
}

export default TextField;