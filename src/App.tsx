import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";
import {AvatarInfo, FromContext, StatsInfo} from "./utils/types";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    } as AvatarInfo);

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    } as StatsInfo);

    const changeAvatar = (url: string) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name: string) => {
        setUser(prevState => ({...prevState, name: name || prevState.name }))
    }

    const changeStats = (statsType: string, sum: number) => {
        setStats(stats => {
            let res = stats[statsType as keyof StatsInfo] + sum;
            res = res < 0 ? 0 : res;
            return {...stats, [statsType]: res};
        })
    }

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats,
            } as FromContext}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
