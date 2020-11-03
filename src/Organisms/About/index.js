import React from "react";
import styles from "./style.module.scss";

export default function About() {
    return (
        <div className={`${styles.about}`}>
            <div className={`${styles.about_wrapper}`}>
                <h3 className={`${styles.about_wrapper_title}`}>
                    SCB Sweden Statistics database
                </h3>
                <p className={`${styles.about_wrapper_text}`}>An SCB site with a large resource can be used in
                    absolutely any sphere of defensiveness.
                    Good for novice businessmen and for those who have been in business for a long time.
                    It is easy to work with data and regulate business processes based on data.
                    Focus on the target audience by age and place of residence.
                    Or to understand how much demand or supply has grown in a particular area.
                </p>
                <p className={`${styles.about_wrapper_text}`}>
                    The site is also suitable for students,
                    it may be able to help with choosing a place of residence or navigate which industry or sphere is
                    the most productive.
                    And in the future, choose a profession for your liking.
                </p>
                <p className={`${styles.about_wrapper_last}`}>
                    Just be Happy!
                </p>
            </div>
        </div>
    )
}
