import { AsyncStorage } from 'react-native';
import { TeamResponse } from '../../utils/interfaces/team';
import axios from 'axios';


class PosstionsService {
  dataSize!:any;
  teamResponse: TeamResponse[] = [];
  async getPositions(selectedCategory: string | number): Promise<TeamResponse[]> {
    const tokens = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJkaWVnb2FsZXhhbmRlcm1oQGdtYWlsLmNvbSIsInR5cGVfdXNlciI6IlBMQVlFUiIsImV4cCI6MTcyMjE4MTY3NX0.itXLg4cXUME1hfK-_lWdgHZ5lIIS9krd1a4cOOw4qow'; // Aquí coloca el token correcto

    try {
      const headers = {
        Authorization: `Bearer ${tokens}`,
      };
      const response = await axios.get('https://liga-app-api.herokuapp.com/ligapp-api/player/teams-category/1/1/'+selectedCategory, { headers });
      if (response.status === 200) {
        this.dataSize = Object.keys(response.data).length;
        console.log('Response', response.data);
        this.teamResponse = response.data as TeamResponse[];
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
export default PosstionsService;


