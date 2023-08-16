import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PosstionsService from '../../../constants/teams/teams';
import { PositionList } from '../../organisms/positions-list/positions-list';
import { TeamsPositionsStyle } from './teams-positions-style';
import { TeamResponse } from '../../../utils/interfaces/team';

const positionService = new PosstionsService();

export const TeamsPositions = () => {
  const [teams, setTeams] = useState<TeamResponse[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  useEffect(() => {
    positionService.getPositions(selectedCategory)
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, [selectedCategory]);

  const handleCategoryChange = (category: number) => {
    setSelectedCategory(category);
  };

  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={TeamsPositionsStyle.wrapper}>
      <Text style={TeamsPositionsStyle.title}>Posiciones</Text>
      {}
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

      <View style={TeamsPositionsStyle.header}>
        <View style={TeamsPositionsStyle.teamHeader}>
          <Text style={TeamsPositionsStyle.teamPositionHeader}>P</Text>
          <Text style={TeamsPositionsStyle.teamNameHeader}>Club</Text>
        </View>
        <View style={TeamsPositionsStyle.resultHeader}>
          <Text style={TeamsPositionsStyle.detailHeader}>GF</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>GC</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>DG</Text>
          <Text style={[TeamsPositionsStyle.detailHeader, TeamsPositionsStyle.detailHeaderLarge]}>Pts</Text>
        </View>
      </View>
      {}
      {teams.length > 0 ? (
        <PositionList teams={teams} />
      ) : (
        <Text>Cargando posiciones...</Text>
      )}
    </LinearGradient>
  );
};
