import React, { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import ResourcePreview from "../components/ResourcePreview";
import BalancePreview from "../components/BalancePreview";
import EntriesPreview from "../components/EntriesPreview";
import axios from "axios";

const Dashboard = (props) => {

  const [lastResource, setLastResource] = useState(null);

  //LAST RESOURCE
  const RESOURCE = gql`
  query GetResources {
    resources(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          title
          body
          publishedAt
        }
      }
    }
  }
`;

  const { loading, data, error } = useQuery(RESOURCE);

  useEffect(() => {
    data && setLastResource(data.resources.data[0]);
  }, [data]);

  //LAST ENTRIES
  const [dateFilteredEntries, setDateFilteredEntries] = useState("");
  const [entries, setEntries] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [periodText, setPeriodText] = useState("");

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

  useEffect(() => {
    getCurrentUserEmail();
  }, []);

  const getDateFilteredEntries = () => {
    axios
      .get(`http://localhost:1337/api/entries?sort[0]=date%3Adesc&filters[userEmail][$eq]=${currentUserEmail}&${dateFilter}`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        }
      })
      .then((response) => {
        // Handle success.
        //console.log("Success! You got current user's entries!");
        setDateFilteredEntries(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };


  const getEntries = () => {
    axios
      .get(`http://localhost:1337/api/entries?sort[0]=date%3Adesc&filters[userEmail][$eq]=${currentUserEmail}`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        }
      })
      .then((response) => {
        // Handle success.
        //console.log("Success! You got current user's entries!");
        setEntries(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  useEffect(() => {
    currentUserEmail && getDateFilteredEntries();
    currentUserEmail && getEntries();
  }, [currentUserEmail, dateFilter]);

  //BALANCE PREVIEW
  const [totalBalance, setTotalBalance] = useState("");

  const handleDateFilter = (e) => {
    const filterBase = "&filters[date][$gte]=";
    let today = new Date();
    let newDate;
    console.log(e.target.name);
    e.target.name === "all" && setDateFilter("");
    if (e.target.name === "last-year") {
      newDate = today.setDate(today.getDate() - 365);
      newDate = new Date(newDate).toISOString().slice(0, 10);
      setPeriodText("last year's ")
      setDateFilter((filterBase + newDate));
    } else if (e.target.name === "last-30-days") {
      newDate = today.setDate(today.getDate() - 30);
      newDate = new Date(newDate).toISOString().slice(0, 10);
      setPeriodText("last 30 days' ")
      setDateFilter((filterBase + newDate));
    } else if (e.target.name === "last-7-days") {
      newDate = today.setDate(today.getDate() - 7);
      newDate = new Date(newDate).toISOString().slice(0, 10);
      setPeriodText("last 7 days' ")
      setDateFilter((filterBase + newDate));
    } else if (e.target.name === "all") {
      setDateFilter("");
      setPeriodText("");
    }
  }

  useEffect(() => {
    let balance = 0;
    dateFilteredEntries && dateFilteredEntries.forEach(entry => {
      entry.attributes.isIncome ? balance += entry.attributes.amount : balance -= entry.attributes.amount
    });
    setTotalBalance(balance);
  }, [dateFilteredEntries]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div className="flex-grow-1 max-width-1200 dashboard-container">
      <div className="last-resource-preview-container">
        <div>Check out our last resource!</div>
        {lastResource && <ResourcePreview
          key={lastResource.id}
          id={lastResource.id}
          title={lastResource.attributes.title}
          body={lastResource.attributes.body}
          publishedAt={lastResource.attributes.publishedAt}
        />}
      </div>
      <div className="balance-preview-container">
        <BalancePreview
          handleDateFilter={handleDateFilter}
          periodText={periodText}
          totalBalance={totalBalance}
        />
      </div>
      <div className="entries-preview-container">
        <EntriesPreview
          entries={entries} />
      </div>
    </div>
  )
}

export default Dashboard