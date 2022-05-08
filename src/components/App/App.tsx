import { GlobalStyle } from './App.style';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet';
import { ContentLayout } from 'components/ContentLayout';
import { SortButtons } from 'components/SortButtons';
import { StoryContextProvider } from 'context/StoryContext';
import { Stories } from 'components/Stories';

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hacker News</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <ContentLayout>
        <StoryContextProvider>
          <SortButtons />
          <Stories />
        </StoryContextProvider>
      </ContentLayout>
    </>
  );
}
