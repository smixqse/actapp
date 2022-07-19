import { PropsWithChildren } from 'react';

export default function Layout({ children, ...props }: PropsWithChildren) {
  return (
    <div id="main">
      <div id="page" className="flex flex-grow">
        {children}
      </div>
      <div id="tabs" className="btm-nav">
        <div className="h-10">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12H3l9-9 9 9h-2"></path>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
          </svg>
        </div>
        <div className="h-10">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.828 9.172a4 4 0 1 0 0 5.656A9.998 9.998 0 0 0 12 12a9.999 9.999 0 0 1 2.172-2.828 4 4 0 1 1 0 5.656A9.998 9.998 0 0 1 12 12a9.999 9.999 0 0 0-2.172-2.828"></path>
          </svg>
        </div>
        <div className="h-10">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4.55a8.031 8.031 0 1 1 6 14.9"></path>
            <path d="M5.63 7.156v.01"></path>
            <path d="M4.06 11v.01"></path>
            <path d="M4.63 15.102v.01"></path>
            <path d="M7.16 18.367v.01"></path>
            <path d="M11 19.938v.01"></path>
            <path d="M15 15v5h5"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
