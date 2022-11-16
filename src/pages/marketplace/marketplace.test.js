import { render, screen } from "@testing-library/react";
import Marketplace from "./marketplace";

test("renders Marketplace page", () => {
	render(<Marketplace/>);
	const linkElement = screen.getByTestId("Marketplace");
	expect(linkElement).toBeInTheDocument();
});

test("renders Marketplace Filter", () => {
	render(<Marketplace/>);
	const linkElement = screen.getByTestId("MarketplaceFilters");
	expect(linkElement).toBeInTheDocument();
});

test("renders Marketplace searchbar", () => {
	render(<Marketplace/>);
	const linkElement = screen.getByTestId("MarketplaceSearchbar");
	expect(linkElement).toBeInTheDocument();
});
