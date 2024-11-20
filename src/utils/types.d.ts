export interface AvatarInfo {
    name: string,
    avatar: string
}

export interface StatsInfo {
    followers: number,
    following: number
}

export interface FromContext {
    user: AvatarInfo,
    changeAvatar: (url: string) => void,
    changeName: (name: string) => void,
    stats: StatsInfo,
    changeStats: (statsType: string, sum: number) => void
}