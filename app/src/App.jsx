import { useEffect, useState } from "react";
import "./App.css";
import { CardAvatar } from "./components/CardAvatar";

function App() {
  // URL til at hente all brugere
  const url = `https://jsonplaceholder.typicode.com/users`;

  // State til at gemme array med alle brugere
  const [userData, setUserData] = useState([]);

  // Function til at hente alle brugere
  function getAllUsers() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }

  // useEffect kører når siden loader og henter all brugere
  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(userData);

  return (
    <>
      <h1>Fetch eksempel</h1>
      <button onClick={() => getAllUsers()}>Fetch users!!</button>
      {userData.map((user) => {
        return (
          <CardAvatar
            key={user.id}
            name={user.name}
            website={user.website}
            username={user.username}
          />
        );
      })}
    </>
  );
}

export default App;
