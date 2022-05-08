import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/layouts/Layout'
import SectionContent from '../components/layouts/SectionContent'
import QuiltedImageList from '../components/mui_components/QuiltedImageList'
import CustomizedSteppers from '../components/mui_components/StepperDiagram'
import VerticalLinearStepper from '../components/mui_components/StepperLine'
import ToAction from '../components/ToAction'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout title='Marketing Digital'>
      <SectionContent
        className='sm:block hidden text-white bg-gradient-to-r from-myCian to-myBlue'
        isContainer
      >
        <section className='relative min-h-[200px]'>
          <figure className='absolute bottom-10 right-20'>
            <Image src='/assets/img/logos/t_logo.png' width={100} height={100} alt='' />
          </figure>
        </section>
      </SectionContent>

      <SectionContent isContainer>
        <div className='sm:flex flex-row justify-between'>
          <div className='z-10 sm:mt-[-170px] sm:p-0 py-10 flex flex-col'>
            <div className='flex justify-center items-center py-1 rounded-t-xl text-[#FF9900] font-bold bg-[#1A1A1A] w-32'>
              <span>Marketing</span>
            </div>

            <div className='rounded-tr-xl rounded-b-xl px-14 pt-8 pb-12 w-full sm:max-w-[600px] bg-[#242424]'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-row justify-between items-start'>
                  <h1 className='py-2 text-4xl md:text-6xl font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-myBlue to-myCian'>Marketing Digital</h1>
                  <figure>
                    <Image src='/assets/img/marketingImgs/statistics.png' width={120} height={120} alt=''></Image>
                  </figure>
                </div>

                <div className='flex flex-row justify-between items-center gap-5'>
                  <hr className='w-3 h-[130px] bg-slate-200 border-slate-200 border-4 rounded-xl' />
                  <p className='text-slate-300 text-md md:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto accusantium obcaecati tempora, blanditiis totam dicta, nulla veniam aperiam rerum maiores laboriosam esse atque doloribus deserunt itaque dignissimos quia. Nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='z-10 flex flex-col items-center justify-center gap-5 sm:mt-32'>
            <Image src='/assets/img/marketingImgs/diagram.png' width={250} height={250} alt=''></Image>
            <div className='rounded-xl flex justify-center items-center py-4 px-7 max-w-[300px] bg-slate-300'>
              <p className='text-center'>Lorem ipsum dolor, adipisicing elit. Earum consequatur incidun.</p>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionContent isContainer={false} className={'z-0 sm:mt-[-170px]'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E2E8F0" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,90.7C240,64,300,64,360,96C420,128,480,192,540,202.7C600,213,660,171,720,154.7C780,139,840,149,900,170.7C960,192,1020,224,1080,224C1140,224,1200,192,1260,170.7C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </SectionContent>

      <SectionContent isContainer className={'bgSp1 pb-32'}>
        <h2 className='text-center text-4xl'>All-In-One Cloud Software</h2>
        <p className='mt-5 mb-14 font-bold text-center text-slate-400 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid laborum dolor quas, natus iusto repudiandae magni officia pariatur voluptatum dicta nulla soluta blanditiis porro, eligendi officiis, at similique et!</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5'>
          <div className='px-7 bg-white shadow-lg shadow-cyan-500/50 py-12 rounded-xl flex flex-col gap-5 justify-center items-center'>
            <figure>
              <Image className='' src='/assets/img/marketingImgs/statistics.png' width={120} height={120} alt=''></Image>
            </figure>

            <h3 className='text-2xl font-bold'>TITLE LOREM</h3>

            <span><p className='text-center text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est enim, similique minima nostrum deleniti fugit nobis a rerum nesciunt molestiae magni non assumenda! Commodi ipsam sequi tenetur ducimus ea!</p></span>
          </div>
          <div className='px-7 bg-white shadow-lg shadow-cyan-500/50 py-12 rounded-xl flex flex-col gap-5 justify-center items-center'>
            <figure>
              <Image className='' src='/assets/img/marketingImgs/statistics.png' width={120} height={120} alt=''></Image>
            </figure>

            <h3 className='text-2xl font-bold'>TITLE LOREM</h3>

            <span><p className='text-center text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est enim, similique minima nostrum deleniti fugit nobis a rerum nesciunt molestiae magni non assumenda! Commodi ipsam sequi tenetur ducimus ea!</p></span>
          </div>
          <div className='px-7 bg-white shadow-lg shadow-cyan-500/50 py-12 rounded-xl flex flex-col gap-5 justify-center items-center'>
            <figure>
              <Image className='' src='/assets/img/marketingImgs/statistics.png' width={120} height={120} alt=''></Image>
            </figure>

            <h3 className='text-2xl font-bold'>TITLE LOREM</h3>

            <span><p className='text-center text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est enim, similique minima nostrum deleniti fugit nobis a rerum nesciunt molestiae magni non assumenda! Commodi ipsam sequi tenetur ducimus ea!</p></span>
          </div>
        </div>
      </SectionContent>

      <SectionContent isContainer containersx='py-20'>
        <div className='md:flex flex-row justify-around items-center'>
          <VerticalLinearStepper></VerticalLinearStepper>
          <br/>
          <QuiltedImageList></QuiltedImageList>
        </div>
      </SectionContent>

      <SectionContent isContainer containersx='my-20'>
          <CustomizedSteppers></CustomizedSteppers>
      </SectionContent>

      <ToAction />

      <SectionContent
        isContainer
        containersx='py-20'
      >
        <div className='md:flex flex-row items-center justify-between'>
          <div>
            <div className='max-w-[210px] flex flex-row justify-center items-center font-bold text-[#0098ED] rounded-xl bg-slate-200 py-4 px-8'>
              <h3 className='text-2xl'>about me</h3>
            </div>

            <div className='font-semibold text-slate-400 flex flex-col gap-10 py-12 md:pl-10 md>pr-32'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam architecto dolor sunt voluptatem officiis, esse perferendis corporis tempore molestiae qui est doloremque laboriosam reprehenderit temporibus nemo sit pariatur exercitationem!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam architecto dolor sunt voluptatem officiis, esse perferendis corporis tempore molestiae qui est doloremque laboriosam reprehenderit temporibus nemo sit pariatur exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, perspiciatis doloribus nulla vero, magnam nostrum obcaecati a fuga praesentium odio quisquam eos facilis voluptate voluptates, accusantium excepturi voluptatum natus explicabo!</p>
              <p>Lorem ipsum dolor sit amet asperiores nesciunt hic reprehenderit quisquam suscipit?</p>
            </div>
          </div>

          <div className='w-full'>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src='/assets/img/people/person.jpg' width={400} height={600} alt=''></Image>
            </figure>
          </div>
        </div>
      </SectionContent>
          
      <SectionContent
        isContainer
        containersx='text-myBlackTwo pb-20'
      >
          <h2 className='text-center font-bold text-5xl'>What is <span className='text-[#0098ED]'>Skiline</span></h2>
          <p className='text-xl text-slate-400 text-center mt-7'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>

          <div className='py-20 w-full flex flex-row justify-center items-center'>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src='/assets/img/marketingImgs/flowers.jpg' width={500} height={320} alt=''></Image>
            </figure>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src='/assets/img/marketingImgs/flex.png' width={500} height={320} alt=''></Image>
            </figure>
          </div>
      </SectionContent>

      <SectionContent
        isContainer
        className={'bg-slate-200 py-28'}
      >
        <h2 className='text-center font-bold text-5xl'>Lastest News and Resources</h2>
        <p className='text-xl text-slate-400 text-center mt-7'>Skilline is a platform that allows educators to create online classes whereby they can store the course material</p>
        
        <div className='grid md:grid-cols-2 gap-10 py-14'>
          <div>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src='/assets/img/marketingImgs/flowers.jpg' width={500} height={320} alt=''></Image>
            </figure>

            <h4 className='mt-10 text-myBlackTwo text-xl font-bold'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>

            <p className='text-slate-400 mt-5'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
          </div>

          <div className='grid grid-rows-3'>
            <div className='w-full flex flex-row gap-5 justify-start w-full items-start'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src='/assets/img/marketingImgs/flowers.jpg' width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='text-md font-bold text-myBlackTwo'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h5>
                <p className='text-slate-400'>Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>
            
            <div className='w-full flex flex-row gap-5 justify-start w-full items-start'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src='/assets/img/marketingImgs/flowers.jpg' width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='text-md font-bold text-myBlackTwo'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h5>
                <p className='text-slate-400'>Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>

            <div className='w-full flex flex-row gap-5 justify-start w-full items-start'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src='/assets/img/marketingImgs/flowers.jpg' width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='text-md font-bold text-myBlackTwo'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h5>
                <p className='text-slate-400'>Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <ToAction />
    </Layout>
  )
}

export default Home
