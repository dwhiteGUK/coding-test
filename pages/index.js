import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Albums
        </h1>
        {!data && <p><strong>No Albums Found</strong></p>}

        {data && (
          <ul class="album-list">
            {data.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        )}


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()

  if (res.status === 404 && res.statusText === 'Not Found') {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
