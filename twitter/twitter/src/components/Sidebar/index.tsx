import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

const Sidebar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <TwitterTweetEmbed tweetId={'933354946111705097'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pvcapuano"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://github.com/pvcapuano'}
          options={{ text: '#reactjs is awesome', via: 'pvcapuano' }}
        />
      </Body>
    </Container>
  );
};

export default Sidebar;
