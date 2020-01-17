import * as React from "react";
import { useSetUserContext } from "../contexts/user";
import { TextField, Button } from "../styles";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();
  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <p>
          <TextField
            name="email"
            type="email"
            placeholder="Email address"
            value={user.email}
            onChange={event => {
              setUser({
                ...user,
                email: event.target.value
              });
            }}
            required={true}
          />
        </p>
        <p>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={event => {
              setUser({
                ...user,
                password: event.target.value
              });
            }}
            required={true}
          />
        </p>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
