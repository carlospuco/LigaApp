import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { MatchesCalendar } from '../../templates/matches-calendar/matches-calendar';

const Calendar = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isCalendarUpdated, setCalendarUpdated] = useState(false);

  const handleRefresh = () => {
    // Aquí puedes realizar las operaciones de recarga o actualizar los datos

    // Simulando la actualización de los datos
    // En lugar de setTimeout, puedes hacer una llamada a una API o realizar otras operaciones asincrónicas
    setTimeout(() => {
      // Una vez que las operaciones de recarga se hayan completado,
      // actualiza el estado de la variable isCalendarUpdated para volver a renderizar el componente MatchesCalendar
      setCalendarUpdated(!isCalendarUpdated);

      // Llama a setRefreshing(false) para indicar que la recarga ha finalizado
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
      <MatchesCalendar key={isCalendarUpdated.toString()} />
    </ScrollView>
  );
};

export default Calendar;
