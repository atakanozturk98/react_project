import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";

export default class Squads extends Component {
  state = {
    teams: [],
    selectedTeamId: null,
    footballers: [],
  };

  componentDidMount() {
    this.getTeams();
  }

  getTeams = () => {
    fetch("http://localhost:3000/teams")
      .then((response) => response.json())
      .then((data) => this.setState({ teams: data }));
  };

  getFootballers = (teamId) => {
    let url = "http://localhost:3000/footballers";
    if (teamId != null) {
      url += "?teamId=" + teamId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ footballers: data }));
  };

  handleTeamChange = (event) => {
    const teamId = event.target.value;
    this.setState({ selectedTeamId: teamId });
    this.getFootballers(teamId);
  };

  render() {
    const { teams, selectedTeamId, footballers } = this.state;

    return (
      <div>
        <h3>Squads</h3>
        <Form>
          <Form.Group controlId="teamSelect">
            <Form.Label>Select a Team</Form.Label>
            <br></br>
            <Form.Control
              as="select"
              value={selectedTeamId || ""}
              onChange={this.handleTeamChange}
            >
              <option value={teams}>All Teams</option>
              {teams.map((team) => (
                <option key={team.teamId} value={team.teamId}>
                  <img
                    src={team.logo}
                    alt={team.teamName}
                    style={{ width: "20px", height: "20px", marginRight: "5px" }}
                  />
                  {team.teamName}
                </option>
              ))}
            </Form.Control>
            <br></br>
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Market Value</th>
            </tr>
          </thead>
          <tbody>
            {footballers.map((footballer, index) => (
              <tr key={footballer.Id}>
                <td>{index + 1}</td>
                <td>{footballer.name}</td>
                <td>{footballer.surname}</td>
                <td>{footballer.goals}</td>
                <td>{footballer.assists}</td>
                <td>{footballer.marketValue} mil. €</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}