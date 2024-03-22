import React from 'react'
import styles from '../style'
import { Navbar, Footer } from "../components"


const Home = () => {
  return (
  <div className={`w-full h-full overflow-hidden`} >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Login /> */}
          </div>
        </div>
      </div>
    </div>
    <div className={`bg-primary hidden ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Home
