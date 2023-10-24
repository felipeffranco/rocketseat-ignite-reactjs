import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/felipeffranco.png',
      name: 'Felipe Franco',
      role: 'CTO'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      { type: 'link', content: 'https://www.github.com/felipeffranco.png'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  { 
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/felipeffranco.png',
      name: 'Nayra Biondo',
      role: 'CEO'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      { type: 'link', content: 'https://www.github.com/felipeffranco.png'},
    ],
    publishedAt: new Date('2023-05-10 10:00:00'),
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}> 
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
