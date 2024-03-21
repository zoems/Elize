import styles from "./style"

import { Home } from './pages';

import { Navbar, Footer } from "./components"
import Login from "./components/Login"


const App = () => (
  <div className={`w-full h-full overflow-hidden`} >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Login />
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


export default App
// if a react component simply returns JSX then you dont need the curly braces
