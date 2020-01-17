import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GITHUB_LINK, getRepositoryRoute } from "../constants/routes";
import RepositorySearchResult from "./RepositorySearchResult";
import { TextField } from "../styles";

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  const [searchResults, updateResults] = React.useState(null);
  const [timeout, updateTimeout] = React.useState(null);
  // Anonymized fetch link for ease of testing
  const fetchResult = (link, searchTerm) => {
    fetch(link + searchTerm)
      .then(res => res.json())
      .then(({ total_count, items }) => {
        console.log(items)
        updateResults(items);
      })
      .catch(err => {
        throw err;
      });
  }
  return (
    <Switch>
      <Route path="/repositories/:id" component={({ match: { params: { id } } }) => {
        return searchResults && searchResults[id] ? 
          <RepositorySearchResult data={searchResults[id]} full={true} />
        : <div>
          Invalid request
        </div>
      }} />
      <Route path="/repositories/">
        <main>
          <TextField name="search-terms" onChange={(e) => {
            if (timeout) {
              clearTimeout(timeout);
            }
            const searchValue = e.target.value;
            updateTimeout(setTimeout(() => {
              fetchResult(GITHUB_LINK, searchValue)
            }, 500));
          }} />
          {searchResults ? searchResults.map(
            (entry, i) => <Link to={getRepositoryRoute(i)} key={`result-${i}`}>
              <RepositorySearchResult data={entry} full={false} />
            </Link>
            ) : (
            <div>Enter some text to search GitHub repositories</div>
          )}
        </main>
      </Route>
    </Switch>
  );
};

export default Repositories;
