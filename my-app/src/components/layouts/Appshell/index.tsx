import Navbar from "../navbar";
import { useRouter } from "next/router";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppshellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            {children}
        </main>
    );
};

export default AppShell;