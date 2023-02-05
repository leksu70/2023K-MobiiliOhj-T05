import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

function HistoryScreen({ navigation, route }) {
    const { history } =  route.params; // HUOM. params EI parms.
    
    return(
        <View style={ styleHistory.container }>
            <Text></Text>
            <Text style={ styleHistory.title }>History</Text>
            <FlatList 
                data={history}
                renderItem={({ item }) =>
                    <Text style={ styleHistory.text }>
                        {item.vala} {item.oper} {item.valb} = {item.res}
                    </Text>  
                }
            />
        </View>
    );
};

const styleHistory = StyleSheet.create( {
    container: {
      flex: 6,
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
    },
});

  export default HistoryScreen;