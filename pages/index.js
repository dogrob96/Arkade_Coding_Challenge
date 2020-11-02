import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Search from '../pages/Search.js'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Arkade Coding Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{paddingBottom: "10rem"}}>
          Marvel Character Search
        </h1>

        <p className={styles.description}>
          <Search/>
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
