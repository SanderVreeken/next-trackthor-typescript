import Head from 'next/head'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trackthor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Dashboard />
      </main>
    </div>
  )
}
