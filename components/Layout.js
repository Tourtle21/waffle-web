import Nav from './Nav'
import Footer from './Footer';
import Head from 'next/head';
const Layout = ({ children }) => {
    return (
        <div className="app">
            <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Custom Web Design | Web Design | Web Development | Branding</title>
      <link rel="icon" type="image/x-icon" href="/images/logo.png"></link>
      </Head>
            <Nav />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;