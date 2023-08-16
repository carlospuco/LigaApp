import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { Match as MatchEntity } from '../../../utils/interfaces/match';
import { Match } from '../../molecules/match/match';

interface MatchesListProps {
  matches: MatchEntity[];
}

export const MatchesList: FC<MatchesListProps> = ({ matches = [] }) => {
  return (
    <ScrollView>
      {matches.map((match) => {
        return <Match key={match.id} {...match} />;
      })}
    </ScrollView>
  );
};
