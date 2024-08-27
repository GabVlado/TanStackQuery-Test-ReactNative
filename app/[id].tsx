import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from '@/api/movies';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {data, isLoading, error  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),

  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if(error) {
    return <Text>Failed to fetch data</Text>
  }

  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: '500'}}>{data.title}</Text>
    </View>
  );
};

export default MovieDetails;
