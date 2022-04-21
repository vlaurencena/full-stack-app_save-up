import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams, Link } from "react-router-dom";

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

const CATEGORY = gql`
  query GetResourcesByCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`;

const Category = () => {

  const { id } = useParams();

  console.log(id);

  const { loading: categoriesQueryLoading, data: categories, error: categoriesQueryError } = useQuery(CATEGORIES);
  const { loading: resourcesByCategoryQueryLoading, data: resourcesByCategory, error: resourcesByCategoryQueryError } = useQuery(CATEGORY, {
    variables: { id: id }
  });

  if (resourcesByCategoryQueryLoading || categoriesQueryLoading) return <p>Loading...</p>
  if (resourcesByCategoryQueryError || categoriesQueryError) return <p>Error...</p>

  function formatMyDate(value) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(value).toLocaleDateString('en-US', options);
  }

  console.log(resourcesByCategory.category.data.attributes.resources.data)

  return (
    <div className="resources-container max-width-1200 flex-grow-1">
      <h1>Resources related to {resourcesByCategory.category.data.attributes.name}!</h1>
      {<nav className="category-navbar">
        <span>Filter resources by category:</span>
        <Link className="capitalize category-link" to="/resources">All</Link>
        {categories.categories.data.map(category => (
          <Link className="capitalize category-link" key={category.id} to={`/resources/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </nav>}
      {resourcesByCategory.category.data.attributes.resources.data.map(resource => (
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

export default Category;