import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import styles from '../styles/Modal.module.css';

const Modal = ({ setIsOpen }) => {
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
            <textarea className={styles.textarea} name="w3review" rows="6" cols="50" placeholder="Enter your text here..."/>
          </div>

          <div className={styles.imagename}>
            <h1 class='px-5 text-slate-500 flex justify-center flex-col'>uploaded image name..</h1>
          </div>

          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              <button 
              className={styles.deleteBtn} 
              // onClick={() => setIsOpen(false)}
              >
                Upload Image
              </button>

              <button
                className={styles.postBtn}
                onClick={() => setIsOpen(false)}
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