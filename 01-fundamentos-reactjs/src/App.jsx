import { Post } from './Post'

export function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Post 
        author="Felipe Franco" 
        content="Esse é um post de exemplo"
      />
      <Post 
        author="Nayra B" 
        content="Um novo post"
      />
    </>
  )
}
