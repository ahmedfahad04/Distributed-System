import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import styles from '../styles/Modal.module.css';

const Modal = ({ setIsOpen, onCreatePost }) => {
  
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('');

  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  const handleSubmit = () => {
    const newPost = {
      user: "User",
      content: postContent,
      image: postImage,
      timestamp: datetime,
    };
    onCreatePost(newPost);
    setIsOpen(false);
  };
  
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>

          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create Post</h5>
          </div>

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseCircleFill style={{ marginBottom: "-3px" }} />
          </button>

          <div className={styles.modalContent}>
            <textarea className={styles.textarea} name="w3review" rows="6" cols="50"value={postContent} onChange={event => setPostContent(event.target.value)} placeholder="Enter your text here..."/>
          </div>

          <div className={styles.imagename}>
            <h1 class='px-5 text-slate-500 flex justify-center flex-col'>{postImage} { postImage.length > 0? " - Image Uploaded!!":"Upload Image..."}</h1>
          </div>

          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              <button 
              className={styles.deleteBtn} 
              onClick={() => setPostImage('')} // ***** save image location ***** //
              >
                Upload Image
              </button>

              <button
                className={styles.postBtn}
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;