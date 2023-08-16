export interface TeamResponse {
  id_team: number;
  id_league: number;
  id_season: number;
  id_category: number;
  name_category: string;
  name_team: string;
  photo_team: string;
  points_team: number;
  goals_for_team: number;
  goals_against_team: number;
  goal_difference_team: number;
}

export interface lastMatch {
  id: number
  result: 'win' | 'defeat' | 'draw'
}