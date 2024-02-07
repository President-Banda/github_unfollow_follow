'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import fetchFollowers from "./fetchFollowers";


const FollowersPage = ( {searchParams} ) => {

    const username = searchParams.search;

    //console.log (username);
    const [followers, setFollowers] = useState([])

    useEffect(() => {
      const fetchFollower = async() => {
        const response = await fetchFollowers(username);
        
        setFollowers(response);
      };
    
      fetchFollower();

      console.log(followers);
    }, [])
    

    // try {
    //     if (!searchParams || !searchParams.search) {
    //       throw new Error('Invalid search parameters');
    //     }
    
    //     const user = searchParams.search;
    
    //     // Rest of your code handling followers...
    
    //   } catch (error) {
    //     console.error('Error occurred:', error);
    //     // Handle or display the error appropriately
    //   }

    // const followers =  await fetchFollowers(user);
    // //console.log(followers);
  return <div className="grid grid-cols-3 justify-center text-center">
            <div className="glassmorphic-container col-start-2 m-1 text-lg">
                You Have : { Object.keys(followers).length } Followers
            </div>

            <div className="glassmorphic-container col-start-2 m-10">
                <ul className="justify-center items-center  ">
                    { followers.map((follower) => (
                        <li key={follower.id}>
                            <div className="grid grid-cols-3 mb-5 focus:border">
                                <img src={follower.avatar_url}  width={50} height={50} loading="lazy" className="rounded-lg"/>
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

// const FollowersPage = ({ searchParams }) => {
//     console.log(searchParams.search) // Logs "search"
//   }
  
//   export default FollowersPage
  