import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { fetchTopRatedMovies } from '@/api/movies';

export default function TabOneScreen() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async() => {
      setIsLoading(true);

      try {

        const movies = await fetchTopRatedMovies();
        setMovies(movies)
        console.log(movies);
      }
      catch (error) {
        setError(error);
      }

      setIsLoading(false)
    }

    fetchMovies();


  }, []);

  if(isLoading){
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  }

  if (error) {
    return ( <Text>{error.message} </Text>)
  }


  return (
    <View style={styles.container}>
      <FlatList
      data={movies}
      renderItem={({item}) =>(
        <View>
          <Text>{item.title}</Text>
        </View>
      )
      }

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
