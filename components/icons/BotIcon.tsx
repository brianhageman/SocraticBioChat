import React from 'react';

const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3s4 4 4 8-4 8-4 8" />
    <path d="M18 3s-4 4-4 8 4 8 4 8" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="18" x2="16" y2="18" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

export default BotIcon;