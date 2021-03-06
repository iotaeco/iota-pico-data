import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Address } from "./address";
import { Hash } from "./hash";
import { SignatureMessageFragment } from "./signatureMessageFragment";
import { Tag } from "./tag";
import { Transaction } from "./transaction";
import { TryteNumber } from "./tryteNumber";

/**
 * A class for handling bundles.
 */
export class Bundle {
    /**
     * The transactions that form the bundle.
     */
    public transactions: Transaction[];
    /**
     * The include state for the items in the bundle, populated if required during getTransfers.
     */
    public inclusionState: boolean;

    /**
     * Create a new instance of Bundle.
     */
    constructor() {
        this.transactions = [];
    }

    /**
     * Add new transactions to the bundle.
     * @param signatureMessageLength The number of transactions to add.
     * @param address The address for the transactions.
     * @param value The value for the first of the transactions.
     * @param tag The tag to include in the transactions.
     * @param timestamp The timestamp for the transactions.
     */
    public addTransactions(signatureMessageLength: number, address: Address, value: number, tag: Tag, timestamp: number): void {
        for (let i = 0; i < signatureMessageLength; i++) {
            this.transactions.push(Transaction.fromParams(undefined, address, i === 0 ? value : 0, tag,
                                                          timestamp, undefined, undefined, undefined,
                                                          undefined, undefined, tag, undefined,
                                                          undefined, undefined, undefined));
        }
    }

    /**
     * Add signature fragments to the bundle.
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */
    public addSignatureMessageFragments(signatureMessageFragments: SignatureMessageFragment[]): void {
        if (ObjectHelper.isEmpty(signatureMessageFragments)) {
            throw new DataError("The signatureMessageFragments should be an array of SignatureMessageFragments");
        }

        for (let i = 0; i < this.transactions.length; i++) {
            this.transactions[i].signatureMessageFragment = (signatureMessageFragments[i] || SignatureMessageFragment.EMPTY);
            this.transactions[i].trunkTransaction = Hash.EMPTY;
            this.transactions[i].branchTransaction = Hash.EMPTY;
            this.transactions[i].attachmentTimestamp = TryteNumber.EMPTY_9;
            this.transactions[i].attachmentTimestampLowerBound = TryteNumber.EMPTY_9;
            this.transactions[i].attachmentTimestampUpperBound = TryteNumber.EMPTY_9;
            this.transactions[i].nonce = Tag.EMPTY;
        }
    }
}
