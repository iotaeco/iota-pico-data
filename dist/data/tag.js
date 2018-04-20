Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling tags.
 */
class Tag {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Tag.
     */
    static fromTrytes(tag) {
        if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The tag should be a valid Trytes object");
        }
        let trytesString = tag.toString();
        if (trytesString.length > Tag.LENGTH) {
            throw new dataError_1.DataError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
        }
        while (trytesString.length < Tag.LENGTH) {
            trytesString += "9";
        }
        return new Tag(trytesString);
    }
    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    toTrytes() {
        return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        return this._trytes;
    }
}
/**
 * The length of a valid tag (27).
 */
Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */
Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBYUksZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVc7UUFDaEMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsRUFBRTtZQUNuQyxNQUFNLElBQUkscUJBQVMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN4SDtRQUVELE9BQU8sWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3JDLFlBQVksSUFBSSxHQUFHLENBQUM7U0FDdkI7UUFFRCxPQUFPLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOztBQXRERDs7R0FFRztBQUNvQixVQUFNLEdBQVcsRUFBRSxDQUFDO0FBQzNDOztHQUVHO0FBQ29CLFNBQUssR0FBUSxHQUFHLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBUmxHLGtCQXdEQyJ9