import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  MenuButtonWork,
} from './styles';

import Button from '../Button';

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtonWork to="/">
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtonWork>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButtonWork to="/main">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtonWork>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
