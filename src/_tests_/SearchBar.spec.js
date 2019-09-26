import React from "react";
import SearchBar from "../components/SearchBar"
import { create } from "react-test-renderer";

describe("SearchBar component", () => {
  test("Matches the snapshot", () => {
    const searchBar = create(<SearchBar />);
    expect(searchBar.toJSON()).toMatchSnapshot();
  });
});
