import React from 'react';
import AdditionalRepoInfo from './AdditionalRepoInfo';
import { CardContainer } from '../styles';

const RepositorySearchResult = ({
  data: {
    id,
    full_name,
    description,
    stargazers_count,
    open_issues_count,
    issues_url,
    pulls_url,
    score,
    license,
  },
  full,
}) => {
  return (
    <CardContainer>
      <h3>{full_name}</h3>
      <p>{description}</p>
      <p>
        {stargazers_count} stars | {open_issues_count} open issues
      </p>
      <p>Matching score: {score}</p>
      {full ? (
        <AdditionalRepoInfo
          id={id}
          issues_url={issues_url}
          pulls_url={pulls_url}
          license={license}
        />
      ) : null}
    </CardContainer>
  );
};
export default RepositorySearchResult;
