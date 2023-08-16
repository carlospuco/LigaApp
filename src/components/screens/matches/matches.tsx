import React, { useState } from 'react'
import { FinishedMatches } from '../../templates/finished-matches/finished-matches';
import { RefreshControl, ScrollView } from 'react-native';
const Matches = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [isCalendarUpdated, setCalendarUpdated] = useState(false);

  const handleRefresh = () => {
    
    setTimeout(() => {
     
      setCalendarUpdated(!isCalendarUpdated);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <FinishedMatches key={isCalendarUpdated.toString()} />
    </ScrollView>
  );
}
export default Matches;



