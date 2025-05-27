import { Link } from 'react-router-dom';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { useState } from 'react';
import { BookResultListComponent } from './book-result-list/book-result-list.component';

export default function DashboardPage() {
  const lordOfTheRingsDummy = '9780261102439';
  const [searchItem, setSearchItem] = useState('');

  function search(searchItem: string) {
    setSearchItem(searchItem);
  }

  return (
    <main className="flex justify-center">
      <div className="container min-h-svh">
        <h1 className="text-3xl font-bold underline">Dashboard page</h1>
        <SearchBarComponent searchBook={search}></SearchBarComponent>
        <BookResultListComponent searchItem={searchItem} />
        <Link to={`book/${lordOfTheRingsDummy}`}>Lord of the rings</Link>
      </div>
    </main>
  );
}
