import { headers } from 'next/headers';
import './globals.css';

import AddCompanyButton from './components/AddCompanyButton';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
