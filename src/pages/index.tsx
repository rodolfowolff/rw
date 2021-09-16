import Head from 'next/head'
import Image from 'next/image'
import { Subscribre } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | rw.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> Hey, welcome</span>
          <h1>New about the <span>Coding</span> and <span>Tecnology</span>.</h1>

          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <Subscribre />
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width="462" height="634" />
      </main>
    </>
  )
}
