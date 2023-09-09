import { Header, Footer } from '@components'

const Profile = {
  name: 'M Hibatillah Hasanin',
  email: 'hibatillahhabib@gmail.com',
  profile: 'student'
}

export default function Home() {
  return (
    <div className='px-5 py-6 space-y-5'>
      <Header user={Profile} />
      <main className="h-screen flex justify-center items-center"></main>
      <Footer />
    </div>
  );
}
