import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }

    it('debe de regresar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    })

    it('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        
        //Montar el hook
        const {result} = renderHook(() => useForm(initialForm));

        const {onInputChange} = result.current;
        //onInputChange() //act, event...
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue); 

    })

    it('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        
        //Montar el hook
        const {result} = renderHook(() => useForm(initialForm));

        const {onInputChange, onResetForm} = result.current;
        //onInputChange() //act, event...
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name);

    })
})