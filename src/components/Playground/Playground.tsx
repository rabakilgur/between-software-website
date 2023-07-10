import { useEffect, useId, useRef, useState } from "react";
import S from "./Playground.module.scss";
import C from "classnames";

export default function Playground() {

    const [rows, setRows] = useState(3);
    const [coloums, setColoums] = useState(3);


    function handleSlider(e) {
        setColoums(parseInt(e.target.value));
        setRows(parseInt(e.target.value));
    }

    return (
        <>

            <div className="row">
                <div className="pt-4 col" style={{ lineHeight: 0 }}>
                    {/* <Form.Range className={S.jellyForm} min={1} max={5} onChange={handleSlider} /> */}
                    {[...Array(coloums)].map((e, i) =>
                        <JellyRow key={i} size={rows} />
                    )}
                </div>
                {/* <div className="pt-4 justify-content-center col">
                    <Form.Range className={S.jellyForm} min={1} max={5} onChange={handleSlider} />
                    <BoxOfToys />
                </div> */}
            </div>
        </>
    );
};


function JellyRow(props) {
    return (
        <div className="text-center ">
            {[...Array(props.size)].map((e, i) =>
                <JellyBlock key={i} width={200} height={200} />
            )}

        </div>
    )
}

function JellyBlock(props) {
    return (
        <div className={C("shadow-sm d-inline-block", S.jellyStyle)}
            style={{ width: props.width, height: props.height }}>
            <div className={S.innerJellyStyle}></div>
        </div>
    )
}


function BoxOfToys(props) {
    return (

        <div className={C("shadow-lg p-3", S.boxOFToysStyle)}>
            <BoxOfToysInnerLayer />
        </div>

    )
}

function BoxOfToysInnerLayer(props) {
    return (
        <div className={C("d-flex flex-wrap align-items-start p-3 row", S.boxOfToysInnerLayerStyle)}>
            <StreetLeftToRight className="col" />
            <StreetTopToBottom className="col" />
            <StreetIntersaction className="col" />
            <StreetIntersaction className="col" />
        </div>
    )
}

function StreetLeftToRight(props) {
    return (

        <img className={C("shadow-lg m-2", S.imageStyle)} src="/StreetLeftToRight.svg" alt="street left to right" />

    )
}


function StreetTopToBottom(props) {
    return (
        <img className={C("shadow-lg m-2", S.imageStyle)} src="/StreetTopToBottom.svg" alt="street top to bottom" />
    )
}

function StreetIntersaction(props) {
    return (
        <img className={C("shadow-lg m-2", S.imageStyle)} src="/StreetIntersaction.svg" alt="street intersaction" />
    )
}




