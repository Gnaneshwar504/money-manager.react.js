import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="details-img"
          alt="balance"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" testid="balanceAmount">
            RS{balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="details-img"
          alt="income"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" testid="incomeAmount">
            RS{incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="details-img"
          alt="expenses"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" testid="expensesAmount">
            RS{expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
