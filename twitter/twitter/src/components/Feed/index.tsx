import { Container, Tab, Tweets } from './styles';
import Tweet from '../Tweet';

const Feeds = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feeds;
