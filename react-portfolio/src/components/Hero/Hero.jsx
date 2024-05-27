import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Sandalika.</h1>
    <p className={styles.description}>I am passionate about data science. Reach out if you'd like to hire me.</p>
    <a href="mailto:sandalika24@gmail.com" className={styles.contactBtn}>Contact Me</a></div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
    
  
);
};

export default Hero
