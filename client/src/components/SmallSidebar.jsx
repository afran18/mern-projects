import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashbaordContext } from "../pages/DashboardLayout"

const SmallSidebar = () => {
    const data = useDashbaordContext();
    console.log(data);
    
  return (
    <Wrapper>SmallSidebar</Wrapper>
  )
}
export default SmallSidebar