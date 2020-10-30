import React from 'react';
import styles from './style.module.scss';
import find1 from './StatisticsJSON/find1.json';
import follow from './StatisticsJSON/follow.json';
import fresh from './StatisticsJSON/fresh.json';

export default function Footer() {
    return (
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`row no-gutters ${styles.footer_sections}`}>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.footer_sections_section}`}>
                            <h3>Fresh Statistics</h3>
                            <ul>
                                {fresh.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.path}>
                                                {el.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.footer_sections_section}`}>
                            <h3>Find Statistics</h3>
                            <ul>
                                {find1.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.path}>
                                                {el.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.footer_sections_section}`}>
                            <h3>Follow Statistics</h3>
                            <ul>
                                {follow.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.path}>
                                                {el.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex align-items-center justify-content-center mb-4 mt-4">
                        &copy;{new Date().getFullYear()} Artsiom
                    </div>
                </div>
            </div>
        </div>
    )
}
