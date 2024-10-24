import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/news-list';

export default function NewsPage() {
  return (
    <div id='news'>
      <h1>News Articles</h1>
      <ul className='news-list'>
        <NewsList news={DUMMY_NEWS} />
      </ul>
    </div>
  );
}
