import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  max-height: 4rem;
  max-width: 4rem;
  padding: 0.5rem 0.25rem;
`

// min-width: 10rem;
const NavItem = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
  :hover {
    background: #89D0CA;
    font-size: 1.25rem;
    color: white;
    transition: background, font-size 200ms linear;
  }
  a {
    color: #89D0CA !important;
    :hover {
      color: white !important;

    }
  }
`

type LayoutProp = {
    children: any,
}

const Layout = ({ children }: LayoutProp) => {
    return (
        <div className={"u-body u-xl-mode min-h-screen flex flex-col "}>
            <header className="z-100 u-clearfix u-header u-header sticky top-0 bg-white" id="sec-85c8" style={{zIndex: 10}}>
                <div className=" flex flex-row px-4 w-100">
                    <LogoWrapper>
                        <Image src="/logoColor2.png" className="u-logo-image u-logo-image-1" alt={"logo"} width={100} height={100} />
                    </LogoWrapper>
                    <div className="flex justify-around flex-row grow">
                        <div className="flex justify-around flex-row">
                            <Link href="/" className="px-2 justify-center align-center w-40 min-w-max flex align-center red"> <NavItem> Home </NavItem> </Link>
                            <Link href="/about" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> About </NavItem> </Link>
                            <Link href="/courses" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> Courses </NavItem> </Link>
                            <Link href="/libs" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> Library </NavItem> </Link>
                            <Link href="/events" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> Event </NavItem> </Link>
                            <Link href="/recuitment" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> Recuitment </NavItem> </Link >
                            <Link href="/contact" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem> Contact </NavItem> </Link >
                        </div >
                    </div >
                </div >
            </header >
            <div className="grow">

            {children}
            </div>
            <div className="">
                <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-266b">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className='mt-4'>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='flex flex-col'>
                                    <div className='grid grid-cols-3 gap-4 h-fit'>
                                        <Image src="/logoColor2.png" className={"rounded-md col-span-1"} alt="" width={100} height={100} />
                                        <div className={"col-span-2 flex justify-start items-center"}>
                                            <div className='flex align-center flex-col'>
                                                <b> Noble English </b>
                                                <div><i> Broaden your horizons </i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-start mt-4'>
                                        <span> Follow us on: </span>
                                        <span>  </span>
                                    </div>
                                </div>
                                <div className='grid-cols-2 text-left'>
                                    <b>Cơ sở Noble English</b>
                                    <br />
                                    <div>
                                        <b> Tại Hà Nội: </b>
                                        <div>Đang hoàn thiện ... </div>
                                    </div>
                                    <br />
                                    <div>
                                        <b> Tại Sài Gòn: </b>
                                        <div> Đang hoàn thiện ... (Dự kiến 2024) </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <section className="pt-20 u-backlink u-clearfix u-grey-80 ">
                    {/* <a className="u-link" href="https://nicepage.com/website-templates" target="_blank" rel="noreferrer">
                        <span>Website Templates</span>
                    </a>
                    <p className="u-text">
                        <span>created with</span>
                    </p>
                    <a className="u-link" href="https://nicepage.com/" target="_blank" rel="noreferrer">
                        <span>Website Builder Software</span>
                    </a>. */}
                    Copyright 2022 © Noble English Center
                </section>
            </div>
        </div >
    );
};

Layout.propTypes = {

};

export default Layout;