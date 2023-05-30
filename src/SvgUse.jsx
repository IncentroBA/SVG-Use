import "./ui/SvgUse.css";
import { createElement, useEffect, useState } from "react";

export function SvgUse({ buttonAction, svgColorVar, svgName, svgSize, ...rest }) {
    const id = rest.id || "";
    const style = rest.class || "";
    const widgetName = rest.name || "";
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

    if (canRender && (buttonAction ? buttonAction.isAuthorized : null)) {
        const interactiveClass = buttonAction ? "svg-icon--interactive" : "";

        return (
            <div
                id={id}
                className={`svg-icon ${style} ${widgetName} ${interactiveClass}`}
                onClick={() => buttonAction && onClick()}
                style={{ "--icon-size": `${svgSize}px`, "--icon-color": `${svgColorVar}` }}
            >
                <svg role="img" className="svg-icon__svg" style={{ fill: "var(--icon-color, black)" }}>
                    <use href={`#${svgName}`}></use>
                </svg>
            </div>
        );
    } else {
        return null;
    }
}
