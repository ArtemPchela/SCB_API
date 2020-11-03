import React from "react";
import styles from "./style.module.scss";

export default function About({header, body}) {
    console.log(header, "HEADER");
    console.log(body, "BODY");
    return (
        <div className={`${styles.about}`}>
            <div className={`${styles.about_wrapper}`}>
                <div className={`${styles.table}`}>
                    <div className={`${styles.table_wrapper}`}>
                        <table className={`${styles.table_class}`}>
                            <thead>
                            <tr>
                                <th className={`${styles.table_title}`} colSpan={0}>Take your data</th>
                            </tr>
                            <tr>
                                <td className={`${styles.table_header_first}`} colSpan={1} rowSpan={2}> </td>
                                <th className={`${styles.table_header_first}`} colSpan={2}>
                                    Preliminärt, 2008M01=100
                                </th>
                                <th className={`${styles.table_header_first}`} colSpan={2}>
                                    Definitivt, 2008M01=100
                                </th>
                            </tr>
                            <tr>
                                <th className={`${styles.table_header_last}`} colSpan={1}>2020M07</th>
                                <th className={`${styles.table_header_last}`} colSpan={1}>2020M07</th>
                                <th className={`${styles.table_header_last}`} colSpan={1}>2020M07</th>
                                <th className={`${styles.table_header_last}`} colSpan={1}>2020M07</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className={`${styles.table_header_left}`}
                                    rowSpan={1}
                                >
                                    B-S exkl.O samtliga näringsgrenar
                                </th>
                                <td className={`${styles.table_data_filled}`}>128,8</td>
                                <td className={`${styles.table_data_filled}`}>127,4</td>
                                <td className={`${styles.table_data_filled}`}>-</td>
                                <td className={`${styles.table_data_filled}`}>-</td>
                            </tr>
                            <tr>
                                <th className={`${styles.table_header_left}`}
                                    rowSpan={1}
                                >
                                    B-E tillverknings- och utvinningsindustri; företag inom energi
                                </th>
                                <td className={`${styles.table_data_filled}`}>130.7</td>
                                <td className={`${styles.table_data_filled}`}>131.5</td>
                                <td className={`${styles.table_data_filled}`}>..</td>
                                <td className={`${styles.table_data_filled}`}>..</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
