import {useState} from "react";
import {useTodoDispatch} from "../App";

const Editor = () => {
    const [text, setText] = useState("");
    const dispatch = useTodoDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    }

    return (
        <>
            <input type="text" value={text} onChange={(e) => onChangeInput(e)}/>
            <button onClick={onClickButton}>추가</button>
        </>
    )
}
export default Editor;
