import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, FormRow } from "../components"

const Login = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <button type="submit" className="btn btn-block">Login</button>
        <button type="button" className="btn btn-block">Explore the app</button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">Register</Link>
        </p>
      </form>

    </Wrapper>
  )
}
export default Login