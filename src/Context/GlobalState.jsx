import {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
//initial state
const initialstate={
    Transactions:[
]
} //Create Context
export const GlobalContext=createContext(initialstate);
//action


//ProviderComponent
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialstate);
    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
      function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction        })
      }
    return (<GlobalContext.Provider value={{Transactions:state.Transactions, deleteTransaction,addTransaction }}>{children}</GlobalContext.Provider>)
}