import { HOWITWORKS } from '@/constants';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const HowItWorks = () => {
  return (
    <section className='max-container overflow-hidden mb-28 w-full flex flex-col items-center gap-5'>
      <main className="max-container xl:w-[832px] padding-container mt-24 flex flex-col gap-10">
        <h1 className='regular-34 lg:bold-40 text-center'>How it works</h1>
        <p className='text-[16px] font-normal leading-5 text-center'>
          MRH was established in 2018 G.C. in Addis Ababa, ET. We've highly dedicated and equipped teams who bring professional services 
          and aim to your satisfaction. We have more than 6 years of experience and still counting.
        </p>
      </main>
      <main className="mt-10 flex flex-col gap-10 xl:flex-row lg:mg-20 lg:gap-20">
        <div className="">
          <FeatureItem
            title="Comprehensive & Reliable" 
            icon='/idea.svg'
            description="We pride ourselves on offering end-to-end recruitment solutions tailored to meet the specific needs of our clients."
          />
          <div className="hidden xl:block absolute translate-x-[230px] -translate-y-[230px]">
            <Image src='/Group27.png' alt="map" width={294} height={20} />
          </div>
        </div>
        <div className="">
          <div className="hidden xl:block absolute translate-x-[230px] translate-y-6">
            <Image src='/Group28.png' alt="map" width={294} height={20} />
          </div>
          <FeatureItem
            title="Quality Support & Assistance" 
            icon='/idea.svg'
            description="Committed to excellence, offering comprehensive solutions that ensure your organization thrives in the competitive."
          />
        </div>
        <div className="">
          <FeatureItem
            title="Right Career Opportunities" 
            icon='/agreem.svg'
            description="Right Career Opportunities Committed to empowering individuals and organizations, connect talented professionals. "
          />
        </div>
      </main>
    </section>
  )
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <div className="flex flex-col items-center gap-14 w-[335px]">
      <div className="rounded-[20px] p-4 bg-gray-200">
        <Image src={icon} alt="map" width={46} height={36} />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className='bold-20 text-center'>{title}</h2>
        <p className='regular-14 text-gray-800 text-center'>{description}</p>
      </div>
    </div>
  )
}

export default HowItWorks