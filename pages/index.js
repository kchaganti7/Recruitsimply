import Head from 'next/head'
import Domain from './Domain'
import Login from './Login'
import { useAuth } from '../context/AuthContext'


export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
      <Head>
        <title>RecruitSimply</title>
        <meta name="description" content="One-stop solution for recruiting" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <Domain/>}
    </div>
  )
}
