import { AsyncStorage } from "react-native";

async function saveData(key, data) {
    // await AsyncStorage
    //     .setItem(key, data)
    //     .then(() => console.log('Data saved!'))
    //     .catch(error => console.error('AsyncStorage error: ' + error.message))
    //     .done();

    try {
        await AsyncStorage.setItem(key, data);
    } catch (blad) {
        console.error("AsyncStorage error: ", blad.message);
    }
};

async function readData(key) {
    // let value = null;
    // await AsyncStorage
    //     .getItem(key)
    //     .then(readValue => {
    //         if (readValue !== null) {
    //             value = readValue;
    //             console.log('Data read!');
    //         }
    //     })
    //     .catch(error => console.error("AsyncStorage error: " + error.message))
    //     .done();
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('Data read!');
            return value;
        } else {
            console.log("No data found with key = " + key);
            return null;
        }
    }
    catch (error) {
        console.error("AsyncStorage error: " + error.message);
    }
};

export default {
    saveData: saveData,
    readData: readData
};