import "./ui/SvgUse.css";
import { createElement, useEffect, useState } from "react";

export function SvgUse({ buttonAction, svgColorVar, svgName, svgSize }) {
    const [canRender, setCanRender] = useState(false);

    function onClick() {
        if (buttonAction && buttonAction.canExecute) {
            buttonAction.execute();
        }
    }

    useEffect(() => {
        if (svgName) {
            setCanRender(true);
        }
    }, [svgName]);

    if (canRender) {
        return (
            <div
                className="svg-icon"
                onClick={() => buttonAction && onClick()}
                style={{ "--icon-size": `${svgSize}px`, "--icon-color": `${svgColorVar}` }}
            >
                <svg role="img" className="svg-icon__svg" style={{ fill: "var(--icon-color, black)" }}>
                    <use href={`#${svgName}`}></use>
                </svg>
            </div>
        );
    } else {
        return <div></div>;
    }
}
