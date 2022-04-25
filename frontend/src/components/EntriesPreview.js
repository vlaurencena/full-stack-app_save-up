import React, { useEffect, useState } from 'react';
import EntryItem from "../components/EntryItem"
import { Link } from "react-router-dom";

const EntriesPreview = (props) => {

  const [numberOfEntries, setNumberOfEntries] = useState(2);

  const handleMore = () => {
    setNumberOfEntries(numberOfEntries + 2);
  }
  const handleLess = () => {
    setNumberOfEntries(Math.max(numberOfEntries - 2, 2));
  }

  useEffect(() => {
    console.log(numberOfEntries);
  }, [numberOfEntries])

  if (!props.entries) return <p>Loading...</p>

  return (
    <div>
      <div>These are your last entries</div>
      {props.entries.map((entry, index) => (
        index <= Math.min(numberOfEntries, props.entries.length) && <EntryItem
          key={entry.id}
          date={entry.attributes.date}
          description={entry.attributes.description}
          isIncome={entry.attributes.isIncome}
          amount={entry.attributes.amount}
        />
      ))}
    <button onClick={handleMore}>+</button>
    <button onClick={handleLess}>-</button>
    </div>
  )
}

export default EntriesPreview;