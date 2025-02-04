import {Todo} from "../types";
import {useTodoDispatch} from "../App";

interface Props extends Todo {
}

const TodoItems = (props: Props) => {
    const dispatch = useTodoDispatch();

    const onClickButton = () => {
        dispatch.onClickDelete(props.id)
    }

    return (
        <div>
            {props.id} : {props.content}
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
}
export default TodoItems;
