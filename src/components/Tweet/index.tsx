import {
  Container,
  Retweeted,
  Body,
  Content,
  Header,
  Dot,
  Avatar,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>PV Capuano</strong>
            <span>@pvcapuano</span>
            <Dot />
            <time>29 de jun</time>
          </Header>

          <Description>Salve salve rapaziada</Description>

          {/* <ImageContent /> */}
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
