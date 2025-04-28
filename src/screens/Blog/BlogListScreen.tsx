import React from 'react';
import { FlatList, ActivityIndicator,Text ,View,Button } from 'react-native';
import { useBlogListViewModel } from '../../viewmodels/PostListViewModel';
import { Blog } from '../../models/Blog';

import PostCard from '../../components/PostCard'; 

const BlogListScreen: React.FC = () => {
  const { blogs, loading, error } = useBlogListViewModel();

  const handleButtonPress = () => {
    alert("Button clicked!");
    // Add logic here when button is clicked
  };

  const renderItem = ({ item }: { item: Blog }) => (
    <PostCard post={item} />  
  );

  return (
    <View className="flex-1 p-4 bg-gray-500">
      <Text className="text-red-700">Blog List!</Text>
      <View className="mb-4 bg-white">
        <Button
          title="Load More Blogs"
          onPress={handleButtonPress}
          color="#ff6347" 
        />
      </View>
      <FlatList
        data={blogs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogListScreen;
