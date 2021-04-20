import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Guava from "../public/guava.jpg"
import Button from "@material-ui/core/Button";
import Link from 'next/link'
import { useState } from 'react';

export default function Checkout() {

    const [TID, setTID] = useState('')
    const [email, setEmail] = useState('')
    //Item ID is hard coded

    async function handleSubmit(e) {
        console.log("In transfer function")
        let data = {
            "itemID": 4,
            "email": email,
            "transactionID": TID
        }

        fetch(`http://10.0.1.4:5000/`, {
            method: 'POST',
            credentials: 'omit',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(data),
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.gridContainer2}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper>
                            <div className={styles.shopitem}>
                                <h1>Payment Details</h1>
                                <h2>We only accept payment through Bitcoin</h2>
                                <h2>Address to send money to: Some value </h2>
                                <div className={styles.finalProduct}>
                                    <img src={Guava} alt="guava" className={styles.imgCheckout} />
                                    <div className={styles.productDetails}>
                                        <h2>Item: 1 dozen Guavas</h2>
                                        <h2>Price: $2000</h2>
                                        <div className={styles.rowAlign}>
                                            <h2>Quantity: </h2> &nbsp;
                                            <input type="number" id="quantity" className={styles.inputField} onChange={e => setQ(e.target.value)} />
                                        </div>
                                        <h2>Enter the Transaction ID:</h2>
                                        <input type="text" id="trans_id" className={styles.inputFieldT} onChange={e => setTID(e.target.value)} />
                                        <h2>Email ID:</h2>
                                        <input type="text" id="trans_id" className={styles.inputFieldT} onChange={e => setEmail(e.target.value)} />
                                        <div className={styles.buttonGroup}>
                                            <Link href="/">
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    className={styles.buyButton}
                                                >
                                                    Go back
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={styles.buyButton}
                                                onClick={handleSubmit}
                                            >
                                                Send Request!
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}