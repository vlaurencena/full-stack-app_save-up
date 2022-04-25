import React from 'react';

import { Link } from "react-router-dom";

const BalancePreview = (props) => {

    return (
        <>
            <div>This is your {props.periodText}balance!</div>
            <div>${props.totalBalance}</div>
            <div >
                <button onClick={props.handleDateFilter} name="all">All</button>
                <button onClick={props.handleDateFilter} name="last-year">Last year</button>
                <button onClick={props.handleDateFilter} name="last-30-days">Last 30 days</button>
                <button onClick={props.handleDateFilter} name="last-7-days">Last 7 days</button>
            </div>
            <Link to={`/balance`}>See all entries</Link>
        </>
    )
}

export default BalancePreview;