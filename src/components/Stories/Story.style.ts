import styled from 'styled-components';
import { device, theme } from 'theme';

export const StyledStoryContainer = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  text-decoration: none;
`;

export const StyledScore = styled.div`
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledScoreButton = styled.button`
  border: none;
  background: none;
`;

export const StyledScoreValue = styled.p`
  color: ${theme.colors.text.secondary};
`;

export const StyledStory = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  width: 100%;
  word-break: break-all;

  ${device.sm} {
    height: 200px;
    display: flex;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  ${device.sm} {
    flex-shrink: 0;
    width: 200px;
    height: 100%;
  }
`;

export const StyledTitle = styled.h2`
  margin-top: 0.25rem;
  flex-grow: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${theme.colors.text.primary};
`;

export const StyledLink = styled.p`
  color: ${theme.colors.text.secondary};
  margin-top: 0;
  margin-bottom: auto;
`;

export const StyledStoryContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  ${device.sm} {
    flex-grow: 1;
  }
`;

export const StyledStoryFootnote = styled.div`
  color: ${theme.colors.text.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 300;

  ${device.sm} {
    margin-top: auto;
    flex-direction: row;
    width: 100%;
  }
`;

export const StyledAuthor = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 400;
`;
