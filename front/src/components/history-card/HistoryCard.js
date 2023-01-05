import './card.css'
import { useNavigate } from 'react-router-dom'
import { BsX, BsPencilSquare } from 'react-icons/bs'

const HistoryCard = ({ transaction, deleteT }) => {
  const navigate = useNavigate()

  const switcher = (type) => {
    switch (type) {
      case 'Expense':
        return 'color-red'
      case 'Investment':
        return 'color-green'
      case 'Savings':
        return 'color-yellow'
    }
  }

  return (
    <div className={'history-card-container'}>
      <div className={`indicator ${switcher(transaction.transaction_type)}`}>
        {' '}
      </div>
      <p>{transaction.transaction_name}</p>
      <p>
        {new Intl.NumberFormat('en-Us', {
          style: 'currency',
          currency: 'TND',
        }).format(transaction.transaction_amount)}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          style={{
            width: 24,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => navigate(`/transaction/${transaction._id}`)}
        >
          <BsPencilSquare />
        </button>
        <button
          style={{
            width: 24,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={deleteT}
        >
          <BsX />
        </button>
      </div>
    </div>
  )
}

export default HistoryCard
