import React from "react";
import PropTypes from "prop-types";

export const Cards2 = props => {
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="col-lg-3 col-md-12 mx-auto">
			<div className="card card-block" style={styles}>
				<div className="card-header">
					<img
						src={props.imageUrl}
						className="card-img-top img-fluid"
						alt="Imagen"></img>
				</div>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Cards2.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string
};
