import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Nav from '../../components/nav'

const Home = () => {
  const router = useRouter();


  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>{router.query.id}</h1>
      <Nav />
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, at cum debitis dignissimos, doloribus, explicabo iusto mollitia odit ratione reiciendis repellendus totam voluptate voluptatibus. Fuga ipsum non numquam sequi tempora.
    </div>
  )
}

export default Home
