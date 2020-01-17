import React from "react";

const AdditionalRepoInfo = ({ id, issues_url, pulls_url, license }) => {
  console.log(issues_url, pulls_url)
  const getURLwithID = (url, id) => url.replace("{/number}", `/${id}`);
  const issueURLwithID = getURLwithID(issues_url, id);
  const pullURLwithID = getURLwithID(pulls_url, id);
  return (
    <>
      <p>Links: <a href={issueURLwithID}>Issue</a> | <a href={pullURLwithID}>Pull requests</a></p>
      {license ? <p>
            {license.name} | {license.spdx_id} | <a href={license.url}>License URL</a>
          </p>
          : null}
    </>
  );
};

export default AdditionalRepoInfo;