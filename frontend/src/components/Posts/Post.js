import React from 'react';

function Post({ post }) {
  return (
    <div className='mb-5 m-2 rounded-lg p-2 shadow-xl bg-stone-200 ' style={{ width: '40rem' }}>
      <div>
        <div>
          <div className='flex '>

            <div>
            <img src={'https://picsum.photos/200'} className='w-14 rounded-full mr-2 border-2 border-white-500 shadow' alt='avatar' />
            </div>
            <div>
              <h1 className='text-2xl font-medium text-black'>
                {post.name}
              </h1>
              <h4 className='text-xs font-light'>
                {post.timestamp}
              </h4>
            </div>

          </div>
        </div>
        <div className='mt-3 text-xl'>
          {post.content}
        </div>

        {/* Show Image  */}
        <div className='flex justify-center items-center mt-2'>
          <img src={'http://192.168.1.9:9000/distributed-system/'+post.image} className='w-full rounded-lg border-2 border-white-500 shadow' alt='post_image' />
          {/* {'http://192.168.0.124:9000/distributed-system/'+post.image} */}
        </div>
      </div>
    </div>
  );
}

export default Post;
