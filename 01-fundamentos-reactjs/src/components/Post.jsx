import styles from './Post.module.css'

export function Post(props) {
    return (
        <div className={styles.post}>
            <h1>{props.author}</h1>
            <p>{props.content}</p>
        </div>
    ) 
}
