'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/posts': {
    name: 'blog',
  }
};

function Logo() {
  return (
    <Link aria-label="Primal Bound" href="/" className="mt-[-10px]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="text-black dark:text-white h-[50px] md:h-[75px]"
      >
        <motion.text
          x="25%"
          y="50%"
          fill="currentColor" // Use "currentColor" to inherit the text color from the parent
          fontSize="400"
          fontWeight="bold"
          fontFamily="Lato, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          p
        </motion.text>
        <motion.text
          x="55%"
          y="50%"
          fill="currentColor" // Use "currentColor" to inherit the text color from the parent
          fontSize="400"
          fontWeight="bold"
          fontFamily="Lato, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          b
        </motion.text>
        <motion.circle
          cx="37%"
          cy="50%"
          r="280"
          stroke="#FFA500"
          strokeWidth="10"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/posts/')) {
    pathname = '/posts';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="sticky top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative md:ml-4 lg:ml-4 px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
