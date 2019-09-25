import React from "react";
import SearchBar from "../components/SearchBar"
import { create } from "react-test-renderer";

describe("SearchBar component", () => {
  test("Matches the snapshot", () => {
    const searchBar = create(<SearchBar />);
    expect(searchBar.toJSON()).toMatchSnapshot();
  });

// test('request to github api', async () => {
//   const Octokit = require('@octokit/rest')
//   const nock = require('nock')
//   const octokit = new Octokit()
//   const scope = nock('https://api.github.com')
//     .get('/')
//     .reply(200, {})

//   await octokit.request('/')
//   scope.done()
// })
});
