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
import { useState } from 'react';

const PostFeed = ({ props }: any) => {
  const tweetDate = format(new Date(), 'dd/MM/yyyy');

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <ContainerPost>
          <Retweeted>Você tweetou</Retweeted>
          {props.map((post: any) => (
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
                  <Status>
                    <button>Delete</button>
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
