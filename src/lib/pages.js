import { writable } from 'svelte/store';

import Dashboard from '../pages/Dashboard.svelte';
import Memes from '../pages/Memes.svelte';
import Logs from '../pages/Logs.svelte';
import Users from '../pages/Users.svelte';

export const pages = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        id: 'logs',
        name: 'Logs',
        component: Logs
    },
    {
        id: 'memes',
        name: 'Memes',
        component: Memes
    },
    {
        id: 'users',
        name: 'Users',
        component: Users
    }
];

export const currentPage = writable(pages[0]);
