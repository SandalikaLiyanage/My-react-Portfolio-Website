import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}><h2>Contact</h2>
    <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
            <a href="mailto:sandalika24@gmail.com">sandalika24@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked In icon" />
            <a href="https://www.linkedin.com/in/sandalika-liyanage/">linkedin.com/sandalika-liyanage</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
            <a href="https://github.com/SandalikaLiyanage">github.com/SandalikaLiyanage</a>
        </li>
    </ul>
  </footer>;
}

export default Contact
