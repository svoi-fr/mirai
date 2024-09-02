import React from 'react';
import styles from './styled-button.module.scss';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
};

const StyledButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'small'
}) => {
  return (
    <a
      className={cn(styles.button, {
        [styles['button--blue']]: variant === 'primary',
        [styles['button--dark-blue']]: variant === 'secondary',
        [styles['button--large']]: size === 'large'
      })}
      href="https://t.me/svoi_asso"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default StyledButton;
