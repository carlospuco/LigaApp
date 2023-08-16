import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MatchService from '../../../constants/matches/matches';
import { MatchesList } from '../../organisms/matches-list/matches-list';
import { MatchesCalendarStyle } from './matches-calendar-style';
import { Match } from '../../../utils/interfaces/match';



const matchService = new MatchService();

export const MatchesCalendar = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setMatches([]);
    const matchesData = await matchService.getMatches();
    setMatches(matchesData);
  };

  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={MatchesCalendarStyle.wrapper}>
      <Text style={MatchesCalendarStyle.title}>Calendario</Text>
      <MatchesList matches={matches} />
    </LinearGradient>
  );
}
