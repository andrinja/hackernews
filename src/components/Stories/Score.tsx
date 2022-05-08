import {
  StyledScore,
  StyledScoreButton,
  StyledScoreValue,
} from './Story.style';

type Props = {
  score: number;
};

export function Score({ score }: Props) {
  return (
    <StyledScore>
      <StyledScoreButton>
        <svg
          width='22'
          height='14'
          viewBox='0 0 22 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11 0L21.3923 13.7647H0.607696L11 0Z' fill='#F28F3B' />
        </svg>
      </StyledScoreButton>
      <StyledScoreValue>{score}</StyledScoreValue>
    </StyledScore>
  );
}
