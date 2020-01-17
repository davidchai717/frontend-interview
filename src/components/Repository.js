import React from "react";
import { Route } from "react-router-dom";

const RepositorySearchResult = ({ data: { id, full_name, description, stargazers_count, open_issues_count, issues_url, pulls_url, score, license } }) => {
  const getURLwithID = (url, id) => url.replace("{/number}", `/${id}`);
  const issueURLwithID = getURLwithID(issues_url, id);
  const pullURLwithID = getURLwithID(pulls_url, id);
  return (
    <div>
      <h3>{full_name}</h3>
      <p>{description}</p>
      <p>{stargazers_count} stars | {open_issues_count} open issues</p>
      <p>Matching score: {score}</p>
      <Route path="/repositories/:id">
        <p><a href={issueURLwithID}>Issue link</a> | <a href={pullURLwithID}>Pull requests</a></p>
        {license 
          ? <p>
            {license.name} | {license.spdx_id}} | <a href={license.url}>License URL</a>
          </p>
          : null}
      </Route>
    </div>
  );
};

export default RepositorySearchResult;