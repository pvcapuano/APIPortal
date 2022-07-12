import {
  Container,
  DivButton,
  Header,
  ImageInput,
  Info,
  TweetBox,
  TweetButton,
  TweetInput,
} from './styles';
import Feed from '../Feed';
import { Avatar, Button } from '@mui/material';

const Post = () => {
  return (
    <Container>
      <Header>
        <Info>
          <strong>Página Inicial</strong>
        </Info>
      </Header>

      <TweetBox>
        <TweetInput>
          <Avatar />
          <input placeholder="O que está acontecendo?" type="text" />
        </TweetInput>
        <DivButton>
          <TweetButton>Tweetar</TweetButton>
        </DivButton>
      </TweetBox>

      <Feed />
    </Container>
  );
};

export default Post;
