import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#007BFF" size='large'  />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#007BFF',
    fontWeight: '400',
    marginTop: 10,
  }
});

export default Loading;
