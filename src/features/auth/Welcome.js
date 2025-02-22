import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {
  
    const { username, isManager, isAdmin } = useAuth()
     
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="Welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            <p><Link to='/dash/notes'>View techNotes</Link></p>

            <p><Link to='/dash/notes/new'>Add new techNote</Link></p>

            {isAdmin || isManager ? <p><Link to='/dash/users'>View User Settings</Link></p> : null}

            {(isAdmin || isManager) && <p><Link to='/dash/users/new'>Add new user</Link></p>}

        </section>
    )
  
    return content
}

export default Welcome