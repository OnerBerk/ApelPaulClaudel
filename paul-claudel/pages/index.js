import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>

      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}>Apel Paul Claudel d'Hust </h1>

          <p>
              You can find more articles on the {''}
              <Link href='/blog'>
                  <a>blog articles page</a>
              </Link>
          </p>
      </main>

      <footer className={styles.footer}>
On.air 2021
      </footer>
    </div>
  )
}
