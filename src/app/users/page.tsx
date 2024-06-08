import React from 'react'
import Loading from './loading';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' });
  const users: User[] = await res.json();
  return (
    <>
      <div className=' w-full '>
        <div className='grid grid-cols-4'>
          {users.map((user) => (
            <div key={user.id} className='border border-gray-200 p-3 m-3 rounded-lg' >
              <h1 className='text-xl font-bold'>{user.name}</h1>
              <p className='text-sm text-gray-500'>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UserPage