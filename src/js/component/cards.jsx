import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	const style = {
		//width: "500px",
		//margin: "10px"
	};

	const pictureStyle = {
		position: "relative"
	};

	const imgStyle = {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover"
	};

	return (
		<div className="card col-3" style={style}>
			<picture style={pictureStyle}>
				<img
					src={props.imageUrl}
					className="card-img-top img-fluid"
					alt="card image"
					style={imgStyle}></img>
			</picture>
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
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string
};
