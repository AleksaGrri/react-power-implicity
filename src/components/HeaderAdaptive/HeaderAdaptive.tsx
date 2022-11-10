import "./HeaderAdaptive.scss";

export const HeaderAdaptive = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="hamburger-menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="hamburger-menu__box">
                <li><a className="hamburger-menu__item" href="/">Features</a></li>
                <li><a className="hamburger-menu__item" href="/">Partners</a></li>
                <li><a className="hamburger-menu__item" href="/">Stories</a></li>
            </ul>
        </div>
    )
}