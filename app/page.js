'use client';
import { useState } from "react";

const HomePage = () => {
  const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(query);
        const response = await fetch(`/api/courses/search?query=${query}`);

        const courses = await response.json();

        getSearchResults(courses);
    }
  return (
    <div className="text-center pt-10">
      {/* <div class="neomorphic-container bg-gray-800 p-10 rounded-xl shadow-lg">
        <h1 class="text-gray-100">Welcome to my website</h1>
        <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis mauris sit amet cursus iaculis. Sed in urna vitae lacus consequat interdum. Praesent ac justo purus.</p>
      </div> */}


        <form className=" h-10 flex flex-row text-center align-middle justify-center" onSubmit={ handleSubmit }>
            <input className="rounded-lg h-full mr-2 border border-slate-900" type="text" placeholder="Enter Your Username..." value={ query }
            onChange={ (e)=> setQuery( e.target.value )} ></input>

            <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 p-2
             focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold rounded-lg items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20
               dark:hover:bg-sky-400" type="submit">
                Go ...
            </button>
        </form>
    </div>
  )
}

export default HomePage

