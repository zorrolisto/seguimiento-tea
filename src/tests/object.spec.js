import { haveEmptyFields } from "../libs/object.helper";

describe("haveEmptyFields", () => {
  it("should return true if any field is empty", () => {
    const obj = {
      name: "John Doe",
      age: "",
      email: "john.doe@example.com",
    };

    const result = haveEmptyFields(obj);

    expect(result).toBe(true);
  });

  it("should return false if all fields are filled", () => {
    const obj = {
      name: "John Doe",
      age: "30",
      email: "john.doe@example.com",
    };

    const result = haveEmptyFields(obj);

    expect(result).toBe(false);
  });

  it("should return false if object is empty", () => {
    const obj = {};

    const result = haveEmptyFields(obj);

    expect(result).toBe(false);
  });
});
