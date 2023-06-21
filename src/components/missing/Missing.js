import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page is not found!</h2>
      <p>Well, that's sad!</p>
      <p>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing