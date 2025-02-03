import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo-white.png';
import { ChevronDownIcon } from 'lucide-react';

export function Header() {
  return(
    <section className="bg-blue-500 w-full py-5">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-[73px]">
          <img src={logoWhite} alt="logotipo" width={116} height={30} />
          <nav className='flex items-center space-x-7'>
            <Link to="/#" className='font-bold text-zinc-50 text-sm'>Agendamentos</Link>
            <Link to="/#" className='font-bold text-zinc-300 text-sm'>Médicos</Link>
          </nav>
        </div>

        <div className='flex items-center space-x-2'>
          <p className="text-zinc-50 font-normal">Jenilson Francisco</p>
          <ChevronDownIcon size={24} className='text-zinc-50' />
        </div>
      </div>
    </section>
  )
}