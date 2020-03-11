import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, Button, ActivityIndicator, ScrollView } from 'react-native';
import Video from 'react-native-video';

import Album from '../../components/Album';
import { getProgramsFreeRequest } from '../../store/actions';
import { selectProgramsList, selectProgramsStatus, selectProgramsError } from '../../store/selectors';
import { Track } from '../../types/ProgramsFree';
import { LOADING_STATUSES } from '../../data/constants';

import styles from './styles';

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const dispatch = useDispatch();
  const list = useSelector(selectProgramsList);
  const status = useSelector(selectProgramsStatus);
  const error = useSelector(selectProgramsError);

  const handlePressTrack = (track: Track) => {
    if (currentTrack?.key !== track.key) {
      setCurrentTrack(track);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handlePressLoad = () => {
    setIsPlaying(false);
    setCurrentTrack(null);
    dispatch(getProgramsFreeRequest());
  };

  return (
    <View style={[styles.container, styles.wrapper]}>
      <View style={styles.container}>
        {status === LOADING_STATUSES.LOADING && (
          <ActivityIndicator size="large" color="blue" style={styles.loader} />
        )}
        {status === LOADING_STATUSES.EMPTY && (
          <Text style={styles.message}>Please, press button to load data!</Text>
        )}
        {status === LOADING_STATUSES.FAILURE && (
          <>
            <Text style={styles.message}>Something went wrong:(</Text>
            <Text style={styles.message}>{error}</Text>
          </>
        )}
        {status === LOADING_STATUSES.SUCCESS && (
          <ScrollView style={styles.container}>
            {list.map(album => (
              <Album
                key={album.id}
                album={album}
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                onPressTrack={handlePressTrack}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handlePressLoad}
          title="Press Me"
        />
      </View>
      {currentTrack && (
        <Video 
          source={{ uri: currentTrack?.media.mp3.url }}
          paused={!isPlaying}
          playInBackground={false} 
          onEnd={() => setIsPlaying(false)}
        />
      )}
    </View>
  );
};

export default Home;
