import React, { useContext } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { ThemeContext } from './ThemeContext';
import { dynamicStyles } from './styles3';

export default function Detail({ navigation }) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = dynamicStyles(isDarkMode);
  const [collectionSelected, setCollectionSelected] = React.useState(true);

  const onTabPressed = () => {
    setCollectionSelected(!collectionSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: '50%' }}
          >
            <Icon name="chevron-left" size={24} color={styles.backIcon.color} />
          </TouchableOpacity>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Icon name="dots-two-vertical" size={24} color={styles.moreIcon.color} />
          </View>
        </View>

        <Image
          source={require('../images/p2.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />
        <Text style={styles.name}>Ksenia Bator</Text>
        <Text style={styles.location}>Kiev, Ukraine</Text>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <View>
            <Text style={styles.statText}>280</Text>
            <Text style={styles.statLabel}>photos</Text>
          </View>

          <View style={{ marginHorizontal: 40 }}>
            <Text style={styles.statText}>2,107</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>

          <View>
            <Text style={styles.statText}>104</Text>
            <Text style={styles.statLabel}>follows</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingHorizontal: 40, paddingTop: 20 }}>
        <TouchableOpacity
          onPress={onTabPressed}
          style={[
            {
              borderBottomWidth: 4,
              paddingVertical: 6,
            },
            collectionSelected
              ? styles.activeTabUnderline
              : styles.inactiveTabUnderline,
          ]}
        >
          <Text
            style={
              collectionSelected ? styles.activeTabText : styles.tabText
            }
          >
            COLLECTIONS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onTabPressed}
          style={[
            {
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30,
            },
            collectionSelected
              ? styles.inactiveTabUnderline
              : styles.activeTabUnderline,
          ]}
        >
          <Text
            style={
              collectionSelected ? styles.tabText : styles.activeTabText
            }
          >
            FEATURED
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.collectionCard}>
          <ImageBackground
            source={require('../images/7.jpg')}
            style={{
              width: 280,
              height: 180,
            }}
            imageStyle={{
              borderRadius: 30,
            }}
          >
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 25,
                  borderRadius: 10,
                  padding: 8,
                  marginRight: 20,
                  backgroundColor: isDarkMode ? '#3A3A3C' : '#6f8d90',
                }}
              >
                <Icon name="edit" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
            <Text style={styles.collectionTitle}>Nature Collections</Text>
            <Text style={styles.collectionCount}>1,003 photos</Text>
          </View>
        </View>

        <View
          style={{
            height: 180,
            backgroundColor: isDarkMode ? '#1c1c1e' : '#FFF',
            width: 20,
            marginLeft: -20,
            marginTop: 70,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />
      </View>
    </View>
  );
}