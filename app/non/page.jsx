import Link from "next/link";

async function fetchFollowing(){
    const response = await fetch('https://api.github.com/users/president-banda/following?per_page=200');
    const following = await response.json();
    return following
}

async function fetchFollowers(){
    const response = await fetch('https://api.github.com/users/president-banda/followers?per_page=200');
    const followers = await response.json();
    return followers
}

const NonFollowersPage = async() => {

    const followers = await fetchFollowers();
    const following = await fetchFollowing();
   
      const notFollowing = following.filter(user => {
        return !followers.find(follower => follower.login === user.login);
      });
      
      
      

    console.log(notFollowing);
  return (
    <div className="grid grid-cols-3 justify-center text-center">
            <div className="glassmorphic-container col-start-2 m-1 text-lg">
               You Have { Object.keys(notFollowing).length } People Not Following You
            </div>

            <div className="glassmorphic-container col-start-2 m-10">
                <ul className="justify-center items-center  ">
                    { notFollowing.map((follower) => (
                        <li key={follower.id}>
                            <div className="grid grid-cols-3 mb-5 focus:border">
                                <img src={follower.avatar_url}  width={50} height={50} loading="lazy"/>
                                { follower.login }
                                <Link href={follower.html_url}>View Profile</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default NonFollowersPage