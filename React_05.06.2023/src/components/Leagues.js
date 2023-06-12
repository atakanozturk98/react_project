import React from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";

export default class Leagues extends React.Component {
  state = {
    leagues: [],
  };

  componentDidMount() {
    this.getLeagues();
  }

  getLeagues = () => {
    fetch("http://localhost:3000/leagues")
      .then((response) => response.json())
      .then((data) => this.setState({ leagues: data }));
  };

  render() {
    const { leagues, currentLeague, changeLeague } = this.props;

    return (
      <ListGroup>
      {this.props.leagues.map((league) => (
        <ListGroupItem
          active={league.leagueName === currentLeague}
          onClick={() => changeLeague(league)}
          key={league.id}
        >
          {league.leagueName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
}