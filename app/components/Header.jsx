import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-center text-xl'>
        <div className='space-x-10'>
            <Link href="/followers">
                Followers
            </Link>

            <Link href="/following">
                Following
            </Link>

            <Link href="/non">
                Non Follower
            </Link>
        </div>
    </div>
  )
}

export default Header