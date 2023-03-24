import Head from 'next/head'
import LoginScreen from './LoginScreen'

export default function Home() {
  return (
  <>
  <Head>
  <title>GaBus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
  </Head>
  <main>
      <LoginScreen/>
  </main>
  </>
  )
}
