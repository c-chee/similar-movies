import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ children }) {
    return (
        <div className = 'main-container'>
        <Navbar />
        <main className = 'main-content'>{children}</main>
        <Footer />
        </div>
    );
}
