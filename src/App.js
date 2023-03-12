import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-bar.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {console.log(this.state);}
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField}}
    )};

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return(
      <div className= 'App'>
        <h1 className= 'app-title'>Monster Roledex</h1>
        <SearchBar 
        onChangeHandler = {onSearchChange}
        placeholder = 'Search Monster'
        className= 'monsters-search-box'
        />
        <CardList monsters = {filterMonsters}/>
      </div>
    );
  }
}

export default App;
