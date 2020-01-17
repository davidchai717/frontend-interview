import styled from 'styled-components';

export const MainBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-style: none;
  border-radius: 10px;
  background-color: skyblue;
  padding: 5px 10px;
  &:hover {
    background-color: rgb(77, 160, 193);
    cursor: pointer;
  }
  &:focus {
    border-color: blue;
    outline: none;
  }
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  li > a {
    text-decoration: none;
    color: grey;
    margin-right: 10px;
    &:hover {
      color: black;
    }
  }
`;

export const CardContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: grey;
  padding: 5px 10px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: grey;
    margin-right: 10px;
    &:hover {
      color: black;
    }
  }
`;

export const TextField = styled.input`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: grey;
  padding: 5px 10px;
  &:hover {
    border-color: black;
  }
  &:focus {
    border-color: black;
    outline: none;
  }
`;
