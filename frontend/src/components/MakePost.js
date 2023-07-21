import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import Modal from './Modal';

function MakePost({addPost}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleCreatePost = (newPost) => {
    addPost(newPost);
    setIsOpen(false);
    // send a request to the server to save the post norification
  };

  return (
    <div>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Create Post
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} onCreatePost={handleCreatePost}/>}
    </div>
  );
}
export default MakePost