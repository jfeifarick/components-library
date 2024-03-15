import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyNewLibraryProps {}

const StyledMyNewLibrary = styled.div`
  color: pink;
`;

export function MyNewLibrary(props: MyNewLibraryProps) {
  return (
    <StyledMyNewLibrary>
      <h1>Welcome to MyNewLibrary!</h1>
    </StyledMyNewLibrary>
  );
}

export default MyNewLibrary;
