export interface Match {
  id?: number
  team1: string
  team1Logo: string
  team2Logo: string
  team2: string
  date: string
  goalTeam1:string;
  goalTeam2:string;
  time: string
  finished?: boolean
  scoreTeam1?: number
  scoreTeam2?: number
}