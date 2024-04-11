import React, { useEffect, useState } from 'react';
import './App.css';

const CLIENT_ID = "de4e099723ec4964a2b53eb340ba8672";
const REDIRECT_URI = "http://localhost:3000/resume"; // Replace with your redirect URI
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = "user-read-recently-played";

function App() {
  const [token, setToken] = useState("");
  const [lastPlayed, setLastPlayed] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    if (token) {
      fetchLastPlayed(token);
    }

    console.log(token); // Log the token here
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  const fetchLastPlayed = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.items.length > 0) {
          setLastPlayed(data.items[0]);
        }
      } else {
        throw new Error('Failed to fetch last played track');
      }
    } catch (error) {
      console.error('Error fetching last played track:', error);
    }
  };

  return (
    <>
      {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login</a>
        : <button onClick={logout}>Logout</button>}
      
      {/* Display last played track */}
      {lastPlayed && (
        <div>
          <h2>Last Played:</h2>
          <img src={lastPlayed.track.album.images[0].url} alt={lastPlayed.track.album.name} />
          <p>{lastPlayed.track.name} by {lastPlayed.track.artists.map(artist => artist.name).join(', ')}</p>
        </div>
      )}
    </>
  );
}

export default App;
