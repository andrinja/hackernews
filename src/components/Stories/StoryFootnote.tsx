import { Author } from 'context/StoryContext';
import { formatDistance } from 'date-fns';
import { StyledStoryFootnote, StyledAuthor } from './Story.style';

type Props = {
  author?: Author;
  publishedAt: number;
};

export function StoryFootnote({ author, publishedAt }: Props) {
  let timeAgoLabel = formatDistance(publishedAt * 1000, new Date());
  timeAgoLabel = timeAgoLabel.slice(0, 1).toUpperCase() + timeAgoLabel.slice(1);

  return (
    <StyledStoryFootnote>
      <span>{timeAgoLabel}</span>
      {author && (
        <span>
          Created by <StyledAuthor>{author.id}</StyledAuthor> | Karma{' '}
          {author.karma}
        </span>
      )}
    </StyledStoryFootnote>
  );
}
