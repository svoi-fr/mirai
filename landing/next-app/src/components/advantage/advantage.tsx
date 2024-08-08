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
  icon?: IconType;
}

const icons = {
  verified: <VerifiedIcon />,
  confidentiality: <ConfidentialityIcon />,
  hours: <HoursIcon />,
  multilang: <MultilangIcon />,
  friendly: <FriendlyIcon />,
  personalized: <PersonalizedIcon />,
};

export const Advantage: React.FC<AdvantageProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <li className={styles.item}>
      {icon && <div className={styles.icon}>{icons[icon]}</div>}
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};
