import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header />
            
            <div className="container mx-auto">
                {children}
            </div>
            
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    )
}