import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Akshay Giri</Text>
      <Text style={{ color: 'gray' }}>This is a optional text, just a description.</Text>
      <TouchableOpacity>
        <Text onPress={() => alert('Hi, this is alert box')}>Click Me</Text>
      </TouchableOpacity>

      <Image style={{
        width: '100%',
        height: 400,
        borderRadius: 20
      }} source={{ uri: 'https://images.unsplash.com/photo-1720811756052-a157e8261aec?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />

      <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20}}>
        <Link href={'/notification'}>Notifications</Link>
        <Link href={'/profile'}>Profile</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    }
})

export default index