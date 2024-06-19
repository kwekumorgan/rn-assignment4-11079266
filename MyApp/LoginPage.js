import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,Image} from 'react-native';
import CustomButton from './CustomButton'; 



const LoginPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  
    const handleLogin = () => {
        navigation.navigate('HomePage', { name, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
        
            <Text style={styles.subtitle}>Welcome Back 👋 </Text>
           
           
            <Text style={styles.text}>Let's log in. Apply to jobs</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
           
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <CustomButton title="Log in" onPress={handleLogin} />


            <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or continue with</Text>
        <View style={styles.line} />
        
      </View>



            <View style={styles.imageContainer}>
        <Image source={require('./assets/appleicon.png')} style={styles.image} />
        <Image source={require('./assets/googleicon.png')} style={styles.image} />
        <Image source={require('./assets/facebookicon.png')} style={styles.image} />
      </View>


      <View style={{justifyContent:"center",flexDirection:"row",top:120}}>
        <Text>Haven't an account ?</Text>
        <Text style={{color:"#356899"}}>Register</Text>
      </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

    },
    title: {
        fontSize: 22,
        width: '100%',
        position: 'absolute',
        top: 106,
        left: 16,
        fontWeight:'600',
        color:'#356899',
        height: 33,
        lineHeight:33,
        
    },
    
    subtitle: {
        fontSize: 24,
        width: '100%',
        position: 'absolute',
        top: 147,
        left: 16,
        fontWeight:'bold',
        height: 63,
        width:207,
        lineHeight:33.6,
        color:'#0D0D26',
   
    },
    text: {
        fontSize: 14,
        width: 170,
        position: 'absolute',
        top: 188,
        left: 16,
        opacity:0.4,
        lineHeight:22.4,
        letterSpacing:-0.1,
        height:22,
    },
    input: {
        width: 327,
        height:52,
        top:35,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 16,
        fontSize:14,
        
    },
    buttonContainer: {
        width: '100%',
        padding: 12,
    },

    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        top:80,
     
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
        marginHorizontal: 10,
      },
      separatorText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#AFB0B6',
      },    
    image: {
        width: 28,
        height: 28,
        marginLeft:60,
        
      },

      imageContainer: {
        flexDirection: 'row',
        Gap: 50,
        marginVertical: 20,
        justifyContent:'center',
        marginRight:45,
        top:80,
      },
});

export default LoginPage;
