import React from "react";
import { create } from "react-test-renderer";
import FavouriteLanguage from "../components/FavouriteLanguage";

describe("favourite function", () => {
    test("returns the most frequent string in an array", () => {
      const component = create(<FavouriteLanguage />);
      const instance = component.getInstance();
      languages = ["Ruby", "JavaScript", "JavaScript", "Python", "C#" ]
      expect(instance.favourite(languages)).toBe("JavaScript");
    });
});