import React from "react";
import { render, rerender, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Episodes from "../components/Episodes";
import { fetchShows as mockFetchShow } from "../api/fetchShow";

jest.mock("../api/fetchShow");

const fakeData = [
	{
		airdate: "2016-07-15",
		airstamp: "2016-07-15T12:00:00+00:00",
		airtime: "",
		id: 578669,
		image: {
			medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
			original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg"
			},
		name: "Chapter Eight: The Upside Down",
		number: 8,
		runtime: 60,
		season: 1,
		summary: "<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
		type: "regular",
		url: "http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down"
	}
]

test('App renders withour errors', () => {
	render(<App />)
});

test("Episodes renders with fakeData", () => {
	const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);
    rerender(<Episodes episodes={fakeData} />);

    const episodes = getAllByTestId(/episode/i);
    expect(episodes).toHaveLength(1);
});