import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layouts/Layout'
import SectionContent from '../components/layouts/SectionContent'
import QuiltedImageList from '../components/mui_components/QuiltedImageList'
import CustomizedSteppers from '../components/mui_components/StepperDiagram'
import VerticalLinearStepper from '../components/mui_components/StepperLine'
import ToAction from '../components/ToAction'

import data from '../data/data'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout title='Marketing Digital'>
      <SectionContent
        id='homeInit'
        className='text-white sm:block bg-gradient-to-r from-myCian to-myBlue'
        isContainer
      >
        <section className='relative min-h-[200px]'>
          <figure className='absolute hidden xl:block bottom-10 right-10 lg:right-20'>
            <Image className='rounded-full' src={ data.aboveHero.picSrc } width={100} height={100} alt='' />
          </figure>
        </section>
      </SectionContent>

      {/* BLACK CARD */}
      <SectionContent isContainer>
        <div className='flex-row flex-wrap justify-between gap-20 sm:flex sm:justify-center'>
          <div className='z-10 mt-[-200px] sm:mt-[-170px] sm:p-0 py-10 flex flex-col'>
            <div className='flex justify-center items-center py-1 rounded-t-xl text-[#FF9900] font-bold bg-[#1A1A1A] w-32'>
              <span>{ data.hero.heroCard.category }</span>
            </div>

            <div className='rounded-tr-xl rounded-b-xl px-7 lg:px-14 pt-8 pb-12 w-full sm:max-w-[650px] bg-[#242424]'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-row items-start justify-between'>
                  <h1 className='py-2 text-3xl font-bold text-transparent md:text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-myBlue to-myCian'>{ data.hero.heroCard.title }</h1>
                  <figure>
                    <Image src={ data.hero.heroCard.picSrc } width={'100%'} height={'100%'} alt='Marketing Card Sign'></Image>
                  </figure>
                </div>

                <div className='flex flex-row items-stretch justify-between gap-5'>
                  <p className='text-slate-300 text-md md:text-lg'>
                    { data.hero.heroCard.description }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='z-10 flex flex-col items-center justify-center gap-5 md:mt-32'>
            <Image src={ data.hero.picSrc } width={250} height={250} alt=''></Image>
            <div className='rounded-xl flex justify-center items-center py-4 px-7 max-w-[300px] bg-slate-300'>
              <p className='text-center'>
                { data.hero.heroBoxText }
              </p>
            </div>
          </div>
        </div>
      </SectionContent>

      {/* WAVES SVG */}
      <SectionContent isContainer={false} className={'z-0 sm:mt-[-170px]'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E2E8F0" d="M0,224L30,197.3C60,171,120,117,180,90.7C240,64,300,64,360,96C420,128,480,192,540,202.7C600,213,660,171,720,154.7C780,139,840,149,900,170.7C960,192,1020,224,1080,224C1140,224,1200,192,1260,170.7C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </SectionContent>

      <SectionContent isContainer className={'bgSp1 pt-16 pb-36'}>
        <h2 className='text-2xl font-bold text-center md:text-4xl'>{ data.section1.title }</h2>
        <p className='mt-5 text-lg font-bold text-center mb-14 text-slate-400'>
        { data.section1.description }
        </p>

        <div className='flex flex-wrap items-start justify-center gap-3 md:gap-5'>
          <div className='flex flex-col items-center max-w-[330px] min-h-[520px] justify-center gap-5 py-12 bg-white shadow-lg px-7 shadow-cyan-500/50 rounded-xl'>
            <figure>
              <Image className='rounded-full' src={ data.section1.content.cards.card1.picSrc } width='100%' height='100%' alt='Testimonio 1'></Image>
            </figure>

            <h3 className='text-2xl font-bold'>{ data.section1.content.cards.card1.title }</h3>

            <span>
              <p className='text-center text-slate-400'>
                { data.section1.content.cards.card1.description }
              </p>
            </span>
          </div>
          <div className='flex flex-col items-center max-w-[330px] min-h-[520px] bg-[#0098ED] justify-center gap-5 py-12 bg-white shadow-lg px-7 shadow-cyan-500/50 rounded-xl'>
            <figure>
              <Image className='rounded-full' src={ data.section1.content.cards.card2.picSrc } width='100%' height='100%' alt='Testimonio 2'></Image>
            </figure>

            <h3 className='text-2xl font-bold'>{ data.section1.content.cards.card2.title }</h3>

            <span>
              <p className='text-center text-slate-100'>
                { data.section1.content.cards.card2.description }
              </p>
            </span>
          </div>
          <div className='flex flex-col items-center max-w-[330px] min-h-[520px] justify-center gap-5 py-12 bg-white shadow-lg px-7 shadow-cyan-500/50 rounded-xl'>
            <figure>
              <Image className='rounded-full' src={ data.section1.content.cards.card3.picSrc } width='100%' height='100%' alt='Testimonio 3'></Image>
            </figure>

            <h3 className='text-2xl font-bold'>{ data.section1.content.cards.card3.title }</h3>

            <span>
              <p className='text-center text-slate-400'>
                { data.section1.content.cards.card3.description }
              </p>
            </span>
          </div>
        </div>
      </SectionContent>

      <SectionContent isContainer containersx='md:py-36 py-20'>
        <div className='flex-row items-center justify-around md:flex'>
          <VerticalLinearStepper></VerticalLinearStepper>
          <br/>
          <QuiltedImageList></QuiltedImageList>
        </div>
      </SectionContent>

      <SectionContent isContainer containersx='my-20 md:pb-36'>
          <CustomizedSteppers></CustomizedSteppers>
      </SectionContent>

      <ToAction
        actTitle={ data.pushToAction.title }
        actTitleIn1={ data.pushToAction.titleIn1 }
        actBtnTitle={ data.pushToAction.btnTitle }
      />

      <SectionContent
        id='aboutSection'
        isContainer
        containersx='md:pt-36 pt-20'
      >
        <div className='flex-col items-start justify-between lg:flex-row md:flex'>
          <div className=''>
            <div className='max-w-[250px] flex flex-row justify-center items-center font-bold text-[#0098ED] rounded-xl bg-slate-200 py-4 md:px-8'>
              <h3 className='text-4xl'>{ data.aboutSection.title }</h3>
            </div>

            <div className='flex flex-col gap-10 py-12 font-semibold text-slate-400 md:pl-10 lg:pr-32'>
              <p>{ data.aboutSection.content.description.parr1 }</p>
              <p>{ data.aboutSection.content.description.parr2 }</p>
              <p>{ data.aboutSection.content.description.parr3 }</p>
            </div>
          </div>

          <div className='flex flex-row justify-center w-full min-w-[300px]'>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src={ data.aboutSection.content.picSrc } width={400} height={600} alt=''></Image>
            </figure>
          </div>
        </div>
        
        <div className='py-16 text-center'>
          <a href='mailto:contacto.aprendemarketing@gmail.com' className='hover:bg-slate-200 transition ease-in duration-300 cursor-pointer text-gray-800 text-md font-bold bg-[#0098ED] py-4 px-7 rounded-lg text-slate-200 hover:text-slate-800'>¡Contáctame!</a>
        </div>
      </SectionContent>
          
      <SectionContent
        isContainer
        containersx='text-myBlackTwo py-36'
      >
          <h2 className='text-3xl font-bold text-center md:text-4xl'>{ data.section4.title } <span className='text-[#0098ED]'>{ data.section4.titleIn2 }</span></h2>
          <p className='text-lg text-center md:text-xl text-slate-400 mt-7'>
            { data.section4.description }
          </p>

          <div className='flex flex-row items-center justify-center w-full pt-20'>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src={ data.section4.content.picSrc1 } width={500} height={320} alt=''></Image>
            </figure>
          </div>
      </SectionContent>

      <SectionContent
        isContainer
        className={'bg-slate-200 py-20 lg:py-36'}
      >
        <h2 className='text-3xl font-bold text-center md:text-4xl'>{ data.section5.title }</h2>
        <p className='text-xl text-center text-slate-400 mt-7'>
          { data.section5.description }
        </p>
        
        <div className='grid gap-10 md:grid-cols-2 py-14'>
          <div>
            <figure className='rounded-xl'>
              <Image className='rounded-xl' src={ data.section5.content.leftSide.picSrc } width={500} height={320} alt=''></Image>
            </figure>

            <h4 className='mt-10 text-xl font-bold text-myBlackTwo'>
              { data.section5.content.leftSide.title }
            </h4>

            <p className='mt-5 text-slate-400'>
              { data.section5.content.leftSide.description }
            </p>
          </div>

          <div className='grid grid-rows-3'>
            <div className='flex flex-row items-start justify-start w-full gap-5'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src={ data.section5.content.rightSide.box1.picSrc } width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='font-bold text-md text-myBlackTwo'>
                  { data.section5.content.rightSide.box1.title }
                </h5>
                <p className='text-slate-400'>
                  { data.section5.content.rightSide.box1.description }
                </p>
              </div>
            </div>
            
            <div className='flex flex-row items-start justify-start w-full gap-5'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src={ data.section5.content.rightSide.box2.picSrc } width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='font-bold text-md text-myBlackTwo'>
                  { data.section5.content.rightSide.box2.title }
                </h5>
                <p className='text-slate-400'>
                  { data.section5.content.rightSide.box2.description }
                </p>
              </div>
            </div>

            <div className='flex flex-row items-start justify-start w-full gap-5'>
              <figure className='rounded-xl'>
                <Image className='rounded-xl' src={ data.section5.content.rightSide.box3.picSrc } width={200} height={120} alt=''></Image>
              </figure>

              <div className='flex flex-col gap-2'>
                <h5 className='font-bold text-md text-myBlackTwo'>
                  { data.section5.content.rightSide.box3.title }
                </h5>
                <p className='text-slate-400'>
                  { data.section5.content.rightSide.box3.description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <ToAction
        actTitle={ data.pushToAction.title }
        actTitleIn1={ data.pushToAction.titleIn1 }
        actBtnTitle={ data.pushToAction.btnTitle }
      />
    </Layout>
  )
}

export default Home
