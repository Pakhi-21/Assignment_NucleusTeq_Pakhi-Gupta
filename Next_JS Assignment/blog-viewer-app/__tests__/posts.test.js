
import { getStaticProps } from '../pages/posts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'Test', content: 'Content' }]),
  })
);

test('getStaticProps fetches posts', async () => {
  const { props } = await getStaticProps();
  expect(props.posts).toHaveLength(1);
  expect(props.posts[0].title).toBe('Test');
});
