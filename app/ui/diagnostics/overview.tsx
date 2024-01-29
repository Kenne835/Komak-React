import Image from 'next/image';
import img from "../../../public/body/human-body.jpg";
import {RadioGroup, Radio} from "@nextui-org/react";
import { notoKufi } from '@/app/ui/fonts';

export default async function Overview() {
    return (
      <main>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className={`${notoKufi.className} text-2xl flex items-right ml-5`}>
              <RadioGroup
                label="Where are you experiencing symptoms?">
                <Radio value="systemic" description="Whole Body">ټول ځان</Radio>
                <Radio value="leg" description="Leg">۱. ښپه</Radio>
                <Radio value="arm" description="Arm">۲. لاس</Radio>
                <Radio value="abdomen" description="Abdomen">۳. خېته</Radio>
                <Radio value="chest" description="Chest">۴. ټټر</Radio>
                <Radio value="head" description="Head">۵. سر</Radio>
                <Radio value="back" description="Back">۶. مله</Radio>
                <Radio value="neck" description="Neck">۷. غاړه</Radio>
              </RadioGroup>
            </div>
            <div className="flex items-left">
                <Image
                    src={img}
                    width={460}
                    height={660}
                    alt="Overview of body with region labels."
                />
            </div>
        </div>
      </main>
    );
  }