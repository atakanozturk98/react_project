import React, { Component } from "react";

export default class Edit extends Component {
  state = {
    type: "",
    leagueId: "",
    teamId: "",
    name: "",
    surname: "",
    goals: "",
    assists: "",
    marketValue: "",
    id: "",
    teamName: "",
    image: "",
    leagueName: "",
    logo: "",
    Id:"",
  };

  handleInputChange = (event) => {
    const { name, type, value, files } = event.target;

    this.setState({
      [name]: type === "file" ? (URL.createObjectURL(event.target.files[0])) : value,
    });


  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      type,
      leagueId,
      teamId,
      name,
      surname,
      goals,
      assists,
      marketValue,
      id,
      Id,
      teamName,
      image,
      leagueName,
      logo,
    } = this.state;

    const data = {
      type,
      leagueId,
      teamId,
      name,
      surname,
      goals,
      assists,
      marketValue,
      id,
      Id,
      teamName,
      image,
      leagueName,
      logo,
    };

    let path = "";

    if (type === "league") {
      path = "/league";
    } else if (type === "player") {
      path = "/footballers";
    } else if (type === "team") {
      path = "/teams";
    }

    fetch(`http://localhost:3000${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {


      //
      this.setState({
      type: "",
      leagueId: "",
       teamId: "",
       name: "",
       surname: "",
       goals: "",
      assists: "",
       marketValue: "",
      id: "",
      teamName: "",
      image: "",
      leagueName: "",
      logo: "",
        });
      })
  };

  render() {
    const {
      type,
      leagueId,
      teamId,
      name,
      surname,
      goals,
      assists,
      marketValue,
      id,
      Id,
      teamName,
      image,
      leagueName,
      logo,
    } = this.state;

    return (
      <div>
        <h2>Oyuncu / Lig / Takım Ekle</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="type">Tip:</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={this.handleInputChange}
          >
            <option value="">Seçiniz</option>
            <option value="player">Oyuncu</option>
            <option value="league">Lig</option>
            <option value="team">Takım</option>
          </select>
          <br />

          {(type === "player" || type === "team") && (
            <>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={this.handleInputChange}
              />
              <br />
            </>
          )}

          {type === "player" && (
            <>
              <label htmlFor="teamId">Takım ID:</label>
              <input
                type="text"
                id="teamId"
                name="teamId"
                value={Id}
                onChange={this.handleInputChange}
              />
               <br />
              <label htmlFor="teamId">Takım ID:</label>
              <input
                type="text"
                id="teamId"
                name="teamId"
                value={teamId}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="name">İsim:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="surname">Soyisim:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={surname}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="goals">Goller:</label>
              <input
                type="text"
                id="goals"
                name="goals"
                value={goals}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="assists">Asistler:</label>
              <input
                type="text"
                id="assists"
                name="assists"
                value={assists}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="marketValue">Piyasa Değeri:</label>
              <input
                type="text"
                id="marketValue"
                name="marketValue"
                value={marketValue}
                onChange={this.handleInputChange}
              />
              <br />
            </>
          )}

          {type === "league" && (
            <>
              <label htmlFor="id">Lig İd:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="leagueName">Lig İsmi:</label>
              <input
                type="text"
                id="leagueName"
                name="leagueName"
                value={leagueName}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="image">Logo:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={this.handleInputChange}
              />
              <br />
            </>
          )}

          {type === "team" && (
            <>
              <label htmlFor="leagueId">Lig ID:</label>
              <input
                type="text"
                id="leagueId"
                name="leagueId"
                value={leagueId}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="teamName">Takım İsmi:</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={teamName}
                onChange={this.handleInputChange}
              />
              <br />

              <label htmlFor="logo">Logo:</label>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={this.handleInputChange}
              />
              <br /> 
            </>
          )}

          <button type="submit">Ekle</button>
        </form>
      </div>
    );
  }
}