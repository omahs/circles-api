const DEFAULT_BUFFER_DECIMALS = 15; // 1000000000000000 or 0.001 Circles

export default function reduceCapacities(
  edges,
  bufferDecimals = DEFAULT_BUFFER_DECIMALS,
) {
  return edges
    .filter((edge) => {
      return edge.capacity.length >= bufferDecimals + 1;
    })
    .map((edge) => {
      edge.capacity = reduceCapacity(edge.capacity, bufferDecimals);
      return edge;
    });
}

export function reduceCapacity(
  value,
  bufferDecimals = DEFAULT_BUFFER_DECIMALS,
) {
  // Ignore too small values
  if (value.length <= bufferDecimals + 1) {
    return value;
  }

  const index = value.length - bufferDecimals;
  const frontNumber = value.slice(0, index);
  const endOfNumber = value.slice(index + 1, value.length);
  const figureToChange = parseInt(value[index], 10);

  if (figureToChange === 0) {
    const reducedFrontNumber = parseInt(frontNumber, 10) - 1;
    return `${reducedFrontNumber}0${endOfNumber}`;
  } else {
    return `${frontNumber}${figureToChange - 1}${endOfNumber}`;
  }
}
