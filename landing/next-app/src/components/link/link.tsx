import React from 'react';
import styles from './styled-link.module.css';
import cn from 'classnames';

type LinkProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const StyledLink: React.FC<LinkProps> = ({ children, href, variant='primary'}) => {
  return (
    <a href={href} className={cn(styles.link, {
      [styles['link--blue']]: variant === 'primary',
      [styles['link--dark-blue']]: variant === 'secondary'
    })}>
      {children}
    </a>
  );
};

export default StyledLink;
