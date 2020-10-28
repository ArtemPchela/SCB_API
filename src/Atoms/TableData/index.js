import React from 'react';
import styles from './style.module.scss';

export default function ModalData({data, closeHandler, queryMock}) {

    const dataForModal = {
        "columns":
            [{"code": "Bakgrund", "text": "variabel", "type": "d"}, {
                "code": "Tid",
                "text": "år",
                "type": "t"
            },
                {
                    "code": "JO1901BP",
                    "text": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser",
                    "type": "c"
                }],
        "comments": [],
        "data": [{"key": ["14510", "1974"], "values": ["1059"]}],
        "metadata":
            [{
                "infofile": "JO1901",
                "updated": "2012-04-04T07:25:00Z",
                "label": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser efter variabel, år och tabellinnehåll",
                "source": "Jordbruksverket"
            }]
    }

    // let back = JSON.stringify(data);
    // let backToBack = JSON.parse(back)
    // console.log(back);

    return (
        <div>
            <div className={`${styles.modal_styles}`}>
                <div>{JSON.stringify(data)}</div>
                {/*{backToBack  && backToBack.map((element) => {*/}
                {/*    return (*/}
                {/*        <div>{element.text}</div>*/}
                {/*    )*/}
                {/*})}*/}
                {/*<div>{data.columns.text}</div>*/}
                {/*{console.log(back.columns.code[0].text)}*/}
                <button onClick={closeHandler}
                        className={`${styles.modal_button}`}
                >close
                </button>
            </div>
        </div>
    )
}
