import styled from "styled-components";
import { GlobalStyle } from "./utils/Global";
import Rating from "./components/Rating";

export default function App() {
  return (
    <>
      <Layout>
        <div>
          <h1>Rate your experience</h1>
          <Rating maxRating={5} name="rating" />
        </div>
      </Layout>
      <GlobalStyle />
    </>
  );
}

const Layout = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
