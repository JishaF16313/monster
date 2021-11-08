import React, { Component } from "react";
import "./App.css";
import CardList from "./componets/card-list/card-list.component";
import {SearchBox} from "./componets/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchItem: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => this.setState({ monsters: d }));
  }
   handleChange=(e)=>{
  
          this.setState({ searchItem: e.target.value }, 
             () => {
             console.log(this.state);
           }
         )
  }
  render() {
    const { monsters, searchItem } = this.state;

    const filteredMonster = monsters.filter((monster) => {
     return  monster.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    console.log("filteredMonster",filteredMonster);
    return (
      <div className="App">
        <h1>Monster Robots</h1>
       <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonster}/>
      </div>
    );
  }
}
export default App;
