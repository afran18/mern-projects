import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, FormRow } from "../components"

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="text" name="location" labelText="Location" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">Submit</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register