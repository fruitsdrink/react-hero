export const wait = async (delay = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};
