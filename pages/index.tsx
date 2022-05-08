import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className='text-white bg-gradient-to-r from-myCian to-myBlue'>
        <div className='lg:container mx-auto'>
          <header className='py-5 flex flex-row justify-between items-center'>
            <figure>
              <Image src="/assets/img/logos/t_logo.png" width={40} height={40} alt='Logo'></Image>
            </figure>
            <nav className='flex flex-row justify-around gap-10 items-center'>
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
          </header>
          <section className='relative min-h-[200px]'>
            <figure className='absolute bottom-10 right-20'>
              <Image src='/assets/img/logos/t_logo.png' width={100} height={100} alt='' />
            </figure>
          </section>
        </div>
      </div>

      <div>
        <div>
          <div className='lg:container mx-auto flex flex-row justify-between'>
            <div className='mt-[-170px] flex flex-col'>
              <div className='flex justify-center items-center py-1 rounded-t-xl text-[#FF9900] font-bold bg-[#1A1A1A] w-32'>
                <span>Marketing</span>
              </div>

              <div className='rounded-tr-xl rounded-b-xl px-14 pt-8 pb-12 max-w-[600px] bg-[#242424]'>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-row justify-between items-start'>
                    <h1 className='py-2 text-6xl font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-myBlue to-myCian'>Marketing Digital</h1>
                    <figure>
                      <Image src='/assets/img/marketingImgs/statistics.png' width={120} height={120} alt=''></Image>
                    </figure>
                  </div>

                  <div className='flex flex-row justify-between items-center gap-5'>
                    <hr className='w-3 h-[130px] bg-slate-200 border-slate-200 border-4 rounded-xl' />
                    <p className='text-slate-300 text-xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto accusantium obcaecati tempora, blanditiis totam dicta, nulla veniam aperiam rerum maiores laboriosam esse atque doloribus deserunt itaque dignissimos quia. Nihil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-5 mt-32'>
              <Image src='/assets/img/marketingImgs/diagram.png' width={250} height={250} alt=''></Image>
              <div className='rounded-xl flex justify-center items-center py-4 px-7 max-w-[300px] bg-slate-300'>
                <p className='text-center'>Lorem ipsum dolor, adipisicing elit. Earum consequatur incidun.</p>
              </div>
            </div>
          </div>

          <div className='ghola'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
