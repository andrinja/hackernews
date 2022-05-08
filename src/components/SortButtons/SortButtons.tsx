import { useState } from 'react';
import { SortButton } from './SortButton';
import { StyledSortButtons } from './SortButton.style';

export enum Tag {
  TOP = 'top',
  NEW = 'new',
  FAVORITES = 'favorites',
}

export function SortButtons() {
  const [activeTag, setActiveTag] = useState(Tag.TOP);

  return (
    <StyledSortButtons>
      <SortButton
        tag={Tag.TOP}
        activeTag={activeTag}
        handleSetActiveTag={setActiveTag}
      />
      <SortButton
        tag={Tag.NEW}
        activeTag={activeTag}
        handleSetActiveTag={setActiveTag}
      />
      <SortButton
        tag={Tag.FAVORITES}
        activeTag={activeTag}
        handleSetActiveTag={setActiveTag}
      />
    </StyledSortButtons>
  );
}
