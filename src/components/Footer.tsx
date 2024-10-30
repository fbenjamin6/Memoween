import { GitHubIcon, LinkedinIcon } from './Icons'

export function Footer() {
  return (
    <footer className='pt-12 pb-6 max-lg:px-5 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent  '>
      <div className='max-w-[950px] m-auto flex w-full flex-col h-full items-start justify-end gap-4 md:gap-5 '>
        <ul className='flex gap-4'>
          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/federicobenjamin/'
              className='hover:text-orange-600'
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://github.com/fbenjamin6'
              className='hover:text-orange-600'
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
        <span className='text-customGray max-sm:text-sm'>
          Hecho con 🧡. 2024 Federico Benjamín
        </span>
      </div>
    </footer>
  )
}
