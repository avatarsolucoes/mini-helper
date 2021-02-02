const g =
  (typeof self === 'object' && self.self === self && self) ||
  (typeof window === 'object' && window.window === window && window) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

export default g
