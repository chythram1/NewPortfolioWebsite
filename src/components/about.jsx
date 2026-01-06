import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.p className="about-lead" variants={itemVariants}>
            I'm a junior studying Computer Science at Virginia Tech. I am passionate about applying software engineering, data-driven insights, and AI to solve real-world problems and improve system efficiencies.
          </motion.p>

          <motion.p className="about-text" variants={itemVariants}>
            As a conference-published co-author and previous intern at three companies, I have extensive, multidisciplinary experience working in both academic and real-world technical environments.
          </motion.p>

          <motion.div
            className="about-highlights"
            variants={containerVariants}
          >
            <motion.div className="highlight-item" variants={highlightVariants}>
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Internships</span>
            </motion.div>
            <motion.div className="highlight-item" variants={highlightVariants}>
              <span className="highlight-number">1</span>
              <span className="highlight-label">Publication</span>
            </motion.div>
            <motion.div className="highlight-item" variants={highlightVariants}>
              <span className="highlight-number">4+</span>
              <span className="highlight-label">Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};