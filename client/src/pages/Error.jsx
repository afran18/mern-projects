import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  
  if(error.status === 404) {
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <Link to='/dashboard'>Back Home</Link>
      </div>
    </Wrapper>

  }
  return (
    <Wrapper>
      <div>
      <h3>Something went wrong</h3>
      <Link to='/'className="btn">Back Home</Link>
    </div>
    </Wrapper>
    
  )
}
export default Error