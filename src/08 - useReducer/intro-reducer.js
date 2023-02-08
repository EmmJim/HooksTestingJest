


const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];


const todoReducer = (state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

console.log(todos);

let newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Tiempo',
    done: true
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(initialState, addTodoAction);

console.log(todos);