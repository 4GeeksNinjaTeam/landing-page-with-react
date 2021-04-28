//import React from "react";
//import PropTypes from "prop-types";

export const Card = props => {
    const style = {
        width: "500px",
        margin: "10px"
    }

    const imgStyle = {
        width: "500px"
    }

    return (
        <div className="card" style={style}>
            <img
                src={props.imageUrl}
                className="card-img-top"
                alt="card image"
                style={imgStyle}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a href={props.buttonUrl} className="btn btn-primary">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
}