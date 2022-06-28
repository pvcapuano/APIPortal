import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  CalendarIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton>Editar perfil</EditButton>

        <h1>PV Capuano</h1>
        <h2>@pvcapuano</h2>

        <ul>
          <li>
            <CalendarIcon />
            Ingressou em 19 de agosto de 2018
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>10</strong>
          </span>
          <span>
            seguidores <strong>20</strong>
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
