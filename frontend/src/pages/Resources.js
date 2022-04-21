import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const RESOURCES = gql`
  query GetResources {
    resources {
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

const CATEGORIES = gql`
  query GetCategories{
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

const Resources = (props) => {

  console.log(props);

  const authorization = {
    "Authorization": `Bearer ${props.token}`
  }

  console.log(authorization);

  const { loading: resourcesQueryLoading, data: resources, error: resourcesQueryError } = useQuery(RESOURCES);
  const { loading: categoriesQueryLoading, data: categories, error: categoriesQueryError } = useQuery(CATEGORIES);

  if (resourcesQueryLoading || categoriesQueryLoading) return <p>Loading...</p>
  if (resourcesQueryError || categoriesQueryError) return <p>Error...</p>

  console.log(resources);
  console.log(categories);

  ///////////////////////////// 

  function formatMyDate(value) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(value).toLocaleDateString('en-US', options);
  }

  return (
    <div className="resources-container max-width-1200 flex-grow-1">
      <h1>Resources to save money!</h1>
      <nav className="category-navbar">
        <span>Filter resources by category:</span>
        <Link className="capitalize category-link" to="/resources">All</Link>
        {categories.categories.data.map(category => (
          <Link className="capitalize category-link" key={category.id} to={`resources/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </nav>
      {resources.resources.data.map(resource => (
        <div key={resource.id}>
          <h2>{resource.attributes.title}</h2>
          <p>Published on {formatMyDate(resource.attributes.publishedAt)}</p>
          <p>{resource.attributes.body.substring(0, 200)}...</p>
          <Link to={`/resources/${resource.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}

export default Resources;