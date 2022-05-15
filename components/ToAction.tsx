import SectionContent from './layouts/SectionContent'

const ToAction = ({ actTitle, actTitleIn1, actBtnTitle } : {actTitle: string, actTitleIn1: string, actBtnTitle: string}): JSX.Element => {
  return (
    <SectionContent
      id='toAction'
      isContainer
      containersx='py-16'
      className={'text-white font-bold bg-gradient-to-r from-myBlackOne to-myBlackTwo'}
    >
      <div className='flex-row items-end justify-between gap-8 sm:flex'>
        <div className='flex flex-col md:gap-20 gap-7'>
            <h3 className='text-3xl md:text-4xl xl:text-6xl xl:leading-[80px]'>{ actTitle } <br /> <span className='text-[#00D1FF]'>{ actTitleIn1 }</span></h3>
            <hr className='h-3 border-0 w-28 md:w-52 md:h-6 bg-gradient-to-r from-myCian to-myBlue rounded-xl' />
          </div>

          <a href='mailto:contacto.aprendemarketing@gmail.com'>
            <div className='flex flex-row items-center justify-center px-6 py-2 mt-5 sm:m-0 rounded-xl bg-gradient-to-r from-myCian to-myBlue md:py-4 md:px-12'>
              <span className='text-xl text-center md:text-2xl'>
                { actBtnTitle }
              </span>
            </div>
          </a>
      </div>
    </SectionContent>
  )
}

export default ToAction