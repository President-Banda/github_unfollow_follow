const fetchFollowing = async ( username ) =>{
    const response = await fetch(`https://api.github.com/users/${username}/following?per_page=200`);
    const following = await response.json();

    return following
}

export default fetchFollowing;