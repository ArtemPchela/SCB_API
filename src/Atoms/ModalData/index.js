import React from 'react';
import styles from './style.module.scss';

export default function ModalData({data, closeHandler, queryState, categoryData}) {

    console.log("categoryData", categoryData);

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

    console.log("data.columns", data.columns);

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

    const t = {
        "Region": [{"value": "03", "label": "Uppsala län"}],
        "Kon": [{"value": "1+2", "label": "män och kvinnor"}],
        "Bakgrund": [{"value": "20-64p", "label": "andel 20-64 år, procent"}],
        "ContentsCode": [{"value": "0000017A", "label": "Utländsk bakgrund"}],
        "Tid": [{"value": "1997", "label": "1997"}]
        //     variables: Array(6)
        //     0:
        //     code: "Region"
        // elimination: true
        // text: "region"
        // valueTexts: (22) ["Riket", "Stockholms län", "Uppsala län", "Södermanlands län", "Östergötlands län", "Jönköpings län", "Kronobergs län", "Kalmar län", "Gotlands län", "Blekinge län", "Skåne län", "Hallands län", "Västra Götalands län", "Värmlands län", "Örebro län", "Västmanlands län", "Dalarnas län", "Gävleborgs län", "Västernorrlands län", "Jämtlands län", "Västerbottens län", "Norrbottens län"]
        // values: (22) [
    }

    // const dataObject = {
    //     header: [{}, [{title: "M", subtitle: [2014, 2015]}, {title: "A", subtitle: [2014, 2015]}]]
    // }

    console.log("QUERY", JSON.stringify(query))

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

    // const dataForRows = subtitlesValues.length;
    let row = []
    const titlesLength = rowsTitles.length - 1;


    console.log("subtitlesValues", subtitlesValues)

// headers
    titles.forEach((title) => {
        const column = {title: title.text, subtitles: []}
        subtitlesValues.forEach((subtitle) => {
            column.subtitles.push(subtitle.value)
        })
        header.push(column)
    })

    data.data.forEach((dataElement, dataIndex) => {
        if (!data.data[dataIndex - 1]) {
            Array(titlesLength).fill(null).forEach((element, index) => {
                const titleKey = dataElement.key[index];
                console.log("titleKey", titleKey)
                const titleObject = (categoryData.variables.find((element) => {
                    return (
                        element.code === rowsTitles[index].code
                    )
                }))
                console.log("titleObject", titleObject)
                const titleNumber = titleObject.values.findIndex((element) => {

                    return (
                        element === titleKey
                    )
                })
                console.log("titleNumber", titleNumber)
                const label = titleObject.valueTexts[titleNumber]
                console.log("label", label)
                row.push(label)
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
                console.log("notMUCkeys", notMuchKeys)
                console.log("DATA ELEMENT", dataElement)
                const titleKey = dataElement.key[index];
                console.log("TITLE KEY 2", titleKey)
                const titleObject = (categoryData.variables.find((element) => {
                    console.log("rowsTitles", rowsTitles)
                    console.log("rowsTitles INDEX", rowsTitles[index])
                    console.log("rowsTitles INDEX CODE", rowsTitles[index].code)

                    return (
                        element.code === rowsTitles[index].code

                    )
                }))
                console.log("TITLE OBJECT", titleObject)
                const titleNumber = titleObject.values.findIndex((element) => {

                    return (
                        element === titleKey
                    )
                })
                const label = titleObject.valueTexts[titleNumber]
                row.push(label)
                for (let i = 0; i < subtitlesValues.length * titles.length; i++) {
                    row.push("")
                }
                body.push(row)
                row = []
            })
            // variables: Array(6)
            // 0:
            // code: "Region"
            // elimination: true
            // text: "region"
            // valueTexts: (22) ["Riket", "Stockholms län", "Uppsala län", "Södermanlands län", "Östergötlands län", "Jönköpings län", "Kronobergs län", "Kalmar län", "Gotlands län", "Blekinge län", "Skåne län", "Hallands län", "Västra Götalands län", "Värmlands län", "Örebro län", "Västmanlands län", "Dalarnas län", "Gävleborgs län", "Västernorrlands län", "Jämtlands län", "Västerbottens län", "Norrbottens län"]
            // values: (22) [
        }

        const isRowReady = (dataIndex + 1) % subtitlesValues.length === 0;
        dataElement.values.forEach((element, index) => {
            const number = (dataIndex + 1) % subtitlesValues.length;
            const celIndex = subtitlesValues.length * index + (subtitlesValues.length - number);
            // data[0] subtitles[3]
            row[celIndex] = element
        })

        if (isRowReady) {
            const titleKey = dataElement.key[rowsTitles.length - 1]
            console.log("TITLE KEY", titleKey)
            const titleObject = (categoryData.variables.find((element) => {
                return (
                    element.code === rowsTitles[rowsTitles.length - 1].code
                )
            }))
            const titleNumber = titleObject.values.findIndex((element) => {
                return (
                    element === titleKey
                )
            })
            const label = titleObject.valueTexts[titleNumber]
            row[0] = label
            body.push(row)
            row = []
        }
    })

    console.log("BODY", body)
    console.log("TESTROW", testRow)

    console.log("header", header)

    return (
        <div>
            <div className={`${styles.table}`}>
                <div className={`${styles.table_wrapper}`}>
                    <table className={`${styles.table_class}`}>
                        <thead>
                        <tr>
                            {header.map((element) => {
                                return (
                                    <th className={`${styles.table_header_first}`}
                                        colSpan={element.subtitles.length}
                                    >
                                        {element.title}
                                    </th>
                                )
                            })}
                        </tr>
                        <tr>
                            {header.reduce((acc, element) => {
                                const subtitles = element.subtitles;
                                return [...acc, ...subtitles]
                            }, []).map((element) => {
                                return (<th className={`${styles.table_header_last}`}>
                                    {element}
                                </th>)
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {body.map((row) => {
                            return (
                                <tr>
                                    {row.map((text) => {
                                        return (
                                            <td className={`${styles.table_data_filled}`}>
                                                {text}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>
            </div>

            {/*{header.map((headerElement) => {*/}
            {/*    return (*/}
            {/*        <div>*/}
            {/*            {headerElement.title}*/}
            {/*            {headerElement.subtitles.map((subtitle) => {*/}
            {/*                return (*/}
            {/*                    <div>*/}
            {/*                        {subtitle}*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </div>)*/}
            {/*})*/}
            {/*}*/}

            <button
                onClick={closeHandler}
                className={`${styles.modal_button}`}
            >
                close
            </button>
        </div>
    )
}
