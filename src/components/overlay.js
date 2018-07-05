import { createElement } from "react";
import { SelectTag } from "./selectTag";

export const Overlay = () =>
    createElement('div', { className: "overlay" },
        createElement('div', { className: "text" },
            createElement('input', { type: "text" }, ),
            createElement('input', { type: "time" }, ),
            createElement(SelectTag, {}, null),
        ),
        createElement('button', { className: "btn btn-primary" }, "OK"),
        createElement('button', { className: "btn btn-primary" }, "Delete Task"),
    )