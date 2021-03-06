import React, {useReducer, useRef} from 'react'
import { useClickOutside } from '../hooks/useClickOutside';


export const ReducerButtons = () => {
    function reducer(state: State, action: Action) {
        switch (action.type) {
            case 'one': 
                return { rValue: true}
            case 'two':
                return { rValue: false}
            default: 
            return state;
        }
    }
    const initialState = { rValue: true}
    // type Action = {
    //     type: "one" | "two"
    // }

    // type Action = {
    //     type: "one" 
    // } | { type: "two"}

    type Action = 
       | { type: "one" } 
       | { type: "two"}
       | { type: "three"}

    type State = {
        rValue: boolean
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const ref = useRef<HTMLDivElement>(null!);
    useClickOutside(ref, () => {
        console.log("clicked outside")
    })


    return (
        <div ref={ref}>
            <button onClick={() => dispatch({ type: "one"})}>Action One</button>
            <button onClick={() => dispatch({ type: "two"})}>Action Two</button>
            <button onClick={() => dispatch({ type: "three"})}>Action Three</button>
            {state && state.rValue && 
            <h4>Visable</h4>
            }
        </div>
    )
}
