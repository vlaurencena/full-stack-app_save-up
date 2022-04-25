import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ResourcePreview from "../components/ResourcePreview";

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

const Resources = () => {

  const { loading: resourcesQueryLoading, data: resources, error: resourcesQueryError } = useQuery(RESOURCES);
  const { loading: categoriesQueryLoading, data: categories, error: categoriesQueryError } = useQuery(CATEGORIES);

  if (resourcesQueryLoading || categoriesQueryLoading) return <p>Loading...</p>
  if (resourcesQueryError || categoriesQueryError) return <p>Error...</p>

  ///////////////////////////// 


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
        <ResourcePreview
          key={resource.id}
          id={resource.id}
          title={resource.attributes.title}
          body={resource.attributes.body}
          publishedAt={resource.attributes.publishedAt}
        />
      ))}
    </div>
  )
}

export default Resources;