import MyProfile from "../components/myPage/Profile";
import ActivityLog from '../components/myPage/ActivityLog';
import { Wrapper } from "../styles/MyPage/myPage";
const MyPage = () => {
  return (
    <Wrapper>
      <MyProfile />
      <ActivityLog />
    </Wrapper>
  )
}
export default MyPage;