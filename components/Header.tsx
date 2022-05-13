import Image from "next/image"
import Link from "next/link"

const Header = (): JSX.Element => {
  return (
    <header className='py-5 flex flex-row justify-between items-center'>
      <figure>
        <Image className='rounded-full' src="/assets/img/logos/logo_1.jpg" width={50} height={50} alt='Logo'></Image>
      </figure>
      <nav className='inline-flex flex-row justify-around items-center gap-5'>
        <ul className='font-bold flex flex-row justify-around items-center gap-2'>
          <li><Link href={`#homeInit`}><a className='hover:bg-slate-200 hover:text-slate-800 transition ease-in duration-300 cursor-pointer py-2 px-5 rounded-xl'>Inicio</a></Link></li>
          <li><Link href={`#aboutSection`}><a className='hover:bg-slate-200 hover:text-slate-800 transition ease-in duration-300 cursor-pointer py-2 px-5 rounded-xl'>Sobre mí</a></Link></li>
          {/* <li><Link href={`#`}><a>Contact</a></Link></li> */}
          {/* <li><Link href={`#`}><a>Servicios</a></Link></li> */}
        </ul>
        <div>
          <Link href={'#toAction'}><a className='hover:bg-slate-200 transition ease-in duration-300 cursor-pointer text-gray-800 text-md font-bold bg-[#26EFEF] py-2 px-5 rounded-xl'>ACTION</a></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header