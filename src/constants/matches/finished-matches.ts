import axios from 'axios';
import { Match } from '../../utils/interfaces/match';
import { MatchResponse } from '../../utils/interfaces/matchResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';


class MatchServiceFinish {
  matchResponse!: MatchResponse[];
  dataSize!:any;
  teamsMatches: MatchResponse[] = [];
  match = {} as Match;
  matches:Match[]= [];
  async getMatches() {
    const tokens = await AsyncStorage.getItem('token');
    this.matches=[];
    //console.log('tokens',tokens)
    try {
      const headers = {
        Authorization: `Bearer ${tokens}`,
      };
      const response = await axios.get('https://liga-app-api.herokuapp.com/ligapp-api/admin/matches', { headers });
      if (response.status === 200) {
        this.dataSize = Object.keys(response.data).length;
        //console.log('tam:', this.dataSize);
        //console.log("Response",response.data)
      } else {
        console.log('Error');
      }
     for (let x = 1; x <= Object.keys(response.data).length; x++) {
      this.teamsMatches.push(response.data[x]);
     }
     console.log("matches",this.teamsMatches)
      if (this.teamsMatches.length > 0) {
        this.teamsMatches.forEach((element) => {
          //console.log('element',element);
          element.forEach((registe, index) => {
            console.log('registe',element);
            if (index === 0) {
              //propiedades del equipo 1
              this.match.team1 = registe.name_team;
              this.match.goalTeam1=registe.goal;
              this.match.team1Logo = 'https://static.vecteezy.com/system/resources/previews/023/579/944/original/illustration-of-soccer-logo-it-s-for-success-concept-png.png';
            } else {
              //propiedades del equipo 2
              this.match.team2 = registe.name_team;
              this.match.goalTeam2=registe.goal;
              this.match.team2Logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/CABJ70.png/800px-CABJ70.png';
            } 
            //propiedades para ambos equipos
            this.match.date=registe.date
          });
          console.log("duplicado",this.match)
          this.matches.push({...this.match});
          this.teamsMatches = [];
        });
        console.log("Matches response",this.matches)
      } else {
        console.log('El arreglo teamsMatches está vacío.');
      }
     // console.log('mathces',this.matches)
      return  this.matches;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default MatchServiceFinish;