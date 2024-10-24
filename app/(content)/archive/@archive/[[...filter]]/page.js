import NewsList from '@/components/news-list';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const year = filter?.[0];
  const month = filter?.[1];

  let links = getAvailableNewsYears();
  let news;

  if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  }

  let newsContent = <p>No news found for this selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (
    (year && !getAvailableNewsYears().includes(Number(year))) ||
    (month && !getAvailableNewsMonths(year).includes(Number(month)))
  ) {
    throw new Error('Invalid filter.');
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map(link => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
