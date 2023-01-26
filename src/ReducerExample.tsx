import React, {useReducer} from 'react';

type Actions = | {type: "add"; text: string}
| {type: "remove"; idx: number};

interface Todo {
    text: string;
    complete: boolean;
};

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
switch (action.type) {
    case "add":
        return
}
};