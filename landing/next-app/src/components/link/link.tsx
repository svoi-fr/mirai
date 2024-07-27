import React from 'react';
import styles from './styled-link.module.css';
import Link from 'next/link';
import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const StyledLink: React.FC<ButtonProps> = ({ children, href, variant='primary'}) => {
  return (
    <Link href={href} className={cn(styles.link, {
      [styles['link--blue']]: variant === 'primary',
      [styles['link--dark-blue']]: variant === 'secondary'
    })}>
      {children}
    </Link>
  );
};

export default StyledLink;
