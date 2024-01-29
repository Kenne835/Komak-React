import Overview from '@/app/ui/diagnostics/overview';
import { notoKufi } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${notoKufi.className} text-2xl`}>Diagnostics</h1>
      </div>
      <div className="mt-5 flex w-full justify-left">
        <Overview />
      </div>
    </div>
    </main>
  );
}