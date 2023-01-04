import React from 'react'
import { __data } from '../context/DataProvider'

const History = () => {
  const { transactions } = __data()

  return (
    <div>
      {transactions &&
        transactions.length > 0 &&
        transactions.map((el) => <p key={el._id}>{el.transaction_name}</p>)}
    </div>
  )
}

export default History
