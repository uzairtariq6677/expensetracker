import React,{ useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


export const AddTransaction = () => {
  const{addTransaction}=useContext(GlobalContext)
 
    const [text,Settext]=useState('')
    const [amount,Setamount]=useState(0)
    const onSubmit=e=>{
      e.preventDefault();
      const newTransaction={
        id:Math.floor(Math.random()*100000),
        text,
        amount: +amount 
      }
      addTransaction(newTransaction)
      Settext('');
    Setamount(0);
    }
   
  return (
    <><h3>ADD TRANSACTION</h3>
    <form onSubmit={onSubmit} > 
    <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' value={text} onChange={(e)=>Settext(e.target.value)} placeholder='Enter Text...'></input>
    </div>
    <div className='form-control'>
        <label htmlFor='amount'>Amount<br/> (negative-expense,positive-income)</label> 
        <input type='number' value={amount} onChange={(e)=>Setamount(e.target.value)} placeholder='Enter Amount'></input>
    </div>
    <button className='btn'>ADD TRANSACTION</button>
   
    </form>
    </>
  )
}
