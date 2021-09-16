import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Subscribre } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <Subscribre priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width="462" height="634" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JaOKaLjfspS4C9AtU9dY6Y2')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
