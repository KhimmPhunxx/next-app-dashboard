import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <main className=' w-full'>
      <section className=' max-w-7xl mx-auto mt-20 grid md:grid-cols-2'>
        <div className="flex flex-col space-y-6">
          <Skeleton className="h-14 w-[500px] rounded-xl" />
          <Skeleton className="h-14 w-[300px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[400px]" />
          </div>
          <div className='flex space-x-4'>
            <Skeleton className="h-14 w-[100px] rounded-xl" />
            <Skeleton className="h-14 w-[100px] rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-96 w-full rounded-xl" />
        </div>
      </section>

      <section className=' max-w-7xl mx-auto mt-20'>
        <div className=' space-y-2'>
          <Skeleton className="h-14 w-[400px] rounded-xl mx-auto" />
          <Skeleton className="h-14 w-[300px] rounded-xl mx-auto" />
        </div>
        <section className=' grid md:grid-cols-2 mt-10 gap-10'>
          <div className="flex flex-col space-y-6 w-full p-10">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className='space-y-2'>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          <div className="flex flex-col space-y-6 w-full p-10">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className='space-y-2'>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </section>
      </section>

      <section className=' max-w-7xl mx-auto mt-20 grid md:grid-cols-2'>
        <div className="flex flex-col space-y-6">
          <Skeleton className="h-14 w-[500px] rounded-xl" />
          <Skeleton className="h-14 w-[300px] rounded-xl" />

          <div className='flex space-x-1'>
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-14 w-14 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className='grid grid-cols-2 h-full'>
            <div className=' flex flex-col justify-between'>
              <Skeleton className="h-14 w-14 rounded-xl" />
              <Skeleton className="h-4 w-full rounded-xl" />
              <Skeleton className="h-4 w-40 rounded-xl" />
            </div>
            <div className='flex justify-center items-center'>
              <Skeleton className="h-48 w-48 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-2xl mx-auto mt-20'>
        <div className="flex flex-col space-y-6">
          <Skeleton className="h-5 w-72 mx-auto rounded-xl" />
          <Skeleton className="h-8 w-[400px] mx-auto rounded-xl" />
          <Skeleton className="h-8 w-[400px] mx-auto rounded-xl" />
          <Skeleton className="h-8 w-[400px] mx-auto rounded-xl" />

          <div className='flex w-full flex-col space-y-2 mx-auto'>
            <Skeleton className="h-4 w-[80%] mx-auto rounded-full" />
            <Skeleton className="h-4 w-[80%] mx-auto rounded-full" />
            <Skeleton className="h-4 w-[80%] mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <section>
        <div className=' max-w-7xl mx-auto mt-20 grid md:grid-cols-2'>
          <div className="flex flex-col space-y-16 w-[80%]">
            <div className='flex flex-col space-y-3'>
              <Skeleton className="h-14 w-[500px] rounded-xl" />
              <Skeleton className="h-14 w-[300px] rounded-xl" />
            </div>
            <div className="space-x-2 flex justify-between">
              <div className='space-y-2'>
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className='space-y-2'>
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className='space-y-2'>
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className='flex space-y-4 flex-col'>
              <Skeleton className="h-6 w-[100px] rounded-xl" />
              <div className=' flex space-x-3'>
                <Skeleton className="h-14 w-14 rounded-full" />
                <Skeleton className="h-14 w-14 rounded-full" />
                <Skeleton className="h-14 w-14 rounded-full" />
                <Skeleton className="h-14 w-14 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
           <div className=' space-y-2'>
            <Skeleton className="h-4 w-20 rounded-xl" />
            <Skeleton className="h-10 w-full rounded-xl" />
           </div>
           <div className=' space-y-2'>
            <Skeleton className="h-4 w-20 rounded-xl" />
            <Skeleton className="h-10 w-full rounded-xl" />
           </div>
           <div className=' space-y-2'>
            <Skeleton className="h-4 w-20 rounded-xl" />
            <Skeleton className="h-10 w-full rounded-xl" />
           </div>
           <div className=' space-y-2'>
            <Skeleton className="h-4 w-20 rounded-xl" />
            <Skeleton className="h-16 w-full rounded-xl" />
           </div>
           <div className=' space-y-2'>

            <Skeleton className="h-10 w-full rounded-xl" />
           </div>
          </div>
        </div>
      </section>
    </main>
    )
}

export default Loading