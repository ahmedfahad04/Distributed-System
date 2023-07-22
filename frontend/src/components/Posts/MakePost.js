import React, { useState } from 'react';
import Modal from './Modal';
import styles from '../../styles/Modal.module.css';

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