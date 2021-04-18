export function chunk(collection: string, size = 2): string[] {
  const result = []
  for (let x = 0; x < Math.ceil(collection.length / size); x++) {
    const start = x * size
    const end = start + size
    result.push(collection.slice(start, end))
  }
  return result
}
