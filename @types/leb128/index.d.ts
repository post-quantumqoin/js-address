declare module 'leb128' {
  export const unsigned: {
    encode(value: string | number | bigint): Uint8Array
    decode(input: Uint8Array): bigint
  }
}
