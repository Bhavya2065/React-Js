import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Layout

// Note: You can do this all in App.jsx file and use in main.jsx file

// Use of Outlet: Outlet fix the Ui component for example if we navigate to home to about but without changing the header and footer component then we use Outlet 
// Example: In your Layout, the Header and Footer stay the same.
// The middle part (<Outlet />) changes based on which page you open.