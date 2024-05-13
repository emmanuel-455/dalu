import React, { useEffect, useState } from 'react';
import view from "../asset/viewplay.svg";
//import Music from "../asset/game thumbnail (2).png"

function HomeContent() {

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
    const client_id = '54f1685fdce140b3bcbf2c8642050242';
    const client_secret = '3dcb34e6656a4163bca673a9cf8cac57';
    const refresh_token = 'AQB5aMS34n3dVvvo2n0YxcOmWAFBzbF-EPKFTUK2uzih3jQsfD_S8ttYMsGhVP3SbndXjr9HRXTXc59Bcjzul_6XoAtXX8K9hDo3Hzda4nKukcYKLEY1LoQQsLZkRT-YiVM';
  
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
    const interval = setInterval(updateSongInfo, 1000);
  
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center items-center '>
      <div className='w-[600px] '>
        <div className=''>
          <div className=' md:w-[80%]'>
            <h1 className='text-[15px] font-extrabold'>Creative Designer</h1>
            <div className='mt-4 text-[15px]'>
              <p>Find me on</p>
              <ul className="list-disc underline ml-8 mb-4" style={{ listStyleWidth: "1px" }}>
                <li><a href="https://www.are.na/chidalu-u/channels" target='_blank'>Are.na</a></li>
                <li><a href="https://twitter.com/lynxz000" target='_blank'>Twitter</a></li>
                <li><a href="https://www.read.cv/lynxz" target='_blank'>Read.cv</a></li>
                <li><a href="https://dribbble.com/leo_lynxz/shots" target='_blank'>Dribbble</a></li>
                <li><a href="https://instagram.com/lynxz000" target='_blank'>Instagram</a></li>
              </ul>
            </div>
            <div className='flex justify-between items-center'>
              <div className='bg-[#E6E6E6] w-[55%] h-[2px]'></div>
              <p className='flex font-bold text-[15px] items-center justify-end'>
                <div>
                <a className='flex justify-center items-center text-nowrap pl-3' href="./work">View my work<img className='ml-2' src={view} alt="" /></a>
              </div>
            </p>
            </div>
            <div className='flex mt-[61px] items-start border-2 border-[E5E5E5] px-[15px] py-[15px] py'>
                <div className='relative -z-10 w-[60px] overflow-hidden h-[60px] flex-shrink-0'>
                <div className='absolute  inset-0' style={{ backgroundImage: `url(${songInfo.songImageUrl})`, backgroundSize: 'cover', filter: 'blur(10px)' }}>
                </div>
                <div className=' absolute opacity-30 w-full h-full bg-[#000000]'></div>
                <img className='backdrop-blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[40px] w-[40px]' src={songInfo.songImageUrl} alt="Music" />
                
              
                </div>
              <div className='ml-[17px]'>
                <p className=' inline-block px-[6px] py-[3px] bg-[#E6E6E6] text-[11px]'>Listened to</p>
                <p className=' line-clamp-4 text-[15px] font-bold mt-[5px]'>{songInfo.songName}</p>
                <p className='text-[15px] mt-[3px]'>{songInfo.songArtist}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
