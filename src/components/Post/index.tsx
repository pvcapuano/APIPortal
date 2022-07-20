import {
  Container,
  DivButton,
  Header,
  Info,
  TweetBox,
  TweetButton,
  TweetInput,
} from './styles';

import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import PostFeed from '../PostFeed';
import { v4 as uuid } from 'uuid';

interface Posts {
  id: any;
  postText: string;
}

const Post = () => {
  const [posts, setPosts] = useState<Posts[]>(() => {
    const savedPosts = localStorage.getItem('posts');

    if (savedPosts) {
      return JSON.parse(savedPosts);
    } else {
      return [];
    }
  });

  const [currentPost, setCurrentPost] = useState('');

  useEffect(
    () => localStorage.setItem('posts', JSON.stringify(posts)),
    [posts]
  );

  let tweetBox = (e: any) => {
    setCurrentPost(e.target.value);
  };

  const addPost = () => {
    let novoPost = { id: uuid(), postText: currentPost };
    let arr = posts.concat(novoPost);

    if (currentPost == '') {
      return posts;
    }
    setPosts(arr);
    setCurrentPost('');
    /* e.preventDefault();

    if (currentPost !== '') {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          postText: currentPost.trim(),
        },
      ]);
    }

    setCurrentPost(''); */
  };

  console.log(posts);

  const deletePost = (id: any) => {
    const removeItem = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(removeItem);
  };

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
          <input
            onChange={tweetBox}
            value={currentPost}
            placeholder="O que está acontecendo?"
            type="text"
          />
        </TweetInput>
        <DivButton>
          <TweetButton onClick={addPost}>Tweetar</TweetButton>
        </DivButton>
      </TweetBox>

      <PostFeed posts={posts} deletePost={deletePost} />
    </Container>
  );
};

export default Post;
