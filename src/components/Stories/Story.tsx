import { Story as StoryInterface } from 'context/StoryContext';

import { Score } from './Score';
import {
  StyledImage,
  StyledStory,
  StyledStoryContent,
  StyledStoryContainer,
  StyledTitle,
  StyledLink,
} from './Story.style';
import { StoryFootnote } from './StoryFootnote';

type Props = Pick<
  StoryInterface,
  'author' | 'score' | 'time' | 'title' | 'url'
>;

function getRandomImageTag() {
  const tags = [
    'movie',
    'game',
    'album',
    'book',
    'face',
    'fashion',
    'shoes',
    'watch',
    'furniture',
  ];

  return tags[Math.floor(Math.random() * tags.length)];
}

export function Story({ author, title, url, score, time }: Props) {
  return (
    <StyledStoryContainer href={url} target='_blank'>
      <Score score={score} />
      <StyledStory>
        <StyledImage
          src={`https://api.lorem.space/image/${getRandomImageTag()}?w=150&h=220`}
          alt={`for ${title}`}
        />
        <StyledStoryContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledLink>{url}</StyledLink>
          <StoryFootnote author={author} publishedAt={time} />
        </StyledStoryContent>
      </StyledStory>
    </StyledStoryContainer>
  );
}
