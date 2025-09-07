import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const usersData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "id": 2,
    "name": "Sophia Patel",
    "email": "sophia.patel@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "id": 3,
    "name": "Rohan Verma",
    "email": "rohan.verma@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "id": 4,
    "name": "Maya Kapoor",
    "email": "maya.kapoor@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "email": "karan.mehta@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    "id": 6,
    "name": "Ananya Iyer",
    "email": "ananya.iyer@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    "id": 7,
    "name": "Devansh Reddy",
    "email": "devansh.reddy@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    "id": 8,
    "name": "Ishita Nair",
    "email": "ishita.nair@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    "id": 9,
    "name": "Arjun Singh",
    "email": "arjun.singh@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    "id": 10,
    "name": "Diya Malhotra",
    "email": "diya.malhotra@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/99.jpg"
  }
]


const Profile = () => {
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 20}}>User Profiles</Text>
      <FlatList data={usersData} renderItem={({item}) => (
        <View style={style.card}>
        <Image style={{width: 100, height: 105, borderRadius: 50}} source={{ uri: item.profilePic}} />
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
      </View>
      )}  
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 15 }}
      />
      
    </View>
  )
}

const style = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default Profile