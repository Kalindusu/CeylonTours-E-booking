import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResults = ({ data, input, setInput }) => {
  const filteredData = input !== "" ? data.filter(item => item.place.toLowerCase().includes(input.toLowerCase())) : [];
const navigation = useNavigation();
  return (
    <View style={{ padding: 10, flex: 1 }}>
      {input !== "" && filteredData.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No results found</Text>
        </View>
      ) : (
        input !== "" && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique 'id' field
            renderItem={({ item }) => (
              <Pressable onPress={() => {
                setInput(item.place);
                navigation.navigate('Home',{
                    input:item.place
                })


              }} style={styles.resultContainer}>
                <Image style={styles.image} source={{ uri: item.placeImage }} />
                <View style={styles.textContainer}>
                  <Text style={styles.placeText}>{item.place}</Text>
                  <Text style={styles.descriptionText}>{item.shortDescription}</Text>
                  <Text style={styles.propertiesText}>{item.properties.length} properties</Text>
                </View>
              </Pressable>
            )}
          />
        )
      )}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  placeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  propertiesText: {
    fontSize: 14,
    color: 'blue',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: 'gray',
  },
});
