import { ReactNode } from "react"

export interface ISectionContent {
  containersx?: string,
  className?: string,
  isContainer?: boolean,
  children: ReactNode
}

const SectionContent = ({children, className, containersx, isContainer}: ISectionContent): JSX.Element => {
  return (
    <div className={className}>
      <div className={`${containersx} ${' '} ${ isContainer ? 'lg:container mx-auto px-4 md:px-32' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default SectionContent