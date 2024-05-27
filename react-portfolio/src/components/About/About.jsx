import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
   <section className={styles.container} id="education">
    <h2 className={styles.title}>Education</h2>
    <div className={styles.content}>
    <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}><img className={styles.aboutIcon} src={getImageUrl("about/school.png")} alt="university icon"  />
    <div className={styles.aboutItemText}>
        <h3>B.Sc. (Hons.) in Software Engineering at University of Kelaniya </h3><br />
        <p><b>Current GPA – 3.67 / 4.00</b><br /><br />
<b>Domains</b>:<br /> Data Science and Engineering Application<br />
 Net-Centric Application<br />
 Business Engineering Application</p>
    </div>
    </li>
    <li className={styles.aboutItem}><img className={styles.aboutIcon} src={getImageUrl("about/school-bag.png")} alt="school icon" />
    <div className={styles.aboutItemText}>
        <h3>G.C.E. A/L – Physical Science    (Vishaka Balika Vidyalaya, Sapugaskanda)
</h3><br />
        <p>Combined Mathematics-A<br />
 Information Com. Technology-B<br />
 Physics-C<br />
 General English-A</p>
    </div>
    </li>
    </ul>
    </div></section>
  );
}

export default About
