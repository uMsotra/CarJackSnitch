import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Post from '../components/Post';
import ModalComponent from '../components/Modal';
import postsData from '../data/posts.json';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const renderPostTile = ({ item }) => <Post item={item} />;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const handleProfileIconClick = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const handleSignIn = () => console.log('Signing in with:', email, password);

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
      </Animated.View>
      <ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 100 }}
      >
        <FlatList
          data={posts}
          renderItem={renderPostTile}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <View style={styles.navigationBar}>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.navIcon} />
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={styles.navIcon} />
        <TouchableOpacity onPress={handleProfileIconClick}>
          <Ionicons name="person-circle-outline" size={24} color="black" style={styles.navIcon} />
        </TouchableOpacity>
      </View>
      <ModalComponent
        visible={showModal}
        closeModal={closeModal}
        handleSignIn={handleSignIn}
        setEmail={setEmail}
        setPassword={setPassword}
        email={email}
        password={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff', // Add a background color to header for overlay effect
  },
  icon: {
    marginRight: 16,
  },
  logo: {
    width: 30,
    height: 30,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 16,
  },
  navIcon: {
    marginRight: 16,
  },
});

export default HomeScreen;
