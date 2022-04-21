import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

const SingleResource = () => {

    const SINGLE_CONTENT = gql`
        query GetSingleResource($id: ID!) {
            resource(id: $id) {
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

    const { id } = useParams();
    const { loading, data, error } = useQuery(SINGLE_CONTENT, {
        variables: {
            id: id
        }
    });

    console.log(data);

    function formatMyDate(value) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(value).toLocaleDateString("en-US", options);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div className="max-width-1200">
            <h1>{data.resource.data.attributes.title}</h1>
            <p>Published on {formatMyDate(data.resource.data.attributes.publishedAt)}</p>
            <p>{data.resource.data.attributes.body}</p>
        </div>
    )
}

export default SingleResource;