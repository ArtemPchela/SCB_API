import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Link, NavLink } from 'react-router-dom';
import NavMobile from "../../Atoms/NavMobile";
import DropdownMenu from "../../Atoms/DropdownMenu";
import links from './links.json';

export default function Header() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, [])

    const checkScroll = () => {
        window.pageYOffset > 100 ? setScroll(true) : setScroll(false);
    }

    return (
        <header className={`${styles.header} ${scroll ? styles.header_visible : ''}`}>

            {/*-----Nav Links Mobile-----*/}
            <NavMobile linksNav={links}/>
            {/*-----Nav Links Mobile-----*/}

            <div className={`${styles.header_nav}`}>
                {links.map(element =>
                    <NavLink className={`${styles.header_nav_style}`}
                             to={element.href}
                             key={element.href}
                             url={element.href}
                             activeClassName={`${styles.header_nav_style_select}`}
                    >
                        {element.title}
                    </NavLink>
                )}
            </div>

            <div className={`${styles.header_logo}`}>
                <Link className={`${styles.header_logo_style}`}
                      to={"/"}
                >
                    <h3>
                        <span className={`${styles.header_logo_style_first}`}>S</span>
                        <span className={`${styles.header_logo_style_second}`}>C</span>
                        <span className={`${styles.header_logo_style_third}`}>B</span>
                    </h3>
                </Link>
            </div>

            <div className={`${styles.header_navRight}`}>

                {/*-----Drop Down Menu Header-----*/}
                <DropdownMenu className={`${styles.navMobile}`}/>
                {/*-----Drop Down Menu Header-----*/}

                {/*{linksRight.map(element =>*/}
                {/*    <Link className={`${styles.header_navRight_style}`}*/}
                {/*          to={element.href}*/}
                {/*          key={element.href}*/}
                {/*          url={element.href}*/}
                {/*    >*/}
                {/*        <img src={element.url} alt="login logo"/>*/}
                {/*    </Link>*/}
                {/*)}*/}
            </div>
        </header>
    )
}
