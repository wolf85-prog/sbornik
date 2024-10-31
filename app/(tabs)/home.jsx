import { Image, StyleSheet, Text, View, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";

import { SearchInput } from "../../components/SearchInput";

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{id: 1}, {id: 2}, {id: 3}]}
        keyExtractor={(item)=> item.$id}
        renderItem={({item}) =>(
          <Text className="text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={()=> (
          <View className='my-6 px-4 space-y-6'>
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-5 h-6"
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* <SearchInput /> */}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
