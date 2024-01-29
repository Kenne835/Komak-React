import { Metadata } from 'next';
import Image from 'next/image';

export default async function Results() {
    return (
      <main>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                RESULTS:
            </div>
        </div>
      </main>
    );
  }