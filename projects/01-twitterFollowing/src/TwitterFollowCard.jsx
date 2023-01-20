import { useState } from "react"

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setFollowing] = useState(initialIsFollowing)

  const imageSrc = `https://unavatar.io/${userName}` 
  const text = isFollowing 
    ? 'Siguiendo' 
    : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  
    const handelClick = () =>  {
      setFollowing(!isFollowing)
    }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={imageSrc} className="tw-followCard-avatar" alt="avatar"/>
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}