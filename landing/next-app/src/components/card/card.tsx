import React from 'react';
import styles from './card.module.css';

interface CardProps {
  title: string
  description: string
  icon: string
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      
    </div>
  );
};

export default Card;
