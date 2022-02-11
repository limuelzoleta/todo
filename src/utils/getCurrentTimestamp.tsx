/**
 * Gets the current time in milliseconds
 * @returns time in milliseconds
 */
export const getCurrentTimestamp = () => {
  const date = new Date();
  return date.getTime();
};
