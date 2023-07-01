import Link from 'next/link';
import { format } from 'date-fns';
import { ModeToggle } from "@/components/mode-toggle"

export default function Footer() {
  return (
      <footer className="max-w-2xl mx-auto w-full mt-auto mb-8 ml-0">
        <div className="flex justify-between items-center gap-x-5 lg:sticky">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {format(new Date(), 'yyyy')}{' '}
            <Link target='_blank' href="/primalbound.com">Primal Bound ⵣ</Link>
          </p>
          <ModeToggle />
        </div>
      </footer>
  );
}
