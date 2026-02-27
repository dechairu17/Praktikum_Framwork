import Navbar from "../navbar";
import Footer from "../footer";
type AppshellProps = {
    children: React.ReactNode
}

const Appshell = ({children}: AppshellProps) => {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};

export default Appshell;