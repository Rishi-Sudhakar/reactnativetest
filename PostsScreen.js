// PostsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Alert, RefreshControl, StyleSheet } from 'react-native';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch posts. Please check your internet connection.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setPosts([]);
    setPage(1);
    setRefreshing(true);
    fetchPosts();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => navigation.navigate('PostDetail', { post: item })}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Refresh" onPress={handleRefresh} color="#007BFF" />
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#007BFF']} // Loading indicator color
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Light blue background
  },
  postItem: {
    backgroundColor: '#fff', // White background
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007BFF', // Blue border color
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF', // Blue post title color
  },
});

export default PostsScreen;
