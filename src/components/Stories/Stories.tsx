import useStoryContext from 'context/StoryContext';
import { Story } from './Story';

export function Stories() {
  const { loading, stories } = useStoryContext();

  console.log(stories);
  return (
    <div>
      {loading ? (
        'loading stories...'
      ) : (
        <>
          {stories?.map((story) => (
            <Story key={story.id} {...story} />
          ))}
        </>
      )}
    </div>
  );
}
