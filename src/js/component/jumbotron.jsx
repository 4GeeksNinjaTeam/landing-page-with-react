import React from "react";

//create your first component
export const Jumbotron = () => {
	return (
		<div className="jumbotron m-0 pb-5 px-5 pt-0">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
				commodo ligula eget dolor. Aenean massa. Cum sociis natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
				quis, sem.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};
