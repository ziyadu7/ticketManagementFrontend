import React from 'react'

function Search({setSearch}) {
    return (
        <div className="flex mb-3 items-center p-4">
            <label
                htmlFor="exampleSearch2"
                className="me-2 text-slate-500"
            >
                Search :
            </label>
            <input
            onChange={(e)=>setSearch(e.target.value)}
                type="search"
                className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6]"
                id="exampleSearch2"
                placeholder="Type query"
            />
        </div>
    )
}

export default Search