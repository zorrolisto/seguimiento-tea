import { saludo } from "../libs/date.helper";

describe("DateHelper", () => {
  let RealDate;

  beforeAll(() => {
    RealDate = Date;
  });

  afterEach(() => {
    global.Date = RealDate;
  });

  it('should return "Buenas tardes" in the afternoon', () => {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(
          new RealDate("2022-01-01T20:00:00Z").toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          })
        );
      }
    };
    expect(saludo()).toBe("Buenas tardes");
  });

  it('should return "Buenos días" in the morning', () => {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(
          new RealDate("2022-01-01T13:00:00Z").toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          })
        );
      }
    };
    expect(saludo()).toBe("Buenos días");
  });

  it('should return "Buenas noches" in the evening', () => {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(
          new RealDate("2022-01-01T23:00:00Z").toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          })
        );
      }
    };
    expect(saludo()).toBe("Buenas noches");
  });
});
