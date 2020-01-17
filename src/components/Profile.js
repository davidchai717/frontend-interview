import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const { email, name } = user;
  const setUserContext = useSetUserContext();

  // form state
  const [formData, updateForm] = React.useState({
    email,
    name
  });

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUserContext({
            ...user,
            ...formData
          })
        }}
      >
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={e => {
            updateForm({
              ...user,
              email: e.target.value
            });
          }}
          required={true}
        />
        <input
          name="name"
          value={formData.name}
          onChange={e => {
            updateForm({
              ...user,
              name: e.target.value
            });
          }}
          required={true}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
