import React from 'react';

const fetchFollowers = async (username) => {
    //console.log(username);
   // const response = await fetch(`https://api.github.com/users/${username}/followers?per_page=200`);
    const response = await fetch(`https://api.github.com/users/${username}/followers?per_page=200`);
    const followers = await response.json();

    //console.log(followers);
    return followers;
}

export default fetchFollowers