import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel angle Duran',
    initialIsFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    initialIsFollowing: false
  },
  {
    userName: 'pacoHdezs',
    name: 'Paco Hdz',
    initialIsFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    initialIsFollowing: false
  }

]

export function App () {
  const format = (userName) => `@${userName}` 
  return (
    <section className='App'>
      {
        users.map(({ userName, name, initialIsFollowing }) => (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={initialIsFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
      }

    </section>
  )
}