import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Address } from "./address";
import { Hash } from "./hash";
import { SignatureMessageFragment } from "./signatureMessageFragment";
import { Tag } from "./tag";
import { TryteNumber } from "./tryteNumber";
import { Trytes } from "./trytes";

/**
 * A class for handling transactions.
 */
export class Transaction {
    /* The valid length for a transaction */
    public static readonly LENGTH: number = 2673;

    /* Check value length */
    public static readonly CHECK_VALUE_LENGTH: number = 16;

    /* Additional check value always all 9s */
    public static readonly CHECK_VALUE: string = "9".repeat(Transaction.CHECK_VALUE_LENGTH);

    /* @internal */
    private static readonly EMPTY_11: TryteNumber = TryteNumber.fromNumber(0, 11);

    public signatureMessageFragment: SignatureMessageFragment;
    public address: Address;
    public value: TryteNumber;
    public obsoleteTag: Tag;
    public timestamp: TryteNumber;
    public currentIndex: TryteNumber;
    public lastIndex: TryteNumber;
    public bundle: Hash;
    public trunkTransaction: Hash;
    public branchTransaction: Hash;
    public tag: Tag;
    public attachmentTimestamp: TryteNumber;
    public attachmentTimestampLowerBound: TryteNumber;
    public attachmentTimestampUpperBound: TryteNumber;
    public nonce: Tag;

    /* @internal */
    private constructor() {
    }

    /**
     * Create instance of transaction from parameters.
     * @param signatureMessageFragment The signature message fragment.
     * @param address The address.
     * @param value The value.
     * @param obsoleteTag Obsolete transaction tag.
     * @param timestamp The timestamp.
     * @param currentIndex The current index.
     * @param lastIndex The last index.
     * @param bundle The bundle.
     * @param trunkTransaction The trunk transaction.
     * @param branchTransaction The branch transaction.
     * @param tag The tag.
     * @param attachmentTimestamp The attachment timestamp.
     * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
     * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
     * @param nonce The nonce.
     * @return New instance of transaction.
     */
    public static fromParams(signatureMessageFragment: SignatureMessageFragment,
                             address: Address,
                             value: number,
                             obsoleteTag: Tag,
                             timestamp: number,
                             currentIndex: number,
                             lastIndex: number,
                             bundle: Hash,
                             trunkTransaction: Hash,
                             branchTransaction: Hash,
                             tag: Tag,
                             attachmentTimestamp: number,
                             attachmentTimestampLowerBound: number,
                             attachmentTimestampUpperBound: number,
                             nonce: Tag): Transaction {
        const tx = new Transaction();
        tx.signatureMessageFragment = signatureMessageFragment;
        tx.address = address;
        tx.value = TryteNumber.fromNumber(value, 11);
        tx.obsoleteTag = obsoleteTag;
        tx.timestamp = TryteNumber.fromNumber(timestamp);
        tx.currentIndex = TryteNumber.fromNumber(currentIndex);
        tx.lastIndex = TryteNumber.fromNumber(lastIndex);
        tx.bundle = bundle;
        tx.trunkTransaction = trunkTransaction;
        tx.branchTransaction = branchTransaction;
        tx.tag = tag;
        tx.attachmentTimestamp = TryteNumber.fromNumber(attachmentTimestamp);
        tx.attachmentTimestampLowerBound = TryteNumber.fromNumber(attachmentTimestampLowerBound);
        tx.attachmentTimestampUpperBound = TryteNumber.fromNumber(attachmentTimestampUpperBound);
        tx.nonce = nonce;
        return tx;
    }

    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */
    public static fromTrytes(trytes: Trytes): Transaction {
        if (!ObjectHelper.isType(trytes, Trytes)) {
            throw new DataError("The trytes should be a valid Trytes object");
        }

        const length = trytes.length();
        if (length !== Transaction.LENGTH) {
            throw new DataError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }

        const checkIndexStart = 2279;
        const checkIndexLength = 16;
        const check = trytes.sub(checkIndexStart, checkIndexLength).toString();

        if (check !== Transaction.CHECK_VALUE) {
            throw new DataError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }

        const tx = new Transaction();

        let startPos = 0;
        tx.signatureMessageFragment = SignatureMessageFragment.fromTrytes(trytes.sub(startPos, SignatureMessageFragment.LENGTH));
        startPos += SignatureMessageFragment.LENGTH;
        tx.address = Address.fromTrytes(trytes.sub(startPos, Address.LENGTH));
        startPos += Address.LENGTH;
        tx.value = TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
        startPos += 11;
        startPos += Transaction.CHECK_VALUE_LENGTH;
        tx.obsoleteTag = Tag.fromTrytes(trytes.sub(startPos, Tag.LENGTH));
        startPos += Tag.LENGTH;
        tx.timestamp = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.currentIndex = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.lastIndex = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.bundle = Hash.fromTrytes(trytes.sub(startPos, Hash.LENGTH));
        startPos += Hash.LENGTH;
        tx.trunkTransaction = Hash.fromTrytes(trytes.sub(startPos, Hash.LENGTH));
        startPos += Hash.LENGTH;
        tx.branchTransaction = Hash.fromTrytes(trytes.sub(startPos, Hash.LENGTH));
        startPos += Hash.LENGTH;
        tx.tag = Tag.fromTrytes(trytes.sub(startPos, Tag.LENGTH));
        startPos += Tag.LENGTH;
        tx.attachmentTimestamp = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.attachmentTimestampLowerBound = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.attachmentTimestampUpperBound = TryteNumber.fromTrytes(trytes.sub(startPos, TryteNumber.LENGTH_9));
        startPos += TryteNumber.LENGTH_9;
        tx.nonce = Tag.fromTrytes(trytes.sub(startPos, Tag.LENGTH));

        return tx;
    }

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    public toTrytes(): Trytes {
        return Trytes.fromString(this.toString());
    }

    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    public toString(): string {
        if (!ObjectHelper.isType(this.signatureMessageFragment, SignatureMessageFragment)) {
            throw new DataError(`The signatureMessageFragment must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }

        if (!ObjectHelper.isType(this.address, Address)) {
            throw new DataError(`The address must be set to create transaction trytes`, { address: this.address });
        }

        if (!ObjectHelper.isType(this.obsoleteTag, Tag)) {
            throw new DataError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }

        if (!ObjectHelper.isType(this.bundle, Hash)) {
            throw new DataError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }

        if (!ObjectHelper.isType(this.trunkTransaction, Hash)) {
            throw new DataError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }

        if (!ObjectHelper.isType(this.branchTransaction, Hash)) {
            throw new DataError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }

        if (!ObjectHelper.isType(this.nonce, Tag)) {
            throw new DataError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
        }

        const trytes = this.signatureMessageFragment.toTrytes().toString()
            + this.address.toTrytes().toString()
            + (this.value || Transaction.EMPTY_11).toTrytes().toString()
            + Transaction.CHECK_VALUE
            + this.obsoleteTag.toTrytes().toString()
            + (this.timestamp || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.currentIndex || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.lastIndex || TryteNumber.EMPTY_9).toTrytes().toString()
            + this.bundle.toTrytes().toString()
            + this.trunkTransaction.toTrytes().toString()
            + this.branchTransaction.toTrytes().toString()
            + (this.tag || this.obsoleteTag).toTrytes().toString()
            + (this.attachmentTimestamp || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampLowerBound || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampUpperBound || TryteNumber.EMPTY_9).toTrytes().toString()
            + this.nonce.toTrytes().toString();

        const length = trytes.length;
        if (length !== Transaction.LENGTH) {
            throw new DataError(`The trytes must be ${Transaction.LENGTH} in length ${length}`, { length });
        }

        return trytes;
    }
}