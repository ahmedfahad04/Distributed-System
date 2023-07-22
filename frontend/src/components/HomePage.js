import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import MakePost from './MakePost';
import Post from './Post';

function HomePage() {
  const [posts, setPosts] = useState([]); // Set initial value as an empty array

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  useEffect(() => {
    // get all posts
    axios
      .get('/post/all')
      .then((response) => {
        console.log("POST: ",response.data.response);
        setPosts(response.data.response); // Set the state with the response data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div class='flex flex-row h-full w-full justify-center '>
        {/* posts */}
        <div class='m-2 h-screen md:h-screen'>
          {/* make post */}
          <div className='flex justify-center items-center mb-5'>
            <MakePost addPost={addPost} />
          </div>
          {/* Show posts  */}
          <div>
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
