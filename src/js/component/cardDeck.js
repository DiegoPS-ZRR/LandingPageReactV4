import React from "react";
import { Cards } from "./cards";

export const CardDeck = () => {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			<Cards
				title="Legal"
				description="Donec efficitur malesuada ligula quis consequat. Sed volutpat turpis elit, interdum ornare leo vulputate."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Develop"
				description="Donec efficitur malesuada ligula quis consequat. Sed volutpat turpis elit, interdum ornare leo vulputate."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Real Estate"
				description="Donec efficitur malesuada ligula quis consequat. Sed volutpat turpis elit, interdum ornare leo vulputate."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Vacations"
				description="Donec efficitur malesuada ligula quis consequat. Sed volutpat turpis elit, interdum ornare leo vulputate."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
		</div>
	);
};
