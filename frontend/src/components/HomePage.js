import React from 'react'
import Layout from '../Layout'
import MakePost from './MakePost'
import Notification from './Notification'
import Post from './Post'

function HomePage() {


  return (
    <Layout>
      <div class='flex flex-row h-screen w-screen justify-center bg-neutral-200' style={{ paddingTop: '100px', overflow: 'scroll' }}>

        {/* posts */}
        <div class='m-2 h-screen md:h-screen'>

          {/* make post */}
          <div className='flex justify-center items-center mb-5'>

            {/* <button onClick={handleShowPostWindow}
            class="py-2 px-4 bg-[#54AE93] text-white font-semibold rounded-lg shadow-md hover:bg-[#21184D] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Create Post
            </button> */}

            <MakePost />

          </div>

          {/* Show posts  */}
          <div>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

          </div>

        </div>

        {/* friends */}
        {/* <div className='m-2 h-full md:h-screen' style={{ overflow: 'scroll' }}> */}

        {/* friends heading */}
        {/* <div class='ml-7 p-5 font-medium text-2xl rounded-lg'>
            <h1>
              Friends
            </h1>
          </div> */}

        {/* friends list  */}
        {/* <div class='px-10'>

            <Friend name={'John Doe'} image={'https://picsum.photos/200'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/100'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/150'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/250'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/990'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/210'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/290'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/000'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/000'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/000'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/000'} />
            <Friend name={'John Doe'} image={'https://picsum.photos/000'} />

          </div> */}

        {/* </div> */}

        {/* notification */}
        <div className='mt-5 h-full md:h-screen p-5' style={{ overflow: 'scroll' }}>
          <div class='font-medium text-2xl rounded-lg'>
            <h1>
              Notifications
            </h1>
          </div>
          <div class='mt-10 border-2 border-slate-800'>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </div>

        </div>

      </div>

    </Layout>
  )
}

export default HomePage