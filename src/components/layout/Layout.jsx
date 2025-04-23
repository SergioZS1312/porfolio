import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;