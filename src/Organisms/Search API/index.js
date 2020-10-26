import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Api from "../../services/api";
import InputsFields from "../../Atoms/InputsFields";

export default function SearchAPI() {

    const [activeElements, setActiveElements] = useState([true]);

    const onMouseEnter = (index) => {
        const elements = [...activeElements]
        elements[index] = true
        const elementsWidthHiddenInner = elements.map((element, elementIndex) => {
            return elementIndex > index ? false : element
        })
        setActiveElements(elementsWidthHiddenInner)
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     alert(`Select data: ${}`);
    // };

    const onMouseLeave = (index, e) => {
        if (!e.target || !e.relatedTarget || !e.currentTarget) {
            return false
        }
        // console.log(e.currentTarget)
        // console.log(e.target, e.relatedTarget, e.target.contains(e.relatedTarget), e.relatedTarget.contains(e.relatedTarget))
        if (e.target.contains(e.relatedTarget) || e.target === e.relatedTarget || e.currentTarget.contains(e.relatedTarget)) {
            return false
        }
        const elements = [...activeElements]
        elements[index] = false;
        const elementsWidthHiddenInner = elements.map((element, elementIndex) => {
            return elementIndex > index ? false : element
        })
        setActiveElements(elementsWidthHiddenInner)
    }


    const [categoryData, setCategoryData] = useState([null]);
    const [level, setLevel] = useState([""]);

    const concatId = (id, index) => {
        const levelsArrayNewProps = [...level];
        levelsArrayNewProps[index] = id

        setIdInLevel(index, id)
        const result = levelsArrayNewProps.filter(element => typeof element === "string");
        const resultOne = result.filter((element, idx) => idx <= index);
        const resultTwo = resultOne.map((element) => '/' + element);
        const resultThree = resultTwo.join("");
        return resultThree
    }

    const getData = (id, indexLevel, method) => {
        const url = concatId(id, indexLevel)
        Api.getCategoryInformation(url, method).then(result => {
            const categoryDataWithNewProps = [...categoryData];
            categoryDataWithNewProps[indexLevel] = result.data;
            const newCategoryData = categoryDataWithNewProps.map((element, dataIndex) => {
                if (dataIndex > indexLevel) return null;
                return element;
            })
            setCategoryData(newCategoryData);
            const newActiveElements = [...activeElements];
            newActiveElements[indexLevel] = true;
            setActiveElements(newActiveElements);
        })
    }

    const setIdInLevel = (index, id) => {
        const newLevelsWithNewProps = [...level];
        newLevelsWithNewProps[index] = id;
        setLevel(newLevelsWithNewProps)
    }

    useEffect(() => {
        getData("", 0)
    }, []);

    return (
        <div>
            <div className={`d-flex ${styles.search}`}>
                {categoryData.filter(Boolean).map((element, index) => index === 0

                    ? (<div key={index} className={`${styles.search_first}`}>
                        <ul>
                            {categoryData[0] ? categoryData[0].map(element =>
                                    <li onClick={() => getData(element.id, 1)}
                                        key={element.id}
                                        className={`${styles.search_header_title}`}
                                    >
                                        {element.text}
                                    </li>)
                                : <span className={`${styles.search_header_loading}`}>
                                    Loading ...
                                    </span>}
                        </ul>
                    </div>)

                    : (categoryData[index] && categoryData[index].title)
                        ? <div key={element.title}
                               className={`${styles.fixed}`}
                               style={activeElements[index] ? {
                                   transform: `translate(${index * 40}px)`,
                                   width: `calc(100% - ${(index) * 40 + 100}px)`
                               } : {
                                   left: `calc(100% - ${(categoryData.length - index) * 40}px)`,
                                   width: `calc(100% - ${(index) * 40 + 100}px)`
                               }}
                               onMouseOut={(e) => onMouseLeave(index, e)}
                               onMouseEnter={() => onMouseEnter(index)}
                        >
                            <div style={{fontSize: "20px", fontWeight: 600, alignItems: "center"}}>
                                {element.title}
                            </div>
                            <div>
                                <ul>
                                    {element.variables && element.variables.map((element, index) => {
                                        return (
                                            <div  key={index}>
                                                <InputsFields element={element}/>
                                            </div>
                                        )
                                    })}
                                </ul>
                                {/*------------submit button----------------------*/}
                                <button className={`${styles.inputs_searchButton}`}
                                    // onClick={handleSubmit}
                                >
                                    Get Data
                                </button>
                                {/*------------submit button----------------------*/}
                            </div>
                        </div>

                        : (<div key={index}
                                className={`${styles.search_secondHeader} ${styles.fixed}`}
                                style={activeElements[index] ? {
                                    transform: `translate(${index * 40}px)`,
                                    width: `calc(100% - ${(index) * 40 + 100}px)`
                                } : {
                                    left: `calc(100% - ${(categoryData.length - index) * 40}px)`,
                                    width: `calc(100% - ${(index) * 40 + 100}px)`
                                }}
                                onMouseOut={(e) => onMouseLeave(index, e)}
                                onMouseEnter={() => onMouseEnter(index)}
                        >
                            <ul>
                                {categoryData[index] ? categoryData[index].map(element => {
                                        return (
                                            element.type === "l" ?
                                                <li onClick={() => getData(element.id, index + 1)} key={element.id}
                                                    className={`${styles.search_secondHeader_one}`}
                                                >
                                                    {element.text}
                                                </li>
                                                : element.type === "t" ?
                                                <li onClick={() => getData(element.id, index + 1, "get")} key={element.text}
                                                    className={`${styles.search_secondHeader_two}`}
                                                >
                                                    {element.text}

                                                </li>
                                                : <p>{element.title}</p>)
                                    }
                                ) : ""}
                            </ul>
                        </div>)
                )}
            </div>
        </div>
    )
}
