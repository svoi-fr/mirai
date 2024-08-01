import React from 'react';
import styles from './advantage.module.scss';
import VerifiedIcon from '../icons/verified';
import ConfidentialityIcon from '../icons/confidentiality';
import HoursIcon from '../icons/hours';
import MultilangIcon from '../icons/multilang';
import FriendlyIcon from '../icons/friendly';
import PersonalizedIcon from '../icons/personalized';
import { IconType } from '@/consts/consts';

interface AdvantageProps {
  title: string;
  description: string;
  icon?: IconType
}

const icons = {
  verified: <VerifiedIcon className={styles.icon} />,
  confidentiality: <ConfidentialityIcon className={styles.icon}/>,
  hours: <HoursIcon className={styles.icon}/>,
  multilang:<MultilangIcon className={styles.icon}/>,
  friendly: <FriendlyIcon className={styles.icon}/>,
  personalized: <PersonalizedIcon className={styles.icon}/>
}

export const Advantage: React.FC<AdvantageProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <li className={styles.item}>
      {icon && icons[icon]}
      <div className={styles.contentContainer}>
        <div className={styles.h}>{title}</div>
        <p className={styles.textWrapper}>{description}</p>
      </div>
    </li>
  );
};
