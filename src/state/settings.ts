import { writable, type Writable } from "svelte/store";

export const settings = writable({
    colourScheme: 'dark',
    language: 'en',
    fonstSize: 12
});