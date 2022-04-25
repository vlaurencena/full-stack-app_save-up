import React from 'react';
import { Link } from "react-router-dom";

const ResourcePreview = (props) => {

    function formatMyDate(value) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(value).toLocaleDateString('en-US', options);
    }

    return (
        <div key={props.id}>
            <h2>{props.title}</h2>
            <p>Published on {formatMyDate(props.publishedAt)}</p>
            <p>{props.body.substring(0, 200)}...</p>
            <Link to={`/resources/${props.id}`}>Read more...</Link>
        </div>
    )
}

export default ResourcePreview;