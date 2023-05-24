import Link from 'next/link'
import { CiStreamOn, CiStreamOff, CiWifiOn } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex flex-row justify-center text-xl glassmorphic-container'>
        <div className='space-x-10'>
            <Link href="/followers" className="inline-flex text-center items-center">
                <span className='mr-1 scale-125'>
                    <CiStreamOn />
                </span>
                Followers
            </Link>

            <Link href="/following" className="inline-flex text-center items-center">
                <span className='mr-1 scale-125'>
                    <CiWifiOn />
                </span>
                Following
            </Link>

            <Link href="/non"   className="inline-flex text-center items-center">
                <span className='mr-1 scale-125'>
                    <CiStreamOff />
                </span>
                Non Follower
            </Link>
        </div>
    </div>
  )
}

export default Header