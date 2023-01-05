import React from 'react'
import { __data } from '../context/DataProvider'
import HistoryCard from '../components/history-card/HistoryCard'
import { Grid, GridItem } from '@chakra-ui/react'

import { Doughnut } from 'react-chartjs-2'

const History = () => {
  const { transactions, deleteTransactions } = __data()

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
