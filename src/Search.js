import React, { useState } from 'react'

const Search = () => {
    const students = [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 5, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 6, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 7, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 8, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 9, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 10, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 11, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 12, name: 'Asad', age: 25, email: 'asad@email.com' },
        { id: 13, name: 'Asad', age: 25, email: 'alala#.com' },
    ]
    const [length, setLength] = useState(-1);
    const [search, setSearch] = useState("");
    const [studentsData, setStudentsData] = useState(students);

    const dltData = (id) => {
        const filteredData = studentsData.filter((val) => {
            return val.id !== id;
        })
        setStudentsData(filteredData);
    }

    const setToggle = (id) => {

        setLength(id);
    }

    return (
        <>

            {
                students.map((val, index) => {
                    return (<>
                        <div>
                            {
                                length === index ?
                                    <button onClick={() => setToggle(index)}> - </button>
                                    :
                                    <button onClick={() => setToggle(index)}> + </button>
                            }

                            <p>{val.name}</p>
                            {
                                length === index ?
                                    <p>{val.email}</p>
                                    :
                                    null
                            }

                        </div>
                    </>);
                })
            }
            <input type="text" name="" id="" value={search} onChange={(event) => setSearch(event.target.value)} />
            <div class="overflow-x-auto">
                <div class="min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
                    <div class="w-full lg:w-5/6">
                        <div class="bg-white shadow-md rounded my-6">
                            <table class="min-w-max w-full table-auto">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left">ID</th>
                                        <th class="py-3 px-6 text-left">Name</th>
                                        <th class="py-3 px-6 text-center">Users</th>
                                        <th class="py-3 px-6 text-center">Email</th>
                                        <th class="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    {
                                        studentsData.filter((val) => {
                                            if (search == "") {
                                                return val;
                                            }
                                            else if ((val.name.toUpperCase().includes(search.toUpperCase())) || (val.email.toUpperCase().includes(search.toUpperCase()))) {
                                                return val;
                                            }
                                        }).map((val, index) => {
                                            return (<>
                                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                                        <div class="flex items-center">

                                                            <span class="font-medium">{val.id}</span>
                                                        </div>
                                                    </td>
                                                    <td class="py-3 px-6 text-left">
                                                        <div class="flex items-center">
                                                            <div class="mr-2">
                                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                            </div>
                                                            <span>{val.name}</span>
                                                        </div>
                                                    </td>
                                                    <td class="py-3 px-6 text-center">
                                                        <div class="flex items-center justify-center">
                                                            <img class="w-6 h-6 rounded-full border-gray-200 border  hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                            <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                            <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                                        </div>
                                                    </td>
                                                    <td class="py-3 px-6 text-center">
                                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{val.email}</span>
                                                    </td>
                                                    <td class="py-3 px-6 text-center">
                                                        <div class="flex item-center justify-center">
                                                            <div class="w-4 mr-2 cursor-pointer hover:text-purple-500 hover:scale-110">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                </svg>
                                                            </div>
                                                            <div class="w-4 mr-2 cursor-pointer hover:text-purple-500 hover:scale-110">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                </svg>
                                                            </div>
                                                            <div class="w-4 mr-2 cursor-pointer hover:text-purple-500 hover:scale-110" onClick={() => dltData(val.id)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>);
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
