import { AsyncStorage } from "react-native";

async function read(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log(`value = ${value}`);
            return value;
        } else {
            console.info(`Data with key = ${key} was not found.`);
            return null;
        }
    } catch (error) {
        console.warn("AsyncStorage error: ", error.message);
    }
}

async function save(key, value) {
    try {
        console.log(`value = ${value}`);
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error("AsyncStorage error: ", error.message);
    }
}

export const loadData = key => {
    return read(key);
};

export const saveData = (key, data) => {
    return save(key, data);
};
