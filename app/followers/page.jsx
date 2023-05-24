async function fetchFollowers(){
    const response = await fetch('https://api.github.com/users/president-banda/followers');
    const followers = await response.json();
    return followers
}

const FollowersPage = async () => {
    const followers =  await fetchFollowers();
    //console.log(followers);
  return (
    <div>page</div>
  )
}

export default FollowersPage