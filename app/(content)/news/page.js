import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div id='news'>
      <h1>News Articles</h1>
      <ul className='news-list'>
        <NewsList news={news} />
      </ul>
    </div>
  );
}
