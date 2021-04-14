import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { CardDeck } from "./cardDeck";
import { Footer } from "./footer";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron
				title="We are your SoulUtion!"
				lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor."
				description="Nulla pellentesque eget arcu in ultricies. Pellentesque sit amet purus quis est viverra molestie. Curabitur placerat erat vitae magna mattis."
				buttonUrl="#!"
				buttonLabel="Let's Talk"
			/>

			<CardDeck />
			<Footer />
		</div>
	);
}
