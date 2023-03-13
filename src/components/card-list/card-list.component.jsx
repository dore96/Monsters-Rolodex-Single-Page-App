import { Component } from "react";
import Card from "../card/card";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster,id) => {
          return <Card monster={monster} key = {id}/>;
        })}
      </div>
    );
  }
}

export default CardList;
