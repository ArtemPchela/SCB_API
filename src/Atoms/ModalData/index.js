import React from 'react';
import styles from './style.module.scss';
import Table from '../Table/index';

export default function ModalData({data, closeHandler, queryState}) {

    const dataForModal = {
        "columns":
            [
                {
                    "code": "Bakgrund",
                    "text": "variabel",
                    "type": "d"
                },
                {
                    "code": "Tid",
                    "text": "år",
                    "type": "t"
                },
                {
                    "code": "JO1901BP",
                    "text": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser",
                    "type": "c"
                }
            ],
        "comments": [],
        "data": [
            {
                "key": ["14510", "1974"],
                "values": ["1059"]
            }
        ],
        "metadata":
            [
                {
                    "infofile": "JO1901",
                    "updated": "2012-04-04T07:25:00Z",
                    "label": "Jordbrukets produktionsvärde, kostnader och nettoöverskott till baspriser efter variabel, år och tabellinnehåll",
                    "source": "Jordbruksverket"
                }
            ]
    }

    console.log(data.columns)
    const query = {
        "query": [
            {
                "code": "Region",
                "selection": {
                    "filter": "item",
                    "values": [
                        "00",
                        "01"
                    ]
                }
            },
            {
                "code": "UtbildningsNiva",
                "selection": {
                    "filter": "item",
                    "values": [
                        "TOTALT",
                        "21"
                    ]
                }
            },
            {
                "code": "Kon",
                "selection": {
                    "filter": "item",
                    "values": [
                        "010",
                        "020"
                    ]
                }
            },
            {
                "code": "Alder",
                "selection": {
                    "filter": "item",
                    "values": [
                        "30",
                        "31"
                    ]
                }
            },
            {
                "code": "ContentsCode",
                "selection": {
                    "filter": "item",
                    "values": [
                        "000002FE",
                        "000002F6"
                    ]
                }
            },
            {
                "code": "Tid",
                "selection": {
                    "filter": "item",
                    "values": [
                        "2014-2018",
                        "2015-2019"
                    ]
                }
            }
        ],
        "response": {
            "format": "json"
        }
    }

    const dataObject = {
        header: [{}, [{title: "M", subtitle: [2014, 2015]}, {title: "A", subtitle: [2014, 2015]}]]
    }

    const header = [
        {subtitles: [""], title: ""}
    ]

    const body = []

    const titles = data.columns.filter((element) => {
        return element.type === "c"
    })

    const subtitles = data.columns.find((element) => {
        return element.type === "t"
    })

    const rowsTitles = data.columns.filter((element) => {
        return element.type === "d"
    })

    const subtitlesValues = queryState[subtitles.code] || [""];

    const testRow = subtitlesValues.map((element, index) => {
        return data.data[index]
    })

    const dataForRows = subtitlesValues.length;
    let row = []
    const titlesLength = rowsTitles.length - 1;
// headers
    titles.forEach((title) => {
        const column = {title: title.text, subtitles: []}
        subtitlesValues.forEach((subtitle) => {
            column.subtitles.push(subtitle.value)
        })
        header.push(column)
    })
    console.log(subtitlesValues, "subtitlesValues")

    data.data.forEach((dataElement, dataIndex) => {
        if (!data.data[dataIndex - 1]) {
            Array(titlesLength).fill(null).forEach((element, index) => {
                const titleKey = dataElement.key[index];
                const titleObject = queryState[rowsTitles[index].code].find(query => {
                    return query.value === titleKey
                })
                row.push(titleObject.label)
                for (let i = 0; i < subtitlesValues.length * titles.length; i++) {
                    row.push("")
                }
                body.push(row)
                row = []
            })
        }
        if (data.data[dataIndex - 1]) {
            const previousObject = data.data[dataIndex - 1];
            const previousKeys = previousObject.key;
            const currentKeys = dataElement.key;
            const notMuchKeys = []
            currentKeys.forEach((element, index) => {
                if (index < titlesLength && element !== previousKeys[index]) {
                    notMuchKeys.push(index)
                }
            })

            notMuchKeys.forEach((index) => {
                const titleKey = dataElement.key[index];
                const titleObject = queryState[rowsTitles[index].code].find(query => {
                    return query.value === titleKey
                })
                row.push(titleObject.label)
                for (let i = 0; i < subtitlesValues.length * titles.length; i++) {
                    row.push("")
                }
                body.push(row)
                row = []
            })
        }

        const isRowReady = (dataIndex + 1) % subtitlesValues.length === 0;
        dataElement.values.forEach((element, index) => {
            const number = (dataIndex + 1) % subtitlesValues.length;
            const celIndex = subtitlesValues.length * index + (subtitlesValues.length - number);
            // data[0] subtitles[3]
            console.log(index, subtitlesValues.length, "index, subtitlesValues.length")
            row[celIndex] = element
            console.log(celIndex, "celIndex")
            console.log(row, "ROW")
        })

        if (isRowReady) {
            const titleKey = dataElement.key[rowsTitles.length - 1]
            const titleObject = queryState[rowsTitles[rowsTitles.length - 1].code].find(query => {
                console.log(query, titleKey, "QUERY AND TITLEKEY")
                return query.value === titleKey
            })
            console.log(titleObject, "TITLE ODJECT")
            row[0] = titleObject.label
            console.log(row, "ROW TWO")
            body.push(row)
            row = []
        }
    })


    console.log(body, "BODY")
    console.log(testRow, "TESTROW")

    console.log(header, "header")
    return (
        <div>
            <div className={`${styles.modal_styles}`}>
                {header.map((headerElement) => {
                    return (
                        <div>
                        {headerElement.title}
                        {headerElement.subtitles.map((subtitle) => {
                            return (
                                <div>
                                    {subtitle}
                                </div>
                            )
                        })}
                        </div>)
                })
                }

                {/*<div>{JSON.stringify(data)}</div>*/}
                {/*<p>{data.columns.text}</p>*/}
                {/*<p>{data.data.value}</p>*/}
                {/*<p>{data.metadata.update}</p>*/}
                {/*<Table/>*/}
                <button
                    onClick={closeHandler}
                    className={`${styles.modal_button}`}
                >
                    close
                </button>
            </div>
        </div>
    )
}


const t = {
    "Region": [{"value": "03", "label": "Uppsala län"}],
    "Kon": [{"value": "1+2", "label": "män och kvinnor"}],
    "Bakgrund": [{"value": "20-64p", "label": "andel 20-64 år, procent"}],
    "ContentsCode": [{"value": "0000017A", "label": "Utländsk bakgrund"}],
    "Tid": [{"value": "1997", "label": "1997"}]
}
