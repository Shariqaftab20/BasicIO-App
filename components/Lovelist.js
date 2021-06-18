import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Lovelist = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.inputlist}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>);
};
const styles = StyleSheet.create({
    inputlist: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default Lovelist;