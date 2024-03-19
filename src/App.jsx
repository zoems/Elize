// import styles from "./style"

// import { Navbar, Footer, Hero } from "./components"
import Login from "./components"
// import useLogin from "./hooks/useLogin"

import { useState } from 'react'

const App = () => {
  const [seen, setSeen] = useState(false)

  function togglePop () {
      setSeen(!seen);
  }

  return (
      <div>
          <button onClick={togglePop}>Login</button>
          {seen ? <Login toggle={togglePop} /> : null}
      </div>
  )
}
// (
  // <div className={`w-full h-full overflow-hidden`} >
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>

  //   <div className={`bg-primary ${styles.flexStart}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Hero />
  //     </div>
  //   </div>

  //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Footer />
  //     </div>
  //   </div>
  // </div>
// )


export default App
// if a react component simply returns JSX then you dont need the curly braces
