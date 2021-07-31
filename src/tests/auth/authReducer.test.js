
// const state = {
//    name : "Franco",
//    id : "zFranco23",
//    logged: true
// }

import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {

        const initialState = {
            name:"initialName",
            id:"initialId"
        }
        const state =authReducer(initialState,{});

        expect(state).toEqual(initialState);
    })
    
    test('Debe de autenticar y colocar el name del usuario', () => {
        const initialState= { logged : false};
        const data={
            name :"Franco",
            id : "zFranco23"
        }
        const newState = authReducer(initialState,{
            type : types.login,
            payload:{
                ...data
            }
        })

        expect(newState).toEqual({...data,logged:true});
    })
    
    test('Debe de borrar el name del usuario y logged en false', () => {
        const initialState= {
            name :"Franco",
            id : "zFranco23",
            logged:true
        };
        
        const newState = authReducer(initialState,{
            type : types.logout,
        })

        expect(newState).toEqual({logged:false}); 
    })
    
})
