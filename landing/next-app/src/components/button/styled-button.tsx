import React from 'react';
import styles from './styled-button.module.scss';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const StyledButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles['button--blue']]: variant === 'primary',
        [styles['button--dark-blue']]: variant === 'secondary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default StyledButton;
