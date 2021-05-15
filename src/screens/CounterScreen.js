import React, {useState} from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';

export const CounterScreen = ({title}) => {
    
    const [counter, setCounter] = useState(10);
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>
                Time: { counter }
            </Text>
            {/* <Button 
                title="Click" 
                onPress={ () => setCounter(counter+1) }
            /> */}

            <ButtonComponent
                title = "+1"
                onPress={ () => setCounter(counter+1) }
                position ="br"
            />

            <ButtonComponent
                title = "-1"
                onPress={ () => setCounter(counter-1) }
                position ="bl"
            />
        
            {/* <TouchableOpacity style = {styles.fabLocationBL} onPress={ () => setCounter(counter-1) }>
                <ButtonComponent></ButtonComponent>
            </TouchableOpacity> */}
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'      
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -150
    },
})