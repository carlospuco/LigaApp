import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PlayerService from '../../../constants/players/players'
import { PlayersList } from '../../organisms/players-list/players-list'
import { PlayersStatisticsStyle } from './players-statistics-style'
import { PlayerResponse } from '../../../utils/interfaces/player'
import { TeamsPositionsStyle } from '../teams-positions/teams-positions-style'
const playerService = new PlayerService();
export const PlayersStatistics = () => {
  const [players, setPlayers] = useState<PlayerResponse[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  useEffect(() => {
    playerService.getEstadisticas(selectedCategory)
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, [selectedCategory]); 
  const handleCategoryChange = (category: number) => {
    setSelectedCategory(category);
  };
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={PlayersStatisticsStyle.wrapper}>
      <Text style={PlayersStatisticsStyle.title}>Estadísticas</Text>
       
       <View style={TeamsPositionsStyle.categoryButtonsContainer}>
        <TouchableOpacity
          style={[TeamsPositionsStyle.categoryButton, selectedCategory === 1 && TeamsPositionsStyle.selectedCategoryButton]}
          onPress={() => handleCategoryChange(1)}
        >
          <Text style={TeamsPositionsStyle.categoryButtonText}>Primera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[TeamsPositionsStyle.categoryButton, selectedCategory === 2 && TeamsPositionsStyle.selectedCategoryButton]}
          onPress={() => handleCategoryChange(2)}
        >
          <Text style={TeamsPositionsStyle.categoryButtonText}>Segunda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[TeamsPositionsStyle.categoryButton, selectedCategory === 3 && TeamsPositionsStyle.selectedCategoryButton]}
          onPress={() => handleCategoryChange(3)}
        >
          <Text style={TeamsPositionsStyle.categoryButtonText}>Maxima</Text>
        </TouchableOpacity>
      </View>
      <PlayersList players={players}/>
    </LinearGradient>
  )
}