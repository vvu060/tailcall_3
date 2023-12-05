import Link from '@docusaurus/Link';
import { socials } from '@site/src/constants';
import TailcallLogo from '@site/static/icons/companies/tailcall-white.svg';

const Footer = () => {
  return (
    <footer className='bg-tailCall-dark-700 pt-20 pb-5 flex flex-col items-center space-y-6 w-full'>
      <TailcallLogo className='w-[120px] h-10' />
      <div className='text-title-small space-x-6 text-tailCall-light-500'>
        <Link
          href='/docs/intro'
          className='text-tailCall-light-500 hover:text-tailCall-light-300'
        >
          Documentation
        </Link>
        <Link
          href='/about'
          className='text-tailCall-light-500 hover:text-tailCall-light-300'
        >
          About
        </Link>
        <Link
          href='/blog'
          className='text-tailCall-light-500 hover:text-tailCall-light-300'
        >
          Blog
        </Link>
      </div>

      <div className='flex items-center justify-between w-[80%]'>
        <p className='text-tailCall-light-500'>
          Copyright © 2023 Tailcall, Inc.
        </p>
        <div className='space-x-4'>
          {socials.map((social) => (
            <Link href={social.href} className='h-6 w-6'>
              <social.image />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
