import { createElement } from "react";

export function preview({ svgName, svgSize, svgColorVar }) {
    return (
        <div className="svg-icon-preview">
            <div className="svg-icon-preview__icon">SVG</div>
            <p className="svg-icon-preview__text">
                {svgName}
                <span className="svg-icon-preview__text--smaller">
                    {svgSize}px, {svgColorVar}
                </span>
            </p>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/SvgUse.css");
}
