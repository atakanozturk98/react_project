import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const logoStyle = {
  width: "100px",
  height: "100px",
};

export default class Teams extends Component {
  render() {
    const { teams } = this.props;

    return (
      <div>
        <h1>Teams</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.teamId}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/squads/${team.teamId}`}>
                    <img src={team.logo} alt={team.teamName} style={logoStyle} />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/squads/${team.teamId}`}
                    style={{ textDecoration: "none" }}
                  >
                    {team.teamName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}