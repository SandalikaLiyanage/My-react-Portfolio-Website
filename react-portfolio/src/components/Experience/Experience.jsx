import React from 'react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: `${skill.level}%` }}>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
