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
          <div>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center py-1 rounded-t-xl text-[#FF9900] font-bold bg-[#1A1A1A] w-32'>
                <span>Marketing</span>
              </div>
              <div>
                <div>
                  <div>
                    <h1>Marketing Digital</h1>
                    <figure>
                      <Image src='/assets/img/marketingImgs/statistics.png' width={100} height={100} alt=''></Image>
                    </figure>
                  </div>

                  <div>
                    <hr className='w-2 h-[130px] bg-slate-200 border-slate-200 border-2 rounded-xl' />
                    <p className='text-slate-200'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto accusantium obcaecati tempora, blanditiis totam dicta, nulla veniam aperiam rerum maiores laboriosam esse atque doloribus deserunt itaque dignissimos quia. Nihil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
