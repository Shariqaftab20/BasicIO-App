import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const EnteredItem = props => {

    const [textEntered, setText] = useState('')

    function textHndler(textEntered) {
        setText(textEntered)
    }

    const addItemHandler =()=>{

        props.senttext(textEntered);
        setText('');
    };


    return (
         <Modal visible={props.visibility} animationType="slide">
            <View style={styles.addview} >
                <TextInput
                    placeholder="Input the things you like in me"
                    style={styles.inputext}
                    onChangeText={textHndler}
                    value={textEntered} />
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                <Button title="ADD" onPress={addItemHandler} />
            </View>
    
         </Modal> 
    );
};
const styles = StyleSheet.create({
    addview: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    inputext: {
        width: '100% ',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 20,
    }
});

export default EnteredItem;