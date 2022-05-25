import type { NextPage } from "next";
import { Button } from "react-bootstrap";


const Playground: NextPage = () => {
    return (
        <>
            <div className="pt-4 d-flex justify-content-center">
                <Button className="me-2" onClick={onClickPrint}>ClickMe</Button>
            </div>

        </>
    );
};

function onClickPrint(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //console.log(e.target);
    //(e.target as HTMLButtonElement).style.color = "black";
    createPlayground(((e.target as HTMLButtonElement).parentElement?.parentElement) as HTMLElement, "200px", "200px", "#48d9d144");

}


function createPlayground(atElement: HTMLElement, width: string, height: string, backgroundColor: string) {

    let playground = document.createElement('div');
    playground.classList.add("pt-4");
    playground.classList.add("d-flex");
    playground.classList.add("justify-content-center");


    let outerSquare = document.createElement('div');
    outerSquare.style.width = width;
    outerSquare.style.height = height;
    outerSquare.style.backgroundColor = backgroundColor;
    outerSquare.classList.add("shadow-sm");
    outerSquare.classList.add("d-flex");
    outerSquare.classList.add("justify-content-center");
    outerSquare.classList.add("align-items-center")


    let innerSquare = document.createElement('div');
    innerSquare.style.width = (parseFloat(outerSquare.style.width) * .8) + "px";
    innerSquare.style.height = (parseFloat(outerSquare.style.height) * .8) + "px";
    innerSquare.style.backgroundColor = backgroundColor;


    outerSquare.append(innerSquare);
    playground.append(outerSquare);
    atElement?.insertAdjacentElement("afterend", playground);
}

export default Playground;