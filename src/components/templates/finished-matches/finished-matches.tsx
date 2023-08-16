import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MatchesList } from '../../organisms/matches-list/matches-list';
import { FinishedMatchesStyle } from './finished-matches-style';
import { Match } from '../../../utils/interfaces/match';
import MatchServiceFinish from '../../../constants/matches/finished-matches';
import { MatchesCalendarStyle } from '../matches-calendar/matches-calendar-style';


const matchService = new MatchServiceFinish();

export const FinishedMatches = () => {
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