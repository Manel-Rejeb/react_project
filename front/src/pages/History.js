import React, { useEffect } from 'react'
import { __data } from '../context/DataProvider'
import HistoryCard from '../components/history-card/HistoryCard'
import { Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Doughnut } from 'react-chartjs-2'

const History = () => {
  const navigate = useNavigate()
  const { transactions, deleteTransactions } = __data()

  useEffect(() => {
    if (localStorage.getItem('logged') === 'false') {
      navigate('/auth')
    }
  })

  return (
    <Grid templateColumns={'repeat(2,auto)'}>
      <GridItem>{/* <Doughnut data={data} /> */}</GridItem>
      <GridItem>
        {transactions &&
          transactions.length > 0 &&
          transactions.map((el) => (
            <HistoryCard
              key={el._id}
              transaction={el}
              deleteT={() => deleteTransactions(el._id)}
            />
          ))}
      </GridItem>
    </Grid>
  )
}

export default History
