import { StyleSheet } from 'react-native';

export const TeamsPositionsStyle = StyleSheet.create({
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding:10
  },
    // Estilo para los botones de categoría
    categoryButton: {
      backgroundColor: '#FFD700',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  
    // Estilo para el botón de categoría seleccionado
    selectedCategoryButton: {
      backgroundColor: '#FFA500', // Puedes cambiar el color para resaltar el botón seleccionado
    },
  
    // Estilo para el texto de los botones de categoría
    categoryButtonText: {
      color: '#000',
      fontWeight: 'bold',
    },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
  },
  teamHeader: {
    flexDirection: 'row',
    width: '28%'
  },
  resultHeader: {
    flexDirection: 'row',
    width: '72%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  detailHeader: {
    width: '9%',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  detailHeaderLarge: {
    width: '12%'
  },
  teamPositionHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    width: '20%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  teamNameHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 5
  }
})