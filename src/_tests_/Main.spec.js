import React from "react";
import Main from "../Main"
import { create } from "react-test-renderer";

describe("Main component", () => {
  test("Matches the snapshot", () => {
    const main = create(<Main />);
    expect(main.toJSON()).toMatchSnapshot();
  });
});