export function logger(message) {
  return { type: 'LOGGER', payload: { time: Date.now(), message } };
}
