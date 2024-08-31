// Write a function that will sleep for a given amount of time

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
