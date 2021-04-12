import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  return(
  <>
    <div className={styles.mainHeading}>
      <h1>Dummy Shop</h1>
      <h2>This is a test project built for educational purposes, DO NOT send money!</h2>
    </div>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
