import Link from "next/link";

async function fetchFollowing(){
    const response = await fetch('https://api.github.com/users/president-banda/following?per_page=100');
    const following = await response.json();
    return following
}

const FollowingPage = async() => {
    const following = await fetchFollowing();

  return (
    <div className="grid grid-cols-3 justify-center text-center">
            <div className="glassmorphic-container col-start-2 m-1 text-lg">
               You Are Following: { Object.keys(following).length } People
            </div>

            <div className="glassmorphic-container col-start-2 m-10">
                <ul className="justify-center items-center  ">
                    { following.map((following) => (
                        <li key={following.id}>
                            <div className="grid grid-cols-3 mb-5 focus:border">
                                <img src={following.avatar_url}  width={50} height={50} loading="lazy"/>
                                { following.login }
                                <Link href={following.html_url}>View Profile</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default FollowingPage