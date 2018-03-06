Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling signature message fragments.
 */
class SignatureMessageFragment {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create signature fragment from trytes.
     * @param signatureMessageFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureMessageFragment.
     */
    static fromTrytes(signatureMessageFragment) {
        if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
        }
        const length = signatureMessageFragment.length();
        if (length !== SignatureMessageFragment.LENGTH) {
            throw new dataError_1.DataError(`The signatureMessageFragment should be ${SignatureMessageFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureMessageFragment(signatureMessageFragment);
    }
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes() {
        return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        return this._trytes.toString();
    }
}
/* The valid length for a signature fragment */
SignatureMessageFragment.LENGTH = 2187;
/* An empty signature fragment */
SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBU0ksZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLHdCQUFnQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLElBQUkscUJBQVMsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFFRCxNQUFNLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLElBQUkscUJBQVMsQ0FBQywwQ0FBMEMsd0JBQXdCLENBQUMsTUFBTSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEksQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7O0FBNUNELCtDQUErQztBQUN4QiwrQkFBTSxHQUFXLElBQUksQ0FBQztBQUM3QyxpQ0FBaUM7QUFDViw4QkFBSyxHQUE2Qix3QkFBd0IsQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUpqSyw0REE4Q0MifQ==