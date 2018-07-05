import { createElement } from "react";

export const SelectTag = () =>
    createElement('select', {},
        createElement('option', {}, "active"),
        createElement('option', {}, "pending"),
        createElement('option', {}, "complete"),
        createElement('option', {}, "cancelled"),
        createElement('option', {}, "postponed"),
    )