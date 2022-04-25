import React from 'react'

const EntryItem = (props) => {

    const amountColor = props.isIncome ? "color-green" : "color-red";

    return (
        <div key={props.id} className="entry-item">
            <div>{props.date}</div>
            <div>{props.description}</div>
            <div>
                <div className="text-above-amount">{props.isIncome ? "Received" : "Paid"}</div>
                <div className={amountColor}>${props.amount}</div>
            </div>

        </div>
    )
}

export default EntryItem