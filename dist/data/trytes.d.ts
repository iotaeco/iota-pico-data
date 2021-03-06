/**
 * A class for handling trytes.
 */
export declare class Trytes {
    /**
     * All the characters that can be used in trytes.
     */
    static ALPHABET: string;
    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    static fromString(value: string, length?: number): Trytes;
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    static isValid(value: string, length?: number): boolean;
    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    toString(): string;
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */
    length(): number;
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */
    sub(start: number, length: number): Trytes;
}
