import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  albumHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumCover: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  albumTitle: {
    flex: 1,
    fontSize: 18,
  },
  tracksContainer: {
    padding: 5,
  },
  track: {
    marginBottom: 4,
    padding: 4,
  },
  title: {
    fontSize: 16,
  },
  playing: {
    color: '#00008b',
  },
});

export default styles;
