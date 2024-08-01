import React from 'react';

interface PersonalizedIconProps {
  className?: string;
}

const PersonalizedIcon: React.FC<PersonalizedIconProps> = ({ className }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="vuesax/linear/verify">
        <g id="verify">
          <path
            id="Vector"
            d="M9.77661 14L12.5883 16.8233L18.2233 11.1766"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M12.5416 2.85829C13.3466 2.16996 14.6649 2.16996 15.4816 2.85829L17.3249 4.44496C17.6749 4.74829 18.3283 4.99329 18.7949 4.99329H20.7783C22.0149 4.99329 23.0299 6.00829 23.0299 7.24496V9.22829C23.0299 9.68329 23.2749 10.3483 23.5783 10.6983L25.1649 12.5416C25.8533 13.3466 25.8533 14.665 25.1649 15.4816L23.5783 17.325C23.2749 17.675 23.0299 18.3283 23.0299 18.795V20.7783C23.0299 22.015 22.0149 23.03 20.7783 23.03H18.7949C18.3399 23.03 17.6749 23.275 17.3249 23.5783L15.4816 25.165C14.6766 25.8533 13.3583 25.8533 12.5416 25.165L10.6983 23.5783C10.3483 23.275 9.69494 23.03 9.22828 23.03H7.20994C5.97328 23.03 4.95828 22.015 4.95828 20.7783V18.7833C4.95828 18.3283 4.71328 17.675 4.42161 17.325L2.84661 15.47C2.16994 14.665 2.16994 13.3583 2.84661 12.5533L4.42161 10.6983C4.71328 10.3483 4.95828 9.69496 4.95828 9.23996V7.23329C4.95828 5.99662 5.97328 4.98162 7.20994 4.98162H9.22828C9.68328 4.98162 10.3483 4.73662 10.6983 4.43329L12.5416 2.85829Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default PersonalizedIcon;
