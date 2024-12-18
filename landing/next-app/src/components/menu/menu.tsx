import React, { useState, useEffect, useRef } from 'react';
import menu from '../../consts/menu.json';
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

  const goTo = (link: string): void => {
    // toggleMenu();
    console.log('1111');
  };

  // const goTo = (link: string) => {
  //   toggleMenu();
  //   console.log('link', link)
  //   const element = document.querySelector('.' + link);
  //   console.log('1111');
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   console.log('2222');
  // };

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <ul
        className={cn(styles.menu, {
          [styles.open]: isOpen,
        })}
      >
        {menu.map((menuItem, index) => (
          <li key={index} className={styles.menuItem}>
            <div onClick={goTo(menuItem.link)}>{menuItem.title}</div>
            {/* <div>{menuItem.title}</div> */}
          </li>
        ))}
      </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={cn(styles.bar, { [styles.bar1]: isOpen })} />
        <div className={cn(styles.bar, { [styles.bar2]: isOpen })} />
        <div className={cn(styles.bar, { [styles.bar3]: isOpen })} />
      </div>
    </nav>
  );
};

export default HamburgerMenu;
