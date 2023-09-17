// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";

import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h2>My first Apollo app 🚀</h2>
      <BookList />
    </div>
  );
}

export default App;
