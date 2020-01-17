import * as React from 'react';
import { useUserContext, useSetUserContext } from '../contexts/user';
import { TextField, Button } from '../styles';

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
    name,
  });

  const [status, setStatus] = React.useState(null);

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUserContext({
            ...user,
            ...formData,
          });
          setStatus('Profile updated successfully.');
        }}
      >
        <TextField
          name="email"
          type="email"
          value={formData.email}
          onChange={e => {
            updateForm({
              ...user,
              email: e.target.value,
            });
          }}
          required={true}
        />
        <TextField
          name="name"
          value={formData.name}
          onChange={e => {
            updateForm({
              ...user,
              name: e.target.value,
            });
          }}
          required={true}
        />
        <Button type="submit">Submit</Button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Profile;
