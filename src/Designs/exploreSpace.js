import React from 'react'

import styles from './exploreSpace.module.css'
import background from './images/milky-way.jpg'

const ExploreSpace = () => {
  
  return(
    <>
      <header>
        <div className={styles.title}>
          <h3 style={{fontFamily: "Lato"}}>EXPLORE BEYOND OUR PLANET</h3>
        </div>
        <nav>
          <ul class={styles.navlinks}>
            <li><a className={styles.navlink} href="/">Hubble</a></li>
            <li><a className={styles.navlink} href="/">Dark Energy</a></li>
            <li><a className={styles.navlink} href="/">Black Holes</a></li>
            <li><a className={styles.navlink} href="/">Time</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section className={styles.presentation}>
          <div style={{backgroundImage: "url(" + background + ")", width: '100%', height: '100%'}} className={styles.introduction}>
            <div className={styles.introtext}>
              <h3 style={{fontFamily: "Lato"}}>
                YOU ARE ALREADY WAY BEYOND YOUR PLANET
              </h3>
            </div>
            <div className={styles.cta}>
              <button className={styles.explore}>Explore Beyond</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ExploreSpace
