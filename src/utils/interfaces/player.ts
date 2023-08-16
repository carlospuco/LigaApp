export interface PlayerResponse {
  id_player: number;
  id_user: number;
  id_league: number;
  id_season: number;
  id_team: number;
  name_player: string;
  second_name_player: string;
  surname_player: string;
  second_surname_player: string;
  ci_player: string;
  phone_user: string | null;
  email_user: string | null;
  date_birth_player: string;
  number_player: string;
  photo_player: string | null;
  observations_player: string | null;
  goal: number | null;
  yellow_card: number | null;
  red_card: number | null;
  created_at: string | null;
}
