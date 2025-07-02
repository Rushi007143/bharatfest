import React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a9.5 9.5 0 0 0-9.5 9.5c0 3.63 2.06 6.74 5 8.35" />
      <path d="M12 2a9.5 9.5 0 0 1 9.5 9.5c0 3.63-2.06 6.74-5 8.35" />
      <path d="M7 19.85C9.06 21.26 12 22 12 22s2.94-.74 5-2.15" />
      <path d="M12 14a2 2 0 0 0-2 2c0 1.1.9 2 2 2a4 4 0 0 1 4 4" />
      <path d="M12 14a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a4 4 0 0 0-4 4" />
      <path d="M12 8a2 2 0 0 1-2 2" />
      <path d="M12 8a2 2 0 0 0 2 2" />
      <path d="m12 12 1.5-3" />
      <path d="m12 12-1.5-3" />
    </svg>
  );
}
