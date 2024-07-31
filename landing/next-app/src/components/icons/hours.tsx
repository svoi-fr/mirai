import React from 'react';

interface HoursIconProps {
  className?: string;
}

const HoursIcon: React.FC<HoursIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M13.9883 2.33337C7.54825 2.33337 2.33325 7.56004 2.33325 14C2.33325 20.44 7.54825 25.6667 13.9883 25.6667C20.4399 25.6667 25.6666 20.44 25.6666 14C25.6666 7.56004 20.4399 2.33337 13.9883 2.33337ZM13.9999 23.3334C8.84325 23.3334 4.66659 19.1567 4.66659 14C4.66659 8.84337 8.84325 4.66671 13.9999 4.66671C19.1566 4.66671 23.3333 8.84337 23.3333 14C23.3333 19.1567 19.1566 23.3334 13.9999 23.3334ZM14.5833 8.16671H12.8333V15.1667L18.9583 18.8417L19.8333 17.4067L14.5833 14.2917V8.16671Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="28" height="28" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HoursIcon;
