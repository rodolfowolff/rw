import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export function Subscribre({ priceId }: SubscribeButtonProps) {
  return (
    <button className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}