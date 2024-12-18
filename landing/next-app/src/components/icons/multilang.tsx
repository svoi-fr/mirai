import React from 'react';

interface MultilangIconProps {
  className?: string;
}

const MultilangIcon: React.FC<MultilangIconProps> = ({ className }) => {
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
          d="M23.3333 2.33337H4.66659C3.38325 2.33337 2.33325 3.38337 2.33325 4.66671V25.6667L6.99992 21H23.3333C24.6166 21 25.6666 19.95 25.6666 18.6667V4.66671C25.6666 3.38337 24.6166 2.33337 23.3333 2.33337ZM23.3333 18.6667H6.99992L4.66659 21V4.66671H23.3333V18.6667ZM8.16659 10.5H10.4999V12.8334H8.16659V10.5ZM12.8333 10.5H15.1666V12.8334H12.8333V10.5ZM17.4999 10.5H19.8333V12.8334H17.4999V10.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MultilangIcon;
