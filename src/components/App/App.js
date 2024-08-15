import AddItem from "../AddItem/AddItem";
import Header from "../Header/Header";
import Search from "../Search/Search";
import TodoList from "../TodoList/TodoList";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <TodoList />
      <AddItem />
    </div>
  );
}

export default App;
