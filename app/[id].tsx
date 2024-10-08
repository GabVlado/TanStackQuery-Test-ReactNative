import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useQuery, useMutation, useQueryClient, } from "@tanstack/react-query";
import { fetchMovie } from "@/api/movies";
import { FontAwesome } from '@expo/vector-icons';
import { addMovieToWatchList } from '@/api/watchlist';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const queryClient = useQueryClient();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),
  });

  const {mutate} = useMutation({
    mutationFn: () => addMovieToWatchList(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['watchlist']})
    }
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
        style={{ width: "100%", height: 300, resizeMode: "cover" }}
      />
      <View style={{padding: 10}}>
        <Text style={{ fontSize: 24, fontWeight: "500", marginVertical: 10 }}>{movie.title}</Text>
        <View>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center', gap: 5}}
            onPress={() => mutate() }
          >
            <FontAwesome  name="bookmark-o" size={24}  color='black'/>
            <Text>Add to watchlist</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16,  }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
