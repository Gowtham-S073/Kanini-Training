import React from 'react';
import styles from './Submitted.module.css';
import Submit from '../Images/Submit.png';
import Logo from '../Images/Logo.png';

function Submitted() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} className={styles['header_logo']} alt='Logo' />
      </header>
      <div className={styles['submitted_container']}>
        <img src={Submit} alt="Submitted"/>
        <div className={styles['submitted_details']}>
          <h6><b>Your request was submitted</b></h6>
          <p className={styles['order_detail']}>Use the below ID to view/track your request. It was also sent to your email.</p>
          <p className={styles['order_id']}><b>#12345678</b></p>
          <div>
            <button type="button" className={styles['btn_go_home']}>Go to Home &#62;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submitted;
