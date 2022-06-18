import { Wrapper } from '../styles/activity/activity';
import dynamic from 'next/dynamic';

const MasonryBox = dynamic(
  () => import('../components/activity/Masonry'),
  { ssr: false }
);

const Activity = () => {
  return (
    <Wrapper>
      <MasonryBox />
    </Wrapper>
  )
}

export default Activity;