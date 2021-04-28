import React from "react";
import { NavBar } from "./component/navbar.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
import { Cards } from "./component/cards.jsx";
import { Footer } from "./component/footer.jsx";

const App = () => {
	let cards = [
		{
			name: "Bob Dylan",
			description:
				"Bob Dylan, ​ registrado al nacer como Robert Allen Zimmerman, es un músico, compositor, cantante y poeta estadounidense.",
			imageURL:
				"https://wmagazin.com/wp-content/uploads/2017/04/ES-ppal-Dylan.jpg",
			buttonLabel: "Wikipedia",
			buttonURL: "https://es.wikipedia.org/wiki/Bob_Dylan"
		},
		{
			name: "Paul Mccartney",
			description:
				"James Paul McCartney es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico.",
			imageURL:
				"https://los40es00.epimg.net/los40/imagenes/2020/12/23/los40classic/1608723212_225459_1608723516_noticia_normal.jpg",
			buttonLabel: "Wikipedia",
			buttonURL: "https://es.wikipedia.org/wiki/Paul_McCartney"
		},
		{
			name: "Michael Jackson",
			description:
				"Michael Joseph Jackson​ fue un cantante, compositor, productor discográfico, bailarín, actor y filántropo estadounidense",
			imageURL:
				"https://www.hola.com/imagenes/biografias/michael-jackson/79629-jackson10.jpg",
			buttonLabel: "Wikipedia",
			buttonURL: "https://es.wikipedia.org/wiki/Michael_Jackson"
		},
		{
			name: "Demi Moore",
			description:
				"Demetria Gene Guynes, conocida profesionalmente como Demi Moore, es una actriz, modelo y productora estadounidense",
			imageURL:
				"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJiDIPYw-23SGP5-IVdaU9DvnjUEYiYg8ltRmBy2ho_JjG_Z951b9eYscPZ1e1",
			buttonLabel: "Wikipedia",
			buttonURL: "https://es.wikipedia.org/wiki/Demi_Moore"
		}
	];

	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{cards.map((item, i) => {
						return (
							<Cards
								key={i}
								name={item.name}
								description={item.description}
								imageUrl={item.imageURL}
								buttonUrl={item.buttonURL}
								buttonLabel={item.buttonLabel}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default App;
