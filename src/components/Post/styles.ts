import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--white);

  display: flex;
  align-items: center;

  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--gray);
    }
  }
`;

export const Info = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const TweetBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid var(--twitter-background);
  padding-right: 10px;

  > form {
    display: flex;
    flex-direction: column;
  }
`;

export const TweetInput = styled.div`
  padding: 20px;
  display: flex;

  input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
  }
`;

export const ImageInput = styled.input`
  border: none;
  padding: 10px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

export const TweetButton = styled.button`
  background-color: var(--twitter);
  border: none;
  color: var(--primary);
  font-weight: 700;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
`;
