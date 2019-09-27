import { favourite } from '../components/FavouriteLanguage'

describe("favourite language component", () => {
  it("returns the most frequent string in an array", () => {
      let languages = ["Ruby", "C#", "PHP", "JavaScript", "JavaScript" ]
      expect(favourite(languages)).toBe("JavaScript");
  });
})
