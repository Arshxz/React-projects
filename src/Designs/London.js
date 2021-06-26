import React, { useRef, useEffect } from 'react'
import {TweenMax} from 'gsap'

import styles from './london.module.css'
import background from './images/london-dark.jpg'


const London = () => {
  let textOr = useRef(null)
  let textP = useRef(null)

  useEffect(() => {
    TweenMax.to(
      textOr,
      1,
      {
        opacity: 0,
        y: -50,
        delay: 5,
      }
    )
    TweenMax.to(
      textP,
      1,
      {
        opacity: 1,
        y: 20,
        delay: 4,
      }
    )
  }, [])


  return(
    <>
      <header>
        <div className={styles.title}>VOYAGE</div>
        <nav>
          <ul className={styles.navLinks}>
            <li><a className={styles.navLink} href="/">HOME</a></li>
            <li><a className={styles.navLink} href="/">MY ACCOUNT</a></li>
            <li><a className={styles.navLink} href="/">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.presentation}>
          <div style={{backgroundImage: "url(" + background + ")", width: '100%', height: '100%'}} className={styles.introduction}>
            <div className={styles.introText}>
              <h3>Welcome Back Arsh!</h3>
              <h3>What is it that you would like to see this time in London?</h3>
            <div className={styles.cta}>
              <button className={styles.button}>Find your Destination</button>
            </div>
            </div>
          </div>
          <div className={styles.introduction2}>
            <h2 ref={el => {textOr = el}} className={styles.or}>Or</h2>
            <h3 ref={el => {textP = el}} className={styles.rest}>
              We have got some of the safest places for you this pandemic
            </h3>
            <div className={styles.cta2}>
              <button className={styles.button2}>Check it out</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default London