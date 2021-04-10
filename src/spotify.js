export const authEndpoint = 
'https://accounts.spotify.com/authorize';


const redirectUri = 'https://localhost:3000/';
const clientId = '6982637b5a9c40278ff6f530c1fc2cf7';

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-top-read",
    "user-modify-playback-state"
];


export const loginUrl = `${authEndpoint}
  ?client_id=${clientId}
  &redirect_uri=${redirectUri}
  &scope=${scopes.join("%20"
  )}&response_type=token&show_dialog=true`;
