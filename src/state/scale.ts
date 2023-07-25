import { writable } from "svelte/store";
import {spring} from "svelte/motion";
import {cubicOut} from "svelte/easing";
import { interpolateRgb } from "d3-interpolate";

export const boxProps = spring({width: 100, height:100}, {
   stiffness: 0.1,
   damping: 0.3,
});