import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/Status-label';
import './globals.css';
export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
