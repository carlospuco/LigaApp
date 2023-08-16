export interface MatchResponse {
    forEach(arg0: (registe: any, index: any) => void): unknown;
    id: number;
    id_league: number;
    id_season: number;
    id_team: number;
    id_match: number;
    date_number: number;
    date: string;
    name_team: string;
    goal: string;
  }