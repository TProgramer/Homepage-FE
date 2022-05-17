import { Wrapper } from '../styles/start';
import ActivityGallery from "../components/home/ActivityGallery";
import YoutubePlayer from '../components/home/YoutubePlayer';
import H1 from '../components/common/H1';
import P from '../components/common/P';

const Home = () => (
  <Wrapper>
    <YoutubePlayer videoID='sqgxcCjD04s' autoplay mute loop disableKeyboard>
      <H1 center>NL 세상의 중심이 되다.</H1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris
        magna, sollicitudin in porttitor et, vestibulum quis ligula. Sed porta
        et mi vel tincidunt. Morbi eleifend rutrum ornare. Vestibulum hendrerit
        lacinia venenatis. Curabitur et mi urna. Aliquam dignissim a ipsum nec
        bibendum. Integer tristique imperdiet accumsan. Cras et accumsan lorem.
      </P>
    </YoutubePlayer>
    <ActivityGallery />
  </Wrapper>
);

export default Home;
