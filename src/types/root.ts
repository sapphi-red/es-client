export interface StackType {
  type: 'Home' | 'Game' | 'Search'
  id: number
}

export type Game = {
  id: number
  name: string
  furigana: string
  brandId: number
  brandName: string
  officialHomePage: string
  sellday: string
  imgUrl: string
  median: number
  average: number
  count: number
  gengas: Creator[]
  sinarios: Creator[]
  seiyus: Seiyu[]
  createdAt: Date
}

export interface Creator {
  id: number
  name: string
  furigana: string
  createdAt: Date
}

export interface Seiyu extends Creator {
  role: string
  importance: number // 0 => Main, 1 => Sub, 2 => Mob
}

export interface Brand {
  id: number
  name: string
  furigana: string
  officialHomePage: string
  median: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export interface CampaignGame {
  id: number
  title: string
  median: number
  content: string
  url: string
}

export interface Campaign {
  name: string
  url: string
  games: CampaignGame[]
}