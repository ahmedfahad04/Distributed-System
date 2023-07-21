import axios from "axios";
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

  const handleSubmit = async () => {

    const config = {
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    };

    // authenticate user first
    axios.get('/user/auth', config)
    .then((response) => {
      console.log(response.data.username);

      const newPost = {
        name: response.data.username,
        content: postContent,
        image: postImage,
        timestamp: datetime,
      };

      // post to database
      axios.post('/post/create', newPost)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

      // reload the screen
      // window.location.reload();
  
      console.log(newPost)
      onCreatePost(newPost);
      setIsOpen(false);
      
    })
    .catch((error) => {
      console.log(error)
    })

    
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