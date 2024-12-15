import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae distinctio dolor veritatis illo incidunt magni, necessitatibus officiis qui delectus nihil blanditiis voluptatum iusto quas reiciendis voluptas accusantium excepturi consequatur dicta.
          Nam, fugit commodi.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn login-link'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job Hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing