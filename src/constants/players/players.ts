import axios from 'axios';
import { PlayerResponse } from '../../utils/interfaces/player';

class PlayerService {
  dataSize!:any;
  teamResponse: PlayerResponse[] = [];
  async getEstadisticas(selectedCategory: string | number): Promise<PlayerResponse[]> {
    const tokens = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJkaWVnb2FsZXhhbmRlcm1oQGdtYWlsLmNvbSIsInR5cGVfdXNlciI6IlBMQVlFUiIsImV4cCI6MTcyMjE4MTY3NX0.itXLg4cXUME1hfK-_lWdgHZ5lIIS9krd1a4cOOw4qow'; // Aquí coloca el token correcto

    try {
      const headers = {
        Authorization: `Bearer ${tokens}`,
      };
      const response = await axios.get('https://liga-app-api.herokuapp.com/ligapp-api/player/all-players-statistic/'+selectedCategory, { headers });
      if (response.status === 200) {
        this.dataSize = Object.keys(response.data).length;
        console.log('Response', response.data);
        this.teamResponse = response.data as PlayerResponse[];
        return this.teamResponse;
      } else {
        console.log('Error');
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
export default PlayerService;


