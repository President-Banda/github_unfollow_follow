import Link from "next/link";

async function fetchFollowers(){
    const response = await fetch('https://api.github.com/users/president-banda/followers?per_page=100');
    const followers = await response.json();
    return followers
}

const FollowersPage = async () => {
    const followers =  await fetchFollowers();
    //console.log(followers);
  return <div className="grid grid-cols-3 justify-center text-center">
            <div className="glassmorphic-container col-start-2 m-1 text-lg">
                You Have : { Object.keys(followers).length } Followers
            </div>

            <div className="glassmorphic-container col-start-2 m-10">
                <ul className="justify-center items-center  ">
                    { followers.map((follower) => (
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
}

export default FollowersPage