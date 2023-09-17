import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react' 

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/felipeffranco.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Franco</strong>
                            <time title="11 de agosto as 08:13h" dateTime="20223-08-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}