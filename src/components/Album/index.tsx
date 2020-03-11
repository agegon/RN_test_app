import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Program, Track } from '../../types/ProgramsFree';
import styles from './style';

type Props = {
  album: Program;
  currentTrack: Track | null;
  isPlaying: boolean;
  onPressTrack: (track: Track) => void;
};

const TrackInfo = ({ album, currentTrack, isPlaying, onPressTrack }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.albumHead}>
        <Image source={{ uri: album.cover.url }} style={styles.albumCover} />
        <Text style={styles.albumTitle} >{album.title}</Text>
      </View>
      <View style={styles.tracksContainer}>
        {album.tracks.map(track => {
          const isActive = isPlaying && currentTrack?.key === track.key;
          const titleStyle = isActive ? [styles.title, styles.playing] : styles.title;
          return (
            <TouchableOpacity key={track.key} onPress={() => onPressTrack(track)} style={styles.track}>
              <Text style={titleStyle}>{track.title}</Text>
            </TouchableOpacity>
          )}
        )}
      </View>
    </View>
  );
};

export default TrackInfo;
