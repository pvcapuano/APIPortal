import styled from "styled-components";

export const SidebarMenu = styled.div`
  border-right: 1px solid var(--twitter-background);
  flex: 0.3;
  min-width: 250px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TwitterIconBird = styled.div`
  color: var(--twitter-color);
  font-size: 30px !important;
  margin: 0 20px;
`;
export const TweetButton = styled.div`
  display: flex;
  background-color: var(--twitter-color) !important;
  border: none !important;
  color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  border-radius: 30px !important;
  height: 50px !important;
  margin-top: 20px !important;
  border-style: none;
`;
