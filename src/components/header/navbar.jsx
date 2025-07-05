import SiteLogo from "./logo"
import NavLinks from "./navlinks"
import LoginRegister from "./login-register"

function NavBar() {
    return <nav>
        <SiteLogo />
        <NavLinks />
        <LoginRegister />
    </nav>
}

export default NavBar