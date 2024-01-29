import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { notoKufi } from '@/app/ui/fonts';

export default function KomakLogo() {
  return (
    <div
      className={`${notoKufi.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Komak</p>
    </div>
  );
}
