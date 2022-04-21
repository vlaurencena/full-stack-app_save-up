import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const HOME_INFO = gql`
  query GetHomeInfo {
    home {
      data {
        attributes {
          title
          subtitle
          description
          heroBackground {
            data {
              attributes {
                url
              }
            }
          }
          heroButton {
            text
            href
          }
          ourValues
        }
      }
    }
  }`;

const Home = (props) => {

  const { loading, data, error } = useQuery(HOME_INFO);

  const [heroSectionBgImageSrc, setHeroSectionBgImageSrc] = useState({})

  useEffect(() => {
    if (loading === false) {
      //  console.log(data.home.data.attributes.heroButton.href);
      setHeroSectionBgImageSrc({ backgroundImage: `url(http://localhost:1337${data.home.data.attributes.heroBackground.data[0].attributes.url})` })
    };
  }, [loading]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div className="flex-grow-1 ">
      <div className="hero-section" style={heroSectionBgImageSrc}>
        <div className="hero-section__title">{data.home.data.attributes.title}</div>
        <div className="hero-section__subtitle">{data.home.data.attributes.subtitle}</div>
        <NavLink to={data.home.data.attributes.heroButton.href} className="button-style">{data.home.data.attributes.heroButton.text}</NavLink>
      </div>
      <div className="max-width-1200">
        <ReactMarkdown className="description-section max-width-1200">{data.home.data.attributes.description}</ReactMarkdown>
        <div className="values-section">
          <div className="values-title">{data.home.data.attributes.ourValues.sectionTitle}</div>
          <div className="values-container">
            {data.home.data.attributes.ourValues.values.map((value, i) => (
              <div className="value-item" key={i}>
                <div>{value.title}</div>
                <div>{value.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;