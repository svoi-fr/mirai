import React, { useState, useEffect, useRef } from 'react';
import styles from './menu.module.scss';
import cn from 'classnames';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <ul className={
        cn(styles.menu, {
            [styles.open]: isOpen
        })}>
        <li className={styles.menuItem}><a href="#">Home</a></li>
        <li className={styles.menuItem}><a href="#">About</a></li>
        <li className={styles.menuItem}><a href="#">Services</a></li>
        <li className={styles.menuItem}><a href="#">Contact</a></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={cn(
            styles.bar,
            {[styles.bar1]: isOpen}
        )} />
        <div className={cn(
            styles.bar,
            {[styles.bar2]: isOpen}
        )} />
        <div className={cn(
            styles.bar,
            {[styles.bar3]: isOpen}
        )} />
      </div>
    </nav>
  );
};

export default HamburgerMenu;
