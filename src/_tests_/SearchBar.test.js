import { getRepoLanguages } from '../components/SearchBar'

describe("search bar component", () => {
  it("returns a new array from a json object", () => {
      let fakeUserData = {
        object: "fake object", 
        data: [ {language: "Ruby"}, {language:"C#"}, {language: "PHP"}, {language: "JavaScript"}, {language:"JavaScript"} ]
      }
      const expected = ["Ruby", "C#", "PHP", "JavaScript", "JavaScript" ]
      expect(getRepoLanguages(fakeUserData)).toEqual(expect.arrayContaining(expected));
  });
})
