import Nav from './Nav'
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Nav />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;