import { Header } from '../components/header';
import { AttendeeList } from '../components/attendee-list';

export function App() {
  return (
    <div className='max-w-[1216px] mx-auto'>
      <Header />
      <AttendeeList />
    </div>
  )
}
