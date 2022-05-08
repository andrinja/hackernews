import { StyledSortButton } from './SortButton.style';
import { Tag } from './SortButtons';

type Props = {
  tag: Tag;
  activeTag: Tag;
  handleSetActiveTag: (tag: Tag) => void;
};

export function SortButton({ activeTag, handleSetActiveTag, tag }: Props) {
  return (
    <StyledSortButton
      $isActive={activeTag === tag}
      onClick={() => handleSetActiveTag(tag)}
    >
      {tag}
    </StyledSortButton>
  );
}
