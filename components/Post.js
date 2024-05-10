import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Post = ({ item }) => (
  <View style={styles.postContainer}>
    <View style={styles.locationContainer}>
      <Ionicons name="location-outline" size={20} color="#fff" style={styles.locationIcon} />
      <Text style={styles.lastSeenLocation}>Last seen at {item.last_seen_location}</Text>
    </View>
    <View style={styles.postImageContainer}>
      <Image source={{ uri: item.picture }} style={styles.postImage} />
    </View>
    <View style={styles.textOverlay}>
      <Text style={styles.carDescription}>{item.car_description}</Text>
      <Text style={styles.otherInformation}>{item.other_information}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  locationIcon: {
    marginRight: 8,
  },
  postImageContainer: {
    height: 250,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  carDescription: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lastSeenLocation: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  otherInformation: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Post;
