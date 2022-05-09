import SectionContent from './layouts/SectionContent'

const ToAction = ({ actTitle, actTitleIn1, actBtnTitle } : {actTitle: string, actTitleIn1: string, actBtnTitle: string}): JSX.Element => {
  return (
    <SectionContent
      isContainer
      containersx='py-16'
      className={'text-white font-bold bg-gradient-to-r from-myBlackOne to-myBlackTwo'}
    >
      <div className='sm:flex flex-row justify-between items-end'>
        <div className='flex flex-col md:gap-20 gap-7'>
            <h3 className='text-3xl md:text-6xl'>{ actTitle } <br/> <span className='text-[#00D1FF]'>{ actTitleIn1 }</span></h3>
            <hr className='w-28 h-3 md:w-52 md:h-6 bg-gradient-to-r from-myCian to-myBlue border-0 rounded-xl' />
          </div>

          <div className='sm:m-0 mt-5 rounded-xl bg-gradient-to-r from-myCian to-myBlue py-2 px-6 md:py-4 md:px-12'>
            <span className='text-center text-xl md:text-2xl'>
              { actBtnTitle }
            </span>
          </div>
      </div>
    </SectionContent>
  )
}

export default ToAction