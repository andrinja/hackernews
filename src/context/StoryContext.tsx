import {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export interface Author {
  karma: number;
  id: string;
  created: number;
  submitted: number[];
}

export interface Story {
  by: string;
  author?: Author;
  descendants: number;
  id: number;
  kids: string[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

type ContextValue = {
  stories: Story[] | null;
  loading: boolean;
  error: string | null;
};

const StoryContext = createContext<ContextValue | null>(null!);

export const StoryContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<Story[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopStories(): Promise<void> {
      try {
        const storyIdsResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$priority"&limitToFirst=10`
        );
        const storyIds: number[] = await storyIdsResponse.json();
        const storyResponses = await Promise.all(
          storyIds.map((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          )
        );

        let stories: Story[] = await Promise.all(
          storyResponses.map((response) => response.json())
        );

        const authors: Author[] = await Promise.all(
          (
            await Promise.all(
              stories.map((story) =>
                fetch(
                  `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
                )
              )
            )
          ).map((response) => response.json())
        );

        stories = stories.map((story) => {
          return {
            ...story,
            author: authors.find((author) => author.id === story.by),
          };
        });

        setStories(stories);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTopStories();
  }, []);
  console.log(stories);
  return (
    <StoryContext.Provider value={{ stories, loading, error }}>
      {children}
    </StoryContext.Provider>
  );
};

export default function useStoryContext() {
  const context = useContext(StoryContext);

  if (!context) {
    throw new Error('useStoryContext must be used within a StoriesContext');
  }
  return context;
}
