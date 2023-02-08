import {todoReducer} from '../../src/08 - useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    
    it('Debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);


    });

    it('Debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    it('Debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    it('Debe de realizar el Toogle del todo done(true)', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBe(true);
        expect(newState).toStrictEqual([{
            id: 1,
            description: 'Demo Todo',
            done: true
        }])
    });
});