import Link from 'next/link';
import { format } from 'date-fns';
import { ModeToggle } from "@/components/mode-toggle"

export default function Footer() {
  return (
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-auto mb-8 ml-0">
        <div className="sm:flex sm:items-center sm:justify-between w-full gap-x-5 lg:sticky">
          <p className="text-sm w-full mt-3 md:mt-0 text-gray-500 sm:text-left dark:text-gray-400">
            © {format(new Date(), 'yyyy')}{' '}
            <Link target='_blank' href="/primalbound.com">Primal Bound ⵣ</Link>
          </p>
          <ModeToggle />
        </div>
      </footer>
  );
}
