import React, { Component } from "react";
import Header from "./Header";
import Leagues from "./Leagues";
import TotalMarketValue from "./TotalMarketValue";
import Teams from "./Teams";
import { Route, Routes } from "react-router-dom";
import { Col, Row, Container, Table } from "reactstrap";
import Squad from "./Squad";
import Edit from "./Edit";

export default class App extends Component {
  state = {
    leagues: [],
    teams: [],
    currentLeague: "",
    selectedTeamId: null,
  };

  changeLeague = (league) => {
    this.setState({ currentLeague: league.leagueName });
    this.getTeams(league.id);
  };

  getTeams = (teamId) => {
    let url = "http://localhost:3000/teams";
    if (teamId != null) {
      url += "?leagueId=" + teamId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ teams: data }));
  };

  componentDidMount() {
    this.getLeagues();
    this.getTeams();
  }

  getLeagues = () => {
    fetch("http://localhost:3000/league")
      .then((response) => response.json())
      .then((data) => this.setState({ leagues: data }));
  };

  handleTeamChange = (teamId) => {
    this.setState({ selectedTeamId: teamId });
  };

  render() {
    const { leagues, teams, currentLeague, selectedTeamId } = this.state;

    return (
      <div className="App">
        <Container>
          <Header />
          <Row>
            <Col xs="3">
              <Leagues
                leagues={leagues}
                currentLeague={currentLeague}
                changeLeague={this.changeLeague}
              />
            </Col>
            <Col xs="6">
              <Routes>
                <Route
                  path="/teams"
                  element={<Teams teams={teams} handleTeamChange={this.handleTeamChange} />}
                />
                <Route
                  path="/squad"
                  element={<Squad selectedTeamId={selectedTeamId} />}
                />
                <Route
                  path="/edit"
                  element={<Edit teams={teams} handleTeamChange={this.handleTeamChange} />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}