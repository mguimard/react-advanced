export default function capitalizeReducer(_state: string, newValue: string) {
  if (newValue.length)
    return newValue.trim().substring(0, 1).toUpperCase() + newValue.substring(1, newValue.length);
  return "";
}
