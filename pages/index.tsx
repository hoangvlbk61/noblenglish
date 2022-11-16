import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  max-height: 4rem;
`

const NavItem = styled.div`
  min-width: 5rem;
  display: flex; 
  justify-content: center; 
  align-items: center;
`

export default function Home() {
  return (
    <div className={"u-body u-xl-mode"}>
      <header className="u-clearfix u-header u-header" id="sec-85c8">
        <div className=" flex flex-row">
          {/* <a href="https://nicepage.com" className="u-image u-logo u-image-1">
          </a> */}
          <LogoWrapper>
            <Image src="/30a80ec42b1f060f82141484a3c900bcf93da1b1/images/default-logo.png" className="u-logo-image u-logo-image-1" alt={"logo"} width={100} height={100} />
          </LogoWrapper>
          <div>
            <div className="flex justify-around flex-row">
              <Link href="/" className="px-1"> <NavItem > Home </NavItem></Link>
              <Link href="/" className="px-1"> <NavItem > About </NavItem></Link>
              <Link href="/" className="px-1"> <NavItem > Courses </NavItem></Link>
              <Link href="/" className="px-1"> <NavItem > Library </NavItem></Link>
              <Link href="/" className="px-1"> <NavItem > Event </NavItem></Link>
              <Link href="/" className="px-1"> <NavItem > Recuitment </NavItem></Link >
              <Link href="/" className="px-1"> <NavItem > Contact </NavItem></Link >
            </div >
          </div >
        </div >
      </header >
      <section className="u-clearfix u-image u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-section-2" id="sec-832e">
        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-left u-container-style u-layout-cell u-size-29 u-layout-cell-1">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  <h5 className="u-custom-font u-font-pt-sans u-text u-text-1">online learning</h5>
                  <h1 className="u-text u-text-2">Learn <span style={{ fontWeight: 700 }}>Everyday</span>
                    <br />
                  </h1>
                  <p className="u-text u-text-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="https://nicepage.com/templates" className="u-active-palette-1-dark-2 u-btn u-btn-rectangle u-button-style u-custom-font u-font-pt-sans u-hover-palette-1-dark-2 u-palette-1-dark-3 u-radius-0 u-btn-1">read more</a>
                  <p className="u-text u-text-black u-text-4">Image by <a href="https://www.freepik.com/photos/abstract" className="u-border-1 u-border-grey-75 u-btn u-button-style u-none u-text-body-color u-btn-2">Freepik</a>
                  </p>
                </div>
              </div>
              <div className="u-align-right u-container-style u-image u-layout-cell u-size-31 u-image-1">
                <div className="u-container-layout u-valign-bottom u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-3" id="carousel_607d">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle-xl u-container-layout-1">
                    <div className="u-palette-4-base u-shape u-shape-circle u-shape-1"></div>
                    <div className="u-image u-image-circle u-image-1" data-image-width="1200" data-image-height="800"></div>
                    <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-2">
                      <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 50" ><use xlinkHref="#svg-7f47"></use></svg>
                      <svg className="u-svg-content" viewBox="0 0 160 50" x="0px" y="0px" id="svg-7f47"
                      // style={{ enableBackground: "new 0 0 160 50;" }}
                      ><path d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h4 className="u-text u-text-palette-4-dark-2 u-text-1">Get access to high quality learning!</h4>
                    <h1 className="u-text u-text-2">Join online courses <span style={{ fontWeight: 700 }}>today</span>
                    </h1>
                    <p className="u-text u-text-grey-50 u-text-3">Etiam velit purus, vehicula quis imperdiet dignissim, convallis vitae nisl. Nullam facilisi. Pellentesque non pulvinar justo. Nullam eget neque ut tellus ornare ullamcorper ulla ambco mattis for nulla glavrida egesed!</p>
                    <p className="u-text u-text-black u-text-4">Image by <a href="https://www.freepik.com/photos/abstract" className="u-border-1 u-border-grey-75 u-btn u-button-style u-none u-text-body-color u-btn-1">Freepik</a>
                    </p>
                    <a href="https://nicepage.com/templates" className="u-active-palette-1-dark-2 u-btn u-btn-rectangle u-button-style u-custom-font u-font-pt-sans u-hover-palette-1-dark-2 u-palette-1-dark-3 u-radius-0 u-btn-2">read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-palette-4-base u-section-4" id="carousel_79bd">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <div className="u-clearfix u-expanded-width u-gutter-22 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <div className="u-shape u-shape-svg u-text-white u-shape-1">
                      <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 50" ><use xlinkHref="#svg-6f73"></use></svg>
                      <svg className="u-svg-content" viewBox="0 0 160 50" x="0px" y="0px" id="svg-6f73"
                      // style="enable-background:new 0 0 160 50;"
                      ><path d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"></path></svg>
                    </div>
                    <h1 className="u-text u-text-1">Train Your Brain Today!</h1>
                    <p className="u-text u-text-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ​reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="u-text u-text-3">Images from <a href="https://www.freepik.com/photos/background" className="u-active-none u-border-1 u-border-black u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1" target="_blank" rel="noreferrer">Freepik</a>
                    </p>
                    <a href="#" className="u-border-1 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-2">all courses</a>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-2" >
                    <div className="u-align-center u-image u-image-circle u-image-1"></div>
                    <div className="u-shape u-shape-svg u-text-white u-shape-2">
                      <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 50" ><use xlinkHref="#svg-6f73"></use></svg>
                      <svg className="u-svg-content" viewBox="0 0 160 50" x="0px" y="0px" id="svg-6f73"
                      // style="enable-background:new 0 0 160 50;"
                      ><path d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-5" id="carousel_f056">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-align-left u-text u-text-1">
                      <span style={{ fontWeight: 700 }}>Learn to enjoy</span>
                      <br />every minute of your life.
                    </h2>
                    <p className="u-align-justify u-text u-text-2">Volutpat odio facilisis mauris sit amet massa. Aenean et tortor at risus viverra adipiscing at. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Cursus metus aliquam eleifend mi. Duis ut diam quam nulla porttitor massa. Turpis egestas pretium aenean pharetra magna ac placerat. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. </p>
                  </div>
                </div>
                <div className="u-align-justify u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-bottom u-container-layout-2">
                    <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
                      <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 50" ><use xlinkHref="#svg-1a12"></use></svg>
                      <svg className="u-svg-content" viewBox="0 0 160 50" x="0px" y="0px" id="svg-1a12"
                      // style="enable-background:new 0 0 160 50;"
                      ><path d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"></path></svg>
                    </div>
                    <p className="u-text u-text-3">Varius morbi enim nunc faucibus a pellentesque. Arcu bibendum at varius vel pharetra vel turpis nunc. Eu ultrices vitae auctor eu augue ut lectus arcu. Vulputate sapien nec sagittis aliquam malesuada. Massa enim nec dui nunc mattis enim. Lectus proin nibh nisl condimentum id. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-palette-4-base u-section-6" id="carousel_3c49">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-shape u-shape-circle u-white u-shape-1"></div>
          <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-26 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h1 className="u-text u-text-1"><b><i>
                      <span style={{ fontStyle: "normal" }}>Online</span></i></b>Learning
                    </h1>
                    <p className="u-text u-text-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    <a href="#" className="u-border-2 u-border-grey-dark-1 u-btn u-btn-rectangle u-button-style u-none u-btn-1">learn more</a>
                  </div>
                </div>
                <div className="u-container-style u-image u-layout-cell u-right-cell u-size-34 u-image-1" data-image-width="1500" data-image-height="996">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-container-style u-group u-white u-group-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <p className="u-text u-text-body-color u-text-default u-text-3">Image from <a href="https://freepik.com/photos/people" className="u-active-none u-border-2 u-border-grey-75 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-2">FREEPIK</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-7" id="carousel_b796">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h1 className="u-text u-text-1">
            <span style={{ fontWeight: 700 }}>Innovations</span> in Online Learning
          </h1>
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" ><use xlinkHref="#svg-4a4f"></use></svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-4a4f"
            // style="enable-background:new 0 0 160 160;"
            ><path d="M151.7,132.5c-3.4,6-7.9,11.7-13.3,16.5c-29.2,26.1-54.1-2.3-88.2-3S0,109.5,0,91.6s14.8-31.3,25.3-45.3S33.4,11,51.8,3
	c15.3-6.6,33.6-0.4,51.6,0.7c11.2,0.7,28.8-3.8,38.2,0.4s11.8,15.4,9.2,22.8c-1.9,5.4-5.5,11.6-12.8,16.5
	c-9.3,10.1-4.7,22.9,3.7,33.4c7.8,9.7,17.7,11.7,18.3,23.5C160.4,110.8,157.6,122.2,151.7,132.5L151.7,132.5z"></path></svg>
          </div>
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150" ><use xlinkHref="#svg-7c7a"></use></svg>
            <svg className="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-7c7a"><path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"></path></svg>
          </div>
          <div className="u-clearfix u-expanded-width-lg u-expanded-width-xl u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div className="u-size-40">
                      <div className="u-layout-row">
                        <div className="u-container-style u-image u-layout-cell u-left-cell u-size-60 u-image-1" >
                          <div className="u-container-layout u-valign-middle u-container-layout-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-20">
                      <div className="u-layout-row">
                        <div className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-2" data-image-width="1382" data-image-height="922">
                          <div className="u-container-layout u-valign-middle u-container-layout-2"></div>
                        </div>
                        <div className="u-align-left u-container-style u-grey-5 u-layout-cell u-size-30 u-layout-cell-3">
                          <div className="u-container-layout u-valign-middle u-container-layout-3">
                            <h4 className="u-text u-text-2">Virtual <b>Classroom</b>
                            </h4>
                            <p className="u-text u-text-3">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div className="u-size-20">
                      <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-palette-5-dark-3 u-size-30 u-layout-cell-4">
                          <div className="u-container-layout u-valign-middle u-container-layout-4">
                            <h4 className="u-text u-text-4">Modern <b>Education</b>
                            </h4>
                            <p className="u-text u-text-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            <p className="u-text u-text-6">Images from <a href="https://www.freepik.com/photos/technology" className="u-active-none u-border-1 u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-btn-1">Freepik</a>
                            </p>
                          </div>
                        </div>
                        <div className="u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-3" data-image-width="1125" data-image-height="1500">
                          <div className="u-container-layout u-valign-middle u-container-layout-5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-40">
                      <div className="u-layout-row">
                        <div className="u-container-style u-image u-layout-cell u-right-cell u-size-60 u-image-4" data-image-width="1980" data-image-height="1320">
                          <div className="u-container-layout u-valign-middle u-container-layout-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-8" id="carousel_1c1c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 80" ><use xlinkHref="#svg-0b7f"></use></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 160 80" x="0px" y="0px" id="svg-0b7f"
            // style="enable-background:new 0 0 160 80;"
            ><path d="M160,0H0c0,44.2,35.8,80,80,80S160,44.2,160,0z"></path></svg>
          </div>
          <h1 className="u-custom-font u-text u-text-body-alt-color u-text-1">Education and Learning</h1>
          <p className="u-align-center u-text u-text-body-alt-color u-text-2">Learning is something we do almost every day</p>
          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-left u-container-style u-grey-5 u-list-item u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                  <div className="u-align-center u-container-style u-group u-palette-4-base u-radius-50 u-shape-round u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-3">01</h2>
                    </div>
                  </div>
                  <h5 className="u-text u-text-4">Teaching</h5>
                  <p className="u-text u-text-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                  <a href="https://nicepage.com/landing-page" className="u-active-none u-border-2 u-border-palette-4-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-1">learn more</a>
                </div>
              </div>
              <div className="u-align-left u-container-style u-grey-5 u-list-item u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                  <div className="u-align-center u-container-style u-group u-palette-4-base u-radius-50 u-shape-round u-group-2">
                    <div className="u-container-layout u-valign-middle u-container-layout-4">
                      <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-6">02</h2>
                    </div>
                  </div>
                  <h5 className="u-text u-text-7">Innovations<br />
                  </h5>
                  <p className="u-text u-text-8">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                  <a href="#" className="u-active-none u-border-2 u-border-palette-4-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-2">learn more</a>
                </div>
              </div>
              <div className="u-align-left u-container-style u-grey-5 u-list-item u-repeater-item u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                  <div className="u-align-center u-container-style u-group u-palette-4-base u-radius-50 u-shape-round u-group-3">
                    <div className="u-container-layout u-valign-middle u-container-layout-6">
                      <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-9">03</h2>
                    </div>
                  </div>
                  <h5 className="u-text u-text-10">Students</h5>
                  <p className="u-text u-text-11">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                  <a href="#" className="u-active-none u-border-2 u-border-palette-4-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-3">learn more</a>
                </div>
              </div>
              <div className="u-align-left u-container-style u-grey-5 u-list-item u-repeater-item u-list-item-4">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                  <div className="u-align-center u-container-style u-group u-palette-4-base u-radius-50 u-shape-round u-group-4">
                    <div className="u-container-layout u-valign-middle u-container-layout-8">
                      <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-12">04</h2>
                    </div>
                  </div>
                  <h5 className="u-text u-text-13">Resources</h5>
                  <p className="u-text u-text-14">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                  <a href="https://nicepage.com/website-mockup" className="u-active-none u-border-2 u-border-palette-4-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-4">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-palette-4-base u-section-9" id="carousel_119d">
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <div className="u-align-center u-container-style u-expanded-width-xs u-group u-white u-group-1">
            <div className="u-container-layout u-valign-top u-container-layout-1">
              <h2 className="u-custom-font u-font-oswald u-text u-text-1">Contact Us</h2>
              <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-form u-form-1">
                <form action="//publish.nicepage.com/Form/Process" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" style={{ padding: "10px" }} resource="email" name="form">
                  <input type="hidden" id="siteId" name="siteId" value="254600" wfd-invisible="true" />
                  <input type="hidden" id="pageId" name="pageId" value="254603" wfd-invisible="true" />
                  <div className="u-form-group u-form-name u-form-group-1">
                    <label htmlFor="name-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                    <input type="text" placeholder="Enter your Name" id="name-5a14" name="name" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" />
                  </div>
                  <div className="u-form-email u-form-group u-form-group-2">
                    <label htmlFor="email-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                    <input type="email" placeholder="Enter a valid email address" id="email-5a14" name="email" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" />
                  </div>
                  <div className="u-form-group u-form-message u-form-group-3">
                    <label htmlFor="message-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Message</label>
                    <textarea placeholder="Enter your message" rows={4} cols={50} id="message-5a14" name="message" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" ></textarea>
                  </div>
                  <div className="u-align-center u-form-group u-form-submit u-form-group-4">
                    <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Submit</a>
                    <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true" />
                  </div>
                  <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                  <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                  <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true" />
                </form>
                {/* </div>  */}
                <p className="u-text u-text-2">Image from <a href="https://freepik.com/photos/people" className="u-active-none u-border-1 u-border-grey-75 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-2">Freepik</a>
                </p>
              </div>
            </div>

          </div>
          <Image src="/c461c07a441a5d220e8feb1a/ae30a308cbe35550a1ff83d9/wqe-min.jpg" alt="" className="u-expanded-width-xs u-image u-image-default u-image-1" width="800" height="948" />
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-2"><span className="u-icon u-icon-circle u-text-white u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 513.64 513.64" ><use xlinkHref="#svg-17d4"></use></svg><svg className="u-svg-content" viewBox="0 0 513.64 513.64" x="0px" y="0px" id="svg-17d4"
                // style="enable-background:new 0 0 513.64 513.64;"
                ><g><g><path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
                </g>
                  </g></svg></span>
                  <h5 className="u-text u-text-3">Call Us</h5>
                  <p className="u-text u-text-4">1 (234) 567-891, 1 (234) 987-654</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3"><span className="u-icon u-icon-circle u-text-white u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xlinkHref="#svg-983b"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-983b"
                // style="enable-background:new 0 0 512 512;"
                ><g><g><path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5    c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021    C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333    s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"></path>
                </g>
                  </g></svg></span>
                  <h5 className="u-text u-text-5">Location</h5>
                  <p className="u-text u-text-6">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-4"><span className="u-icon u-icon-circle u-text-white u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xlinkHref="#svg-5ed3"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" id="svg-5ed3"><g><path d="m386.058 256c0-8.284 6.716-15 15-15h31.587c-7.224-85.814-75.831-154.421-161.645-161.645v31.588c0 8.284-6.716 15-15 15s-15-6.716-15-15v-31.588c-85.814 7.224-154.421 75.831-161.645 161.645h31.587c8.284 0 15 6.716 15 15s-6.716 15-15 15h-31.587c7.224 85.814 75.831 154.421 161.645 161.645v-31.588c0-8.284 6.716-15 15-15s15 6.716 15 15v31.588c85.814-7.224 154.421-75.831 161.645-161.645h-31.587c-8.284 0-15-6.716-15-15zm-39.467-71.629-79.838 82.087c-5.558 5.714-14.618 6.086-20.625.835l-59.598-52.101c-6.237-5.452-6.873-14.929-1.42-21.165 5.452-6.237 14.928-6.875 21.166-1.421l48.889 42.739 69.921-71.891c5.776-5.938 15.273-6.069 21.211-.295 5.938 5.778 6.07 15.274.294 21.212z"></path><path d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 463.286c-114.298 0-207.286-92.988-207.286-207.286s92.988-207.286 207.286-207.286 207.286 92.988 207.286 207.286-92.988 207.286-207.286 207.286z"></path>
                </g></svg></span>
                  <h5 className="u-text u-text-7">Business Hours</h5>
                  <p className="u-text u-text-8">Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-266b"><div className="u-clearfix u-sheet u-sheet-1">
        <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      </div></footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <a className="u-link" href="https://nicepage.com/website-templates" target="_blank" rel="noreferrer">
          <span>Website Templates</span>
        </a>
        <p className="u-text">
          <span>created with</span>
        </p>
        <a className="u-link" href="https://nicepage.com/" target="_blank" rel="noreferrer">
          <span>Website Builder Software</span>
        </a>.
      </section>
    </div >
  )
}
