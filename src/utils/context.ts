import {createContext} from "react";
import {FromContext} from "./types";

export const TwitterContext = createContext<FromContext>({
    user: {
        name: '',
        avatar: ''
    },
    changeAvatar: () => {},
    changeName: () => {},
    stats: {
        followers: 0,
        following: 0,
    },
    changeStats: () => {}
});