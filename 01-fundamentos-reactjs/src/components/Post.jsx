import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://www.github.com/felipeffranco.png" />
                    <div className={styles.authorInfo}>
                        <strong>Felipe</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>
                <time title="11 de agosto as 08:13h" dateTime="20223-08-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    Fala galeraa 👋
                </p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀
                </p>
                <p>
                    👉{' '}<a href="https://github.com/felipeffranco">Felipe Franco's Github</a>
                </p>
                <p>
                    <a href="#">#novoprojeto #nlw #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    ) 
}
