import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <h1>Reading List</h1>
      <div className="App">
        <BookList />
        <AddBook />
      </div>
    </>
  );
}

export default App;
