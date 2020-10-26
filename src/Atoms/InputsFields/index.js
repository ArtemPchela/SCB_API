import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Select from 'react-select';

export default function InputsFields({element}) {

    const options = [
        {}
    ];

    const newOptions = element ? element.values.map((value, index) => {
        return {
            value: value,
            label: element.valueTexts[index]
        }
    }) : options;

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    function logChange(value) {
        console.log("Selected: " + value);
    }

    // const handleChange = event => {
    //     setSearch(event.target.value);
    // }

    // useEffect(() => {
    //     const result = newOptions.filter(i =>
    //         i.toLowerCase().includes(search)
    //     )
    //     setSearchResult(result)
    // }, [search])

    return (
        <div className={`${styles.inputs}`}>
            <div className="col-12 col-md-6 col-sm-6 col-xl-3">
                <div className={`${styles.inputs_wrapper}`}>
                    <div className={`${styles.inputs_title}`}>
                        {element.text}
                    </div>
                    <div className={`${styles.inputs_form}`}>

                    </div>
                    <form action="">
                        <Select
                            isMulti
                            name="newOptions"
                            options={newOptions}
                            className={`${styles.select}`}
                            classNamePrefix="select"
                            onChange={logChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
