import React from 'react';
import {MovieList} from './Movies.js';
import {BoatList} from './Boats.js';
import {View, Text, ScrollView} from 'react-native';
const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercise</Text>
      <MovieList />
      <Text>GetABoat - For Sale</Text>
      <BoatList />
    </ScrollView>
  );
};
export default App;
