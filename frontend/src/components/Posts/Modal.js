import axios from "axios";
import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import styles from '../../styles/Modal.module.css';

const Modal = ({ setIsOpen, onCreatePost }) => {

  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  const handleSubmitPost = async () => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    };

    // authenticate user first
    axios.get('/user/auth', config)
      .then((response) => {
                
        localStorage.setItem('u_id', response.data.user.u_id)

        // UPLOAD IMAGE >>>>>>>>>>>>>>>>>>

        if (!selectedFile) {
          console.log('No image selected.');
          return;
        }
    
        console.log("IMG: ", selectedFile);
    
        const formData = new FormData();
        formData.append('image', selectedFile);
    
        // Replace the URL with your backend endpoint for image upload
        axios.post('/image/uploadIMG', formData)
          .then((response) => {
            console.log('Image uploaded successfully.', response.data.etag.etag);
            setPostImage(response.data.etag.etag);
          })
          .catch((error) => {
            console.error('Error uploading the image:', error);
          });

        // UPLOAD IMAGE <<<<<<<<<<<<<<<<<<

        const newPost = {
          u_id: response.data.user.u_id,
          name: response.data.user.name,
          content: postContent,
          image: postImage,
          timestamp: datetime,
        };

        const newNotification = {
          p_id: '',
          u_id: response.data.user.u_id,
          content: response.data.user.name + " has posted a new memory!!",
          timestamp: datetime
        };


        // post to database
        axios.post('/post/create', newPost)
          .then((response) => {
            console.log(response);

            newNotification.p_id = response.data.postID;

            console.log("NEW NOT: ", newNotification)
            console.log("NEW POST: ", newPost)

            // add notification to db
            axios.post('/notify/add', newNotification)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

            onCreatePost(newPost);
            setIsOpen(false);

          })
          .catch((error) => {
            console.log(error);
          });

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageUpload = (file) => {
    if (file) {
      // Update the state with the selected file name
      setPostImage(file.name);
      setSelectedFile(file);
      // You can also save the actual file in the state if needed
      // setPostImage(file);
    } else {
      // Clear the state if no file is selected
      setPostImage('');
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.log('No image selected.');
      return;
    }

    console.log("IMG: ", selectedFile);

    const formData = new FormData();
    formData.append('image', selectedFile);

    // Replace the URL with your backend endpoint for image upload
    axios.post('/image/uploadIMG', formData)
      .then((response) => {
        console.log('Image uploaded successfully.', response.data.etag.etag);
        setPostImage(response.data.etag.etag);
      })
      .catch((error) => {
        console.error('Error uploading the image:', error);
      });
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
            <textarea className={styles.textarea} name="w3review" rows="6" cols="50" value={postContent} onChange={event => setPostContent(event.target.value)} placeholder="Enter your text here..." />
          </div>

          <div className={styles.imagename}>
            <h1 class="px-5 text-blue-500 font-medium flex justify-center flex-col">
              {postImage}
            </h1>
          </div>

          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>

            <div style={{ display: 'flex', width: '120px', whiteSpace: 'nowrap', height: "50px", marginTop: "5px" }}>
              <label htmlFor="files" className="text-black hover:bg-red-600 border-2 justify-center items-center flex border-grey-200 px-5 rounded-2xl bg-red-400 cursor-pointer">
                Select Image
              </label>
              <input
                id="files"
                style={{ visibility: 'hidden' }}
                type="file"
                onChange={(event) => handleImageUpload(event.target.files[0])}
              />
              <button onClick={handleUpload} className="text-black">Upload</button>
            </div>

            

              <button
                className={styles.postBtn}
                onClick={handleSubmitPost}
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