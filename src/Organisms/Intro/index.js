import React from "react";
import styles from "./style.module.scss";
import odling from "./images/odling.png";
import { NavLink } from "react-router-dom";
import statisticsList from '../Intro/statisticsList.json';
import linksList from './lists.json';
// import InputsFields from "../../Atoms/InputsFields";
/*<InputsFields />*/

export default function Intro() {
    return (
        <div className={`${styles.intro}`}>
            <div className={`${styles.intro_container}`}>
                <div className={`row no-gutters ${styles.intro_first}`}>
                    <div className={`col-12 col-md-4 col-sm-6 col-xl-6 order-1 ${styles.intro_first_title}`}>
                        <h1>Statistics Sweden provides society with useful and trusted statistics</h1>
                    </div>
                    <div className={`col-12 col-md-4 col-sm-6 col-xl-5 order-2 ${styles.intro_first_shema}`}>
                        <img src={odling} alt=""/>
                    </div>
                    <div
                        className={`col-12 col-md-4 col-sm-6 col-xl-1 d-flex align-items-end order-3 ${styles.intro_first_link}`}>
                        <a href="">
                                <span>
                                    Organic cereal production in tonnes
                                </span>
                        </a>
                    </div>
                </div>
                <div className={`row no-gutters ${styles.intro_second}`}>
                    <div className={`col-12 ${styles.intro_second_statistics}`}>
                        {statisticsList.map(stata =>
                            <NavLink to={stata.href}
                                     key={stata.title}
                                     url={stata.href}
                                     activeClassName={`${styles.second_statistics_links}`}
                            >
                                {stata.title}
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className={`row no-gutters d-flex ${styles.intro_third}`}>
                    <div className={`${styles.intro_third_title}`}>
                        <h3>
                            Statistical news, published weekdays at 09.30
                        </h3>
                    </div>
                    <ul className={`${styles.intro_third_lists}`}>
                        {linksList.map((element, id) =>
                            <li className={`d-flex col-12 col-lg-6 align-items-center ${styles.intro_third_lists_list}`} key={id}>
                                <div className={`${styles.intro_third_lists_list_date}`}>
                                    <div className={`${styles.intro_third_lists_list_date_number}`}>{element.date}</div>
                                    <div className={`${styles.intro_third_lists_list_date_month}`}>{element.month}</div>
                                </div>
                                <div className={`${styles.description}`}>
                                    <a className={`${styles.description_link}`} href={element.href}><span>{element.title}</span></a>
                                    <p className={`${styles.description_text}`}>{element.description}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
