import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Banana from "../public/banana.jpg"
import Apple from "../public/apple.jpg"
import Mango from "../public/mango.jpg"
import Grapes from "../public/guava.jpg"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Shop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.gridContainer}>
          <Grid container spacing={5} className={styles.gridClass}>
            <Grid item xs={6}>
              <Paper>
                <div className={styles.shopitem}>
                  <h1>Banana</h1>
                  <img src={Banana} alt="banana" className={styles.imgresize}/>
                  <div className={styles.amountBox}>
                    <h2>$1000.00</h2>
                    <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Buy now!
                    </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <div className={styles.shopitem}>
                  <h1>Apple</h1>
                  <img src={Apple} alt="apple" className={styles.imgresize}/>
                  <div className={styles.amountBox}>
                    <h2>$1000.00</h2>
                    <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Buy now!
                    </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <div className={styles.shopitem}>
                  <h1>Mango</h1>
                  <img src={Mango} alt="mango" className={styles.imgresize}/>
                  <div className={styles.amountBox}>
                    <h2>$1000.00</h2>
                    <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Buy now!
                    </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <div className={styles.shopitem}>
                  <h1>Guava</h1>
                  <img src={Grapes} alt="grapes" className={styles.imgGuava}/>
                  <div className={styles.amountBox}>
                    <h2>$1000.00</h2>
                    <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Buy now!
                    </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
