import React from "react";
import SearchBar from "../components/SearchBar"
import { create } from "react-test-renderer";

describe("SearchBar component", () => {
  test("Matches the snapshot", () => {
    const searchBar = create(<SearchBar />);
    expect(searchBar.toJSON()).toMatchSnapshot();
  });

  test("it shows the expected text when submitted", () => {
    const component = create(<SearchBar value="richieganney" />);
    const instance = component.getInstance();
    expect(instance.state.username).toBe("");
    instance.onSubmit();
    expect(instance.state.username).toBe("richieganney");
  });

});
