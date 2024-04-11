import React, { useEffect, useState } from 'react';
//import MusicImage from "../asset/game thumbnail (2).png";
import Movie from "../asset/game thumbnail (1).png";
import Game from "../asset/game thumbnail (3).png";
import Book from "../asset/game thumbnail (4).png";

function MediaContent() {
  const [songInfo, setSongInfo] = useState({
    songName: "",
    songArtist: "",
    songImageUrl: ""
  });

  useEffect(() => {
    const getAccessToken = () => {
      return fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
        },
        body: 'grant_type=refresh_token&refresh_token=' + refresh_token
      })
      .then(response => response.json())
      .then(data => {
        access_token = data.access_token;
        setTimeout(getAccessToken, (data.expires_in - 60) * 1000);
        return access_token;
      })
      .catch(error => {
        console.error(error);
      });
    };
  
    const getSongInfo = () => {
      return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then(response => {
        if (response.status === 204) {
          return fetch('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data && data.items.length > 0) {
              const lastPlayed = data.items[0].track;
              return {
                songName: lastPlayed.name,
                songArtist: lastPlayed.artists[0].name,
                songImageUrl: lastPlayed.album.images[0].url
              };
            } else {
              throw new Error('No recently played tracks found');
            }
          });
        } else {
          return response.json()
          .then(data => {
            return {
              songName: data.item.name,
              songArtist: data.item.artists[0].name,
              songImageUrl: data.item.album.images[0].url
            };
          });
        }
      })
      .catch(error => {
        console.error(error);
        document.getElementById('song').innerHTML = 'Error fetching song information';
      });
    };
  
    let access_token;
    const client_id = 'de4e099723ec4964a2b53eb340ba8672';
    const client_secret = '1fe4a452c4244f1381dcee4c9fcdffca';
    const refresh_token = 'AQBt847kZdrKdZkycXZmMrrK-zgmEnHbvGdFLRXkHI0aEK4HYN_wrq9EMF9CxLBqi9_VGMaLDGbcu7rgDBDYNL0lBt9GTWEvIM67NOlGGtvenmAifTT5OfZY017DGrJv8IY';
  
    const updateSongInfo = () => {
      getAccessToken()
      .then(() => {
        return getSongInfo();
      })
      .then(songInfo => {
        setSongInfo(songInfo);
      });
    };
  
    // Initial call to updateSongInfo
    updateSongInfo();
  
    // Set interval to refresh every 3 seconds
    const interval = setInterval(updateSongInfo, 3000);
  
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='md:pl-[120px]'>
      <div className=' mt-9 md:pt-[100px]'>
        <h1 className='font-extrabold mb-4 text-[20px] md:text-[24px]'>media diary</h1>
        

        <div className='mb-5'>
          <div className='flex items-center md:w-[700px]'>
            <img className='w-[100px] md:w-[100px]' src={songInfo.songImageUrl} alt="Music" />
            <div className='ml-5 md:ml-[30px]'>
              <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>Music</p>
              <p className='text-[15px] font-bold mt-[5px]'>{songInfo.songName}</p>
              <p className='text-[15px] mt-[3px]'>{songInfo.songArtist}</p>
            </div>
          </div>
        </div>
        
        {/* Remaining media content items */}
        <div className='mb-5'>
          <div className='flex items-center md:w-[700px]'>
            <img className='w-[100px] md:w-[100px]' src={Movie} alt="" />
            <div className='ml-5 md:ml-[30px]'>
              <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>Movie</p>
              <p className='text-[15px] font-bold mt-[5px]'>Oppenheimer</p>
            </div>
          </div>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center md:w-[700px]'>
            <img className='w-[100px] md:w-[100px]' src={Game} alt="" />
            <div className='ml-5 md:ml-[30px]'>
              <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>Game</p>
              <p className='text-[15px] font-bold mt-[5px]'>The pathless</p>
              <p className='text-[15px] mt-[3px]'></p>
            </div>
          </div>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center md:w-[700px]'>
            <img className='w-[100px] md:w-[100px]' src={Book} alt="" />
            <div className='ml-5 md:ml-[30px]'>
              <p className='bg-[#E6E6E6] px-2 py-1 inline text-[13px]'>Book</p>
              <p className='text-[15px] font-bold mt-[5px]'>Ego is the enemy</p>
              <p className='text-[15px] mt-[3px]'>Ryan Holiday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaContent;
