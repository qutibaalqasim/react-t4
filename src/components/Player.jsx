import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({...player,
      score: player.score + 1,
    });
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setPlayer({...player,
      [name]: value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
         type="text"
          value={player.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </label>
      <label>
        Last name:
        <input
         type="text"
          value={player.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </label>
    </>
  );
  }