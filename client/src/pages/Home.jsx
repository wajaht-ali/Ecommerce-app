/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout.jsx';
import { useAuth } from '../context/Auth.jsx';

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout className="border-2 border-black">
      <h1>Home Page</h1>
      <pre>{JSON.stringify(
        auth,
        null
      )}</pre>
    </Layout>
  )
}

export default Home