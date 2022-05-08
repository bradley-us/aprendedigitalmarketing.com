import { ReactNode } from "react"

export interface ISectionContent {
  containersx?: string,
  className?: any,
  isContainer?: boolean,
  children: ReactNode
}

const SectionContent = ({children, className, containersx, isContainer}: ISectionContent) => {


  return (
    <div className={className}>
      <div className={`${containersx} ${' '} ${ isContainer ? 'lg:container mx-auto px-8 md:px-32' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default SectionContent