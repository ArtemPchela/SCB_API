import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

export default function ModalData({data, closeHandler}) {

    //   const dataForModal = {
    // {
    //     "columns"
    // :
    //     [{"code": "Bakgrund", "text": "variabel", "type": "d"}, {
    //         "code": "Tid",
    //         "text": "år",
    //         "type": "t"
    //     }, {
    //         "code": "JO1901BP",
    //         "text": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser",
    //         "type": "c"
    //     }], "comments"
    // :
    //     [], "data"
    // :
    //     [{"key": ["14510", "1974"], "values": ["1059"]}], "metadata"
    // :
    //     [{
    //         "infofile": "JO1901",
    //         "updated": "2012-04-04T07:25:00Z",
    //         "label": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser efter variabel, år och tabellinnehåll",
    //         "source": "Jordbruksverket"
    //     }]
    // }
    //   }


    return (
        <div>
            <div className={`${styles.modal_styles}`}>
                <div>{JSON.stringify(data)}</div>
                <button onClick={closeHandler}>close</button>
            </div>
        </div>
    )
}
