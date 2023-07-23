// PartialSelected<type, key>
// Omit<T, K> = Get type without key
// Pick<T, K> = Pick key from type
// Partial<T> = Make all keys in type optional
export type PartialKey<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
