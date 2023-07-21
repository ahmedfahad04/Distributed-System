import React from 'react';

function Post({ post }) {
  return (
    <div className='mb-5 m-2 border-2 border-slate-500 rounded-lg p-2 shadow-xl bg-slate-200 ' style={{ width: '40rem' }}>
      <div>
        <div>
          <h1 className='text-2xl font-medium'>
            {post.name}
          </h1>
          <h4 className='text-xs font-light'>
            {post.timestamp}
          </h4>
          <hr
            style={{
              background: 'grey',
              color: 'blue',
              height: '3px',
              marginTop: '10px',
            }}
          />
        </div>
        <div className='mt-3'>
          {post.content}
        </div>

        {/* Show Image  */}
        <div className='flex justify-center items-center mt-2'>
          <img src={post.image} className='w-full rounded-lg border-2 border-white-500 shadow' alt='avatar' />
        </div>
      </div>
    </div>
  );
}

export default Post;
