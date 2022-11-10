import { ReactComponent as LogoIcon } from '../../assets/icon/apple-logo.svg'
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header__logo-link">
                <LogoIcon />
            </a>
            <nav className="header__menu">
                <a href="/" className="header__menu-link">Features</a>
                <a href="/" className="header__menu-link">Partners</a>
                <a href="/" className="header__menu-link">Stories</a>
            </nav>
            <button className="header__button">Download for free</button>
        </header>
    )
}