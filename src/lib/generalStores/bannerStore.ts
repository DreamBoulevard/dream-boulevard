import { writable, type Writable } from 'svelte/store';

export const readyrate: Writable<number> = writable(0);
