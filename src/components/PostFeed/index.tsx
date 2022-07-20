import {
  Container,
  Tab,
  Tweets,
  ContainerPost,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  Retweeted,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
} from './styles';

import { format } from 'date-fns';

const PostFeed = ({ posts, deletePost }: any) => {
  const tweetDate = format(new Date(), 'dd/MM/yyyy');

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <ContainerPost>
          <Retweeted>Você tweetou</Retweeted>
          {posts.map((post: any) => (
            <Body key={post.id}>
              <Avatar />

              <Content>
                <Header>
                  <strong>PV Capuano</strong>
                  <span>@pvcapuano</span>
                  <Dot />
                  <time>{tweetDate}</time>
                </Header>

                <Description>{post.postText}</Description>

                {/* <ImageContent /> */}
                <Icons>
                  <Status>
                    <CommentIcon />
                    10
                  </Status>
                  <Status>
                    <RetweetIcon />
                    15
                  </Status>
                  <Status>
                    <LikeIcon />
                    20
                  </Status>
                  <Status>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </Status>
                </Icons>
              </Content>
            </Body>
          ))}
        </ContainerPost>
      </Tweets>
    </Container>
  );
};

export default PostFeed;
