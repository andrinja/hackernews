import { FC, ReactNode } from 'react';
import { StyledContentLayout } from './ContentLayout.style';

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return <StyledContentLayout>{children}</StyledContentLayout>;
};
