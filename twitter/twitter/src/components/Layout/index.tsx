import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../Main';
import MenuBar from '../MenuBar';
import Sidebar from '../Sidebar';
import Post from '../Post';
import { Container, Wrapper } from './styles';

const Layout = () => {
  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <MenuBar />

          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/main" element={<Main />} />
          </Routes>

          <Sidebar />
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
