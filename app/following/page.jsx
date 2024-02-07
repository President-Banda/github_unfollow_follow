'use client';
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import fetchFollowing from './fetchFollowing';


const FollowingPage = ({searchParams}) => {
    
    const username = searchParams.search;

    //console.log (username);
    const [following, setFollowing] = useState([])

    useEffect(() => {
      const fetchFollowings = async() => {
        const response = await fetchFollowing(username);
        
        setFollowing(response);
      };
    
      fetchFollowings();

      console.log(following);
    }, [])

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
                                <img src={following.avatar_url}  width={50} height={50} loading="lazy" className="rounded-lg"/>
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