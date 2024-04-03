import React,{useContext} from 'react'
import Transact from './Transaction'
import { GlobalContext } from '../Context/GlobalState'


const TransactionList = () => {
    const {Transactions}=useContext(GlobalContext)
   
    
  return (
    <><h3>HISTORY</h3>
    <ul  className='list'>
        {Transactions.map(transaction=>( <Transact key= {transaction.id} transaction={transaction} />))}
       
    </ul>
    </>
  )
}

export default TransactionList