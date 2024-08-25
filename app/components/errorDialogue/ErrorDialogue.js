import styles from './styles.module.css'

const ErrorDialogue = () =>
{

    return(
        <div className={styles.container}>
            <div className={styles.error}>
                <p className={styles.errorMMessage}>Something went wrong!</p>
            </div>
        </div>
    )
}

export default ErrorDialogue