import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Post from './Post';

function MyPost() {

    const [post, setPost] = useState([]); // Set initial value as an empty array

    useEffect(() => {
        // get all posts
        axios
            .get('/post/all')
            .then((response) => {
                console.log("MY POST: ", response.data.response);
                setPost(response.data.response); // Set the state with the response data
                
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
                    {/* Show posts  */}
                    <div>
                        {post
                            .filter((post) => post._id === localStorage.getItem('p_id'))
                            .map((post, i) => (
                                <Post key={i} post={post} />
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyPost