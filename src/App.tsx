//Hannah Johnson mission 9 section 2
//This program displays data for basketball teams
import React from "react";
import logo from "./logo.svg";
import "./App.css";
//bring in json file
import teamDataJson from "./CollegeBasketballTeams.json";

//set up interface based on the data (I end up not using it in this case though)
interface TeamJson {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// declare variable
const teamData = teamDataJson.teams;

// Title to introduce the user
function Welcome() {
  return <h1>College Basketball Team Data</h1>;
}

// function for the team card that will be displayed
function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
}

//map the dataaa- TeamList function calls the TeamCard function
function TeamList() {
  return (
    <div className="team-list">
      {teamData.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

// this main function calls the others
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
