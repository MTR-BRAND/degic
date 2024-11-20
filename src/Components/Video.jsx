import React from 'react'

function Video() {
  return (
    <section className='bg-gray-100 py-24 px-12'>
        <div>
            <h1 className='text-center text-2xl md:text-5xl font-semibold'>Use illustrations in UI design</h1>

          <div className='flex justify-center  items-center mt-16'>
             <img className='w-md object-cover rounded-xl' src="/video.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default Video