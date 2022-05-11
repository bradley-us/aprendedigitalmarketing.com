import Image from "next/image"
import Link from "next/link"
import LongMenu from "./mui_components/Menu"

const Header = (): JSX.Element => {
  return (
    <header className='py-5 flex flex-row justify-between items-center'>
      <figure>
        <Image src="/assets/img/logos/logo_1.jpg" width={40} height={40} alt='Logo'></Image>
      </figure>
      <nav className='hidden sm:inline-flex flex-row justify-around gap-10 items-center'>
        <ul className='flex flex-row justify-around items-center gap-10'>
          <li><Link href={`#`}><a>Inicio</a></Link></li>
          <li><Link href={`#`}><a>About</a></Link></li>
          <li><Link href={`#`}><a>Contact</a></Link></li>
          <li><Link href={`#`}><a>Servicios</a></Link></li>
        </ul>
        <div className='text-gray-800 text-md font-bold bg-[#26EFEF] py-2 px-5 rounded-xl'>
          <a>ACTION</a>
        </div>
      </nav>

      <LongMenu />
    </header>
  )
}

export default Header