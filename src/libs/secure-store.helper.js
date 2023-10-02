import { setItemAsync, getItemAsync } from "expo-secure-store";

export const saveSecure = async (key, value) => {
  try {
    await setItemAsync(key, value);
  } catch (e) {
    console.log(e);
  }
};
export const getSecureValueFor = async (key) => {
  try {
    return await getItemAsync(key);
  } catch (e) {
    console.log(e);
  }
  return null;
};
