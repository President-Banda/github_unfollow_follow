'use client'
import { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="text-center pt-10">
      <form className="h-10 flex flex-row text-center align-middle justify-center">
        <input
          className="rounded-lg h-full mr-2 border border-slate-900 p-5"
          type="text"
          name="search"
          placeholder="Enter Your Username..."
          value={search}
          onChange={handleInputChange}
        />

        <Link
          href={{
            pathname: '/followers',
            query: { search: search }
          }}
        >
          <span className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 p-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold rounded-lg items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
            Go ...
          </span>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;