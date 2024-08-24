import styles from './styles.module.css'

const ErrorDialogue = () =>
{

    return(
        <div className={styles.container}>
            <div className={styles.error}>
                <p className={styles.errorMMessage}>Something went wrong!</p>
                {/* <button className={styles.home} onClick={()=> router.push('/')}>Go to Home</button> */}
            </div>
        </div>
    )
}

export default ErrorDialogue