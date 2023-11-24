export const saludo = () => {
  const hour = new Date().getHours();
  switch (true) {
    case hour < 12:
      return "Buenos días";
    case hour < 18 && hour >= 12:
      return "Buenas tardes";
    default:
      return "Buenas noches";
  }
};
