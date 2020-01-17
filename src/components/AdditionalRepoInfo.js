import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles';

const AdditionalRepoInfo = ({ id, issues_url, pulls_url, license }) => {
  const getURLwithID = (url, id) => url.replace('{/number}', `/${id}`);
  const issueURLwithID = getURLwithID(issues_url, id);
  const pullURLwithID = getURLwithID(pulls_url, id);
  return (
    <>
      <p>
        Links: <a href={issueURLwithID}>Issue</a> |{' '}
        <a href={pullURLwithID}>Pull requests</a>
      </p>
      {license ? (
        <p>
          {license.name} | {license.spdx_id} |{' '}
          <a href={license.url}>License URL</a>
        </p>
      ) : null}
      <Link to="/repositories">
        <Button>Back</Button>
      </Link>
    </>
  );
};

export default AdditionalRepoInfo;
