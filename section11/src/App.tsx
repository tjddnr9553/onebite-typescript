import './App.css';
import Editor from "./components/Editor";
import React, {useContext, useEffect, useReducer, useRef, useState} from "react";
import TodoItems from "./components/TodoItems";
import {Todo} from "./types";

type Action = {
    type: "CREATE";
    data: { id: number; content: string; }
} | { type: "DELETE"; id: number; }

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "DELETE":
            return state.filter((todo) => todo.id !== action.id);
    }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext);
    if (!dispatch) throw new Error("TodoDispatchContext 문제가 있음");
    else return dispatch;
}

function App() {
    const idRef = useRef(0);
    const [todos, dispatch] = useReducer(reducer, []);

    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++, content: text
            }
        })
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onClickDelete = (id: number) => {
        dispatch({
            type: "DELETE",
            id: id
        })
    }

    return (
        <div className="App">
            <h1>TODO List</h1>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
                    <Editor/>
                    {todos.map((todo) =>
                        <TodoItems key={todo.id} {...todo}/>
                    )}
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
