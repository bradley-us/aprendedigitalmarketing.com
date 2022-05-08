import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SectionContent from './SectionContent'

export interface ILayout {
  title?: string,
  children: ReactNode
}

const Layout = ({title, children} : ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <SectionContent
        className='text-white bg-gradient-to-r from-myCian to-myBlue'
        isContainer
      >
        <Header />
      </SectionContent>
      
      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout