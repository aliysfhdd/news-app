import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <button aria-label="LINE TODAY" className="btn btn__logo">
                    <img src="https://static-today.line-scdn.net/dist/b0fcfce7/static/img/brand-logo-rectangle-today-solid.svg" alt="LINE TODAY"/>
                </button>
            </Link>

            <Link to='/bookmark'>
                <button className="btn btn__bookmark">
                    <span>Bookmark</span>
                </button>
            </Link>

        </header>
    );
}
