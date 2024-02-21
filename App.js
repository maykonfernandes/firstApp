import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<View style={styles.secondaryContainer}>

<Text style= {{color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign:'center', textAlign:'right'}}>Maykon Fernandes</Text>

<Text style={{color: 'yellow', fontSize: 25, fontStyle: 'italic', textAlign: 'flex-start', alignItems: 'center', border: 'solid', borderWidht: '1', borderColor: 'black'}}>Computador 26</Text>

<Text style={{backgroundColor: 'pink', color:'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Sala 7</Text>

</View>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
<Text style={{color:'red', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> Senai-sp</Text>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
width: '100%',
backgroundColor: '#fff',
justifyContent: 'center',
},
});