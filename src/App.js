import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-bar.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilteredMonsters] = useState([monsters]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
     const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldstring);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Roledex</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="monsters-search-box"
      />
        <CardList className="card-list" monsters = {filterMonsters}/>
    </div>
  );
};

export default App;
