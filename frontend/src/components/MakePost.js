import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import Modal from './Modal';

function MakePost() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Create Post
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}
export default MakePost