import {
  removeDataFromAs,
  saveDataToAs,
  getDataFromAs,
} from "../libs/async-storage.helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("AsyncStorageHelper", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save data to AsyncStorage", async () => {
    const field = "testField";
    const value = "testValue";
    await saveDataToAs(field, value);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      `@MyStore:${field}`,
      value
    );
  });

  it("should get data from AsyncStorage", async () => {
    const field = "testField";
    const value = "testValue";
    AsyncStorage.getItem.mockResolvedValue(value);
    const result = await getDataFromAs(field);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(`@MyStore:${field}`);
    expect(result).toEqual(value);
  });

  it("should remove data from AsyncStorage", async () => {
    const field = "testField";
    await removeDataFromAs(field);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(`@MyStore:${field}`);
  });
});
