import { saveSecure, getSecureValueFor } from "../libs/secure-store.helper";
import { setItemAsync, getItemAsync } from "expo-secure-store";

jest.mock("expo-secure-store", () => ({
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
}));

describe("SecureStoreHelper", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save data securely", async () => {
    const key = "testKey";
    const value = "testValue";
    await saveSecure(key, value);
    expect(setItemAsync).toHaveBeenCalledWith(key, value);
  });

  it("should get secure data", async () => {
    const key = "testKey";
    const value = "testValue";
    getItemAsync.mockResolvedValue(value);
    const result = await getSecureValueFor(key);
    expect(getItemAsync).toHaveBeenCalledWith(key);
    expect(result).toEqual(value);
  });
});
