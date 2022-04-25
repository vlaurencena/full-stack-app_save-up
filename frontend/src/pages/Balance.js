import axios from "axios"
import React, { useEffect, useState } from 'react'
import AddEntryForm from "../components/AddEntryForm";
import EntryItem from "../components/EntryItem";

const Balance = (props) => {


  const [entries, setEntries] = useState("");
  const [totalBalance, setTotalBalance] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const getCurrentUserEmail = () => {
    axios
      .get(`http://localhost:1337/api/users/me`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        }
      })
      .then((response) => {
        // Handle success.
        console.log("Success! You got current user's email!");
        setCurrentUserEmail(response.data.email)
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  const getEntries = () => {
    axios
      .get(`http://localhost:1337/api/entries?filters[userEmail][$eq]=${currentUserEmail}&sort[0]=date%3Adesc&sort[1]=id%3Adesc`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        }
      })
      .then((response) => {
        // Handle success.
        console.log("Success! You got current user's entries!");
        setEntries(response.data.data);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  useEffect(() => {
    getCurrentUserEmail();
  }, []);

  useEffect(() => {
    currentUserEmail && getEntries();
  }, [currentUserEmail]);

  useEffect(() => {
    let balance = 0;
    entries && entries.forEach(entry => {
      entry.attributes.isIncome ? balance += entry.attributes.amount : balance -= entry.attributes.amount
    });
    setTotalBalance(balance);
  }, [entries]);

  return (
    <div className="entries-container">
      <div className="balance-display">Total balance: ${totalBalance}</div>
      <AddEntryForm
        token={props.token}
        user={currentUserEmail}
        getEntries={getEntries}
      />
      {entries && entries.map(entry => (
        <EntryItem
          key={entry.id}
          id={entry.id}
          amount={entry.attributes.amount}
          date={entry.attributes.date}
          isIncome={entry.attributes.isIncome}
          description={entry.attributes.description}
        />
      ))}
    </div>
  )
}


export default Balance;