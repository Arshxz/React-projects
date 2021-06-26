import React from 'react'

import styles from './ecstacy.module.css'
//images
import blue2 from '.././ecstacy/blue2.jpg'
import main from '.././ecstacy/main.jpg'
import blue1 from '.././ecstacy/blue1.jpg'
import blue3 from '.././ecstacy/blue3.jpg'
import design1 from '.././ecstacy/design1.jpg'
import anupama2 from '.././ecstacy/anupama2.jpeg'
import anupreet2 from '.././ecstacy/anupreet2.jpeg'
import arshdeep2c from '.././ecstacy/arshdeep2c.jpeg'
import image1 from '.././ecstacy/l1.jpg'
import image2 from '.././ecstacy/l2.jpg'
import image3 from '.././ecstacy/l3.jpg'
import image4 from '.././ecstacy/l4.jpg'
import image5 from '.././ecstacy/l5.jpg'
import image6 from '.././ecstacy/l6.jpg'
import image7 from '.././ecstacy/l7.jpg'
import image8 from '.././ecstacy/l8.jpg'
import image9 from '.././ecstacy/l9.jpg'
import image10 from '.././ecstacy/l10.jpg'
import image11 from '.././ecstacy/l11.jpg'
import image12 from '.././ecstacy/l12.jpg'
import c1 from '.././ecstacy/c1.jpg'
import c2 from '.././ecstacy/c2.jpg'
import c3 from '.././ecstacy/c3.jpg'

const Ecstacy = () => {

    return (
        <>
            <main>
                <div className={styles.header}>
                    <div className={styles.title}>Ecstacy</div>
                </div>
                <section className={styles.landing}>
                    <div className={styles.introduction}>
                        <div className={styles.taglineContainer}>
                            <div className={styles.tagline}>The new standard of websites.</div>
                        </div>
                        <div className={styles.intro}>
                            <div className={styles.landingContainer}>
                                <p className={styles.introText}>Experience a seamless design process from concept to production with responsive CSS powered by smooth drag & drop.</p>
                                <button className={styles.startCreating}>Start Creating</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.landingImages}>
                        <img className={styles.img1} src={blue2} alt="1st"/>
                        <img className={styles.img2} src={main}alt="2nd"/>
                        <img className={styles.img3} src={blue1} alt="3rd"/>
                        <img className={styles.img4} src={blue3} alt="4th"/>
                    </div>
                </section>
                <div className={styles.stickyBlur}>
                    <div className={styles.stickyContainer}>ECSTACY</div>
                </div>
        
                <section className={styles.section2}>
                    <div className={styles.featuresImage}>
                        <img className={styles.imgF} src={design1} alt=""/>
                    </div>
                    <div className={styles.features}>
                        <h2 className={styles.featuresHeading}>Advanced design features.</h2>
                        <p className={styles.featuresMore}>Define the exact position and behavior of every element at any viewport with flex and grid layouts, custom interactions and full breakpoint control.</p>
                        <button className={styles.startCreating}>Start Creating</button>
                    </div>
                </section>
                <section className={styles.section3}>
                    <div className={styles.teamworkMain}>
                        <div className={styles.teamworkContainer}>
                            <h2 className={styles.teamworkTitle}>Teamwork & collaboration.</h2>
                            <p className={styles.teamworkMore}>Align brand identities and drive collaboration with shareable design libraries, live commenting and advanced roles and permissions.</p>
                            <button className={styles.startCreatingBlack}>Start Creating</button>
                        </div>
                    </div>
                    <div className={styles.teamworkPartners}>
                        <div className={styles.column1}>
                            <div className={styles.row11}>
                                <div className={styles.team}>
                                    <div className={styles.teamCircle}>
                                        <div className={styles.teamImageContainer}>
                                            <img src={anupama2} alt="" className={styles.teamDp}/>
                                        </div>
                                    </div>
                                    <div className={styles.teamName}>Anupama Semwal</div>
                                    <div className={styles.teamMail}>asemwal@ecstacy.com</div>
                                </div>
                                <div className={styles.postContainer1}>
                                    <div className={styles.postContainerInner}>
                                        <div className={styles.teamCircle}>
                                            <div className={styles.teamImageContainerSmall}>
                                                <img src={anupama2} alt="" className={styles.teamDp}/>
                                            </div>
                                        </div>    
                                        <div className={styles.namePost}>
                                            <div className={styles.name}>Anupama Semwal</div>
                                            <div className={styles.post}>Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row2}></div>
                            <div className={styles.row3}></div>
                        </div>
                        <div className={styles.column2}>
                            <div className={styles.row12}>
                                <div className={styles.team}>
                                    <div className={styles.teamCircle}>
                                        <div className={styles.teamImageContainer}>
                                            <img src={anupreet2} alt="" className={styles.teamDp}/>
                                        </div>
                                    </div>
                                    <div className={styles.teamName}>Anupreet Kaur</div>
                                    <div className={styles.teamMail}>akaur@ecstacy.com</div>
                                </div>
                                <div className={styles.postContainer2}>
                                    <div className={styles.postContainerInner}>
                                        <div className={styles.teamCircle}>
                                            <div className={styles.teamImageContainerSmall}>
                                                <img src={anupreet2} alt="" className={styles.teamDp}/>
                                            </div>
                                        </div>    
                                        <div className={styles.namePost}>
                                            <div className={styles.name}>Anupreet Kaur</div>
                                            <div className={styles.post}>Marketing Lead</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row2}></div>
                            <div className={styles.row3}></div>
                        </div>
                        <div className={styles.column3}>
                            <div className={styles.row13}>
                                <div className={styles.team}>
                                    <div className={styles.teamCircle}>
                                        <div className={styles.teamImageContainer}>
                                            <img src={arshdeep2c} alt="" className={styles.teamDp}/>
                                        </div>
                                    </div>
                                    <div className={styles.teamName}>Arshdeep Singh</div>
                                    <div className={styles.teamMail}>asingh@ecstacy.com</div>
                                </div>
                                <div className={styles.postContainer3}>
                                    <div className={styles.postContainerInner}>
                                        <div className={styles.teamCircle}>
                                            <div className={styles.teamImageContainerSmall}>
                                                <img src={arshdeep2c} alt="" className={styles.teamDp}/>
                                            </div>
                                        </div>    
                                        <div className={styles.namePost}>
                                            <div className={styles.name}>Arshdeep Singh</div>
                                            <div className={styles.post}>Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row2}></div>
                            <div className={styles.row3}></div>
                        </div>
                    </div>
                    <div className={styles.teamworkImages}></div>
                </section>
                <div className={styles.pTop}>
                    <div className={styles.pContainer}>
                        <div className={styles.pGradient}>
                            <div className={styles.pHeader}>
                                <h2 className={styles.pHeading}>Discover extraordinary projects brought to life on Ecstacy.</h2>
                                <button className={styles.startCreating}>Start Creating</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.projects}>
                    <div className={styles.projectsR1}>
                        <div className={styles.r1Container}>
                            <img src={image1} alt="template" className={styles.landingTemplates}/>
                            <img src={image2} alt="template" className={styles.landingTemplates}/>
                            <img src={image3} alt="template" className={styles.landingTemplates}/>
                            <img src={image4} alt="template" className={styles.landingTemplates}/>
                            <img src={image5} alt="template" className={styles.landingTemplates}/>
                        </div>
                    </div>
                    <div className={styles.projectsR2}>
                        <div className={styles.r2Container}>
                            <img src={image6} alt="template" className={styles.landingTemplates}/>
                            <img src={image7} alt="template" className={styles.landingTemplates}/>
                            <img src={image8} alt="template" className={styles.landingTemplates}/>
                            <img src={image9} alt="template" className={styles.landingTemplates}/>
                            <img src={image10} alt="template" className={styles.landingTemplates}/>
                            <img src={image11} alt="template" className={styles.landingTemplates}/>
                        </div>
                    </div>
                    <div className={styles.projectsR3}>
                        <div className={styles.r3Container}>
                            <img src={image12} alt="template" className={styles.landingTemplates}/>
                            <img src={image2} alt="template" className={styles.landingTemplates}/>
                            <img src={image3} alt="template" className={styles.landingTemplates}/>
                            <img src={image4} alt="template" className={styles.landingTemplates}/>
                            <img src={image5} alt="template" className={styles.landingTemplates}/>
                        </div>
                    </div>
                </section>
                <section className={styles.community}>
                    <div className={styles.communityTitle}>
                        <h3 className={styles.cTitle}>The Ecstacy community.</h3> 
                        <p className={styles.cPara}>Resources to nurture your <br/> creativity and career.</p> 
                    </div>               
                    <div className={styles.communityContainers}>
                        <div className={styles.cc1}>
                            <div className={styles.cbox}>
                                <h5 className={styles.cHeading}>Community E.</h5>
                                <p className={styles.cMore}>Join our community of creators and Ecstacy experts. Send us questions, share creations and more.</p>
                            </div>
                            <div className={styles.cPic}>
                                <img className={styles.cImages} src={c1} alt=""/>
                            </div>
                        </div>
                        <div className={styles.cc2}>
                            <div className={styles.cbox}>
                                <h5 className={styles.cHeading}>Shaping Design.</h5>
                                <p className={styles.cMore}>Follow our blog written by experienced designers that covers a wide range of topics at the intersection of design and tech.</p>
                            </div>
                            <div className={styles.cPic}>
                                <img className={styles.cImages} src={c2} alt=""/>
                            </div>
                        </div>
                        <div className={styles.cc3}>
                            <div className={styles.cbox3}>
                                <h5 className={styles.cHeading}>Partner Program.</h5>
                                <p className={styles.cMore}>Get matched with leads and earn points for every client site you build. Unlock exclusive benefits like custom branding, client billing and rev share.</p>
                            </div>
                            <div className={styles.cPic}>
                                <img className={styles.cImages} src={c3} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.security}>
                    <div className={styles.securityR1}>
                        <div className={styles.sTitleContainer}>
                            <h5 className={styles.sTitle}>→ Hosting and security.</h5>
                        </div>
                        <div className={styles.sMoreCotainer}>
                            <p className={styles.sMore}>All Ecstacy sites are hosted on our reliable global cloud servers and are compliant with the highest international security standards.</p>
                        </div>
                    </div>
                    <div className={styles.securityR1}>
                        <div className={styles.sTitleContainer}>
                            <h5 className={styles.sTitle}>→ Website uptime.</h5>
                        </div>
                        <div className={styles.sMoreCotainer}>
                            <p className={styles.sMore}>Be confident that your final creation will run as smoothly as intended with market-leading website uptime.</p>
                        </div>
                    </div>
                    <div className={styles.securityR2}>
                        <div className={styles.sTitleContainer}>
                            <h5 className={styles.sTitle}>→ Time to market.</h5>
                        </div>
                        <div className={styles.sMoreCotainer}>
                            <p className={styles.sMore}>Ecstacy's features and tools are built with efficiency and scalability in mind giving you an unbeatable time to market.</p>
                        </div>
                    </div>
                </section>
                {/* <section className={styles.template}>
                    <div className={styles.templateUpper}>
                        <div className={styles.titleContainer}>
                            <div className={styles.templateTitle}>Website templates by our <br/> in-house design studio.</div>
                        </div>
                        <div className={styles.templateContainer}>
                            <div className={styles.templateMore}>
                                <p className={styles.templatePara}>Accelerate your next project or get inspired and <br/> design from a blank canvas.</p>
                                <button className={styles.startCreatingBlack}>Start Creating</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.templateLower}></div>
                </section> */}
                <section className={styles.company}>
                    <div className={styles.companyContainer}>
                        <div className={styles.companyTitle}>Ecstacy</div>
                    <h2 className={styles.companyMore}>The rest is up to you.</h2>
                    <button className={styles.startCreating}>Start creating</button>
                    </div>
                </section>
                <footer className={styles.footer}>
                    <div className={styles.fInner}>
                        <div className={styles.fHeader}><a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=Arsh99.un@gmail.com" className={styles.ecstacy} target="_blank">ECSTACY</a></div>
                        <div className={styles.fIcons}>
                            <a href=""><i className={styles} className={styles.fa} className={styles.faTwitter} className={styles.icons}></i></a>
                            <a href=""><i className={styles} className={styles.fa} className={styles.faInstagram} className={styles.icons}></i></a>
                            <a href=""><i className={styles} className={styles.fa} className={styles.faLinkedin} className={styles.icons}></i></a>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Ecstacy