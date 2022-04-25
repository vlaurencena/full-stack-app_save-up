import React, { useState } from 'react';
import axios from "axios";

const AddEntryForm = (props) => {

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [concept, setConcept] = useState("");
    const [amount, setAmount] = useState("");
    const [isIncome, setIsIncome] = useState(true);

    const postNewEntry = (entryDate, entryConcept, entryAmount, entryIsIncome, entryUser) => {
        axios
            .post('http://localhost:1337/api/entries',
                {
                    "data":
                    {
                        "description": `${entryConcept}`,
                        "isIncome": `${entryIsIncome}`,
                        "date": `${entryDate}`,
                        "amount": `${entryAmount}`,
                        "userEmail": `${entryUser}`
                    }
                },
                {
                    headers: {
                        "Authorization": `Bearer ${props.token}`
                    }
                })
            .then((response) => {
                // Handle success.
                console.log('Entry created!');
                console.log('Response', response);
                props.getEntries();
                setDate(new Date().toISOString().slice(0, 10));
                setConcept("");
                setAmount("");
                setIsIncome(true);
            })
            .catch((error) => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });

    }

    const handleChange = (e) => {
        e.target.name === "date" && setDate(new Date(e.target.value).toISOString().slice(0, 10));
        e.target.name === "concept" && setConcept(e.target.value);
        e.target.name === "amount" && setAmount(e.target.value);
        e.target.name === "concept" && setConcept(e.target.value);
        e.target.name === "typeOfEntry" && setIsIncome(e.target.value === "true" ? true : false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewEntry(date, concept, amount, isIncome, props.user);
    }

    return (
        <form className="entry-form"onSubmit={handleSubmit}>
            <div>Create new entry</div>
            <input onChange={handleChange} type="date" name="date" value={date} required />
            <input onChange={handleChange} type="text" name="concept" value={concept} required />
            <input onChange={handleChange} type="number" name="amount" value={amount} required />
            <div>
                <input onChange={handleChange} type="radio" id="income" name="typeOfEntry" value="true" checked={isIncome} />Received
                <input onChange={handleChange} type="radio" id="expense" name="typeOfEntry" value="false" checked={!isIncome} />Expense
            </div>
            <button className="button-style" type="submit">Save entry</button>
        </form>
    )
}

export default AddEntryForm;