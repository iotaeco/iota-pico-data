Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const dataError_1 = require("../error/dataError");
/**
 * Helper class for units conversion.
 */
class UnitsHelper {
    /**
     * Convert from one unit to another.
     * https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51
     * @param value To convert the units.
     * @param unitFrom The source unit of the value.
     * @param unitTo The destination unit of the value.
     * @returns The converted value.
     */
    static convertUnits(value, unitFrom, unitTo) {
        if (!numberHelper_1.NumberHelper.isFloatString(value)) {
            throw new dataError_1.DataError("The value must be a number formatted as a string");
        }
        if (stringHelper_1.StringHelper.isEmpty(unitFrom)) {
            throw new dataError_1.DataError("The unitFrom can not be empty");
        }
        if (!(unitFrom in UnitsHelper.UNIT_MAP)) {
            throw new dataError_1.DataError(`The unitFrom must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
        }
        if (stringHelper_1.StringHelper.isEmpty(unitTo)) {
            throw new dataError_1.DataError("The unitTo can not be empty");
        }
        if (!(unitTo in UnitsHelper.UNIT_MAP)) {
            throw new dataError_1.DataError(`The unitTo must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
        }
        if (unitTo === unitFrom) {
            return value;
        }
        else {
            // First strip and remember any negative
            const isNeg = value[0] === "-";
            let workingValue = value.replace("-", "");
            // If the first character is a dot then prepend 0
            if (workingValue[0] === ".") {
                workingValue = `0${workingValue}`;
            }
            // Now sanitize the number to make sure it has a dot
            const dotIndex = workingValue.indexOf(".");
            if (dotIndex < 0) {
                // There is no dot then add one
                workingValue = `${workingValue}.0`;
            }
            const dotFromEnd = workingValue.length - workingValue.indexOf(".");
            const moveDotBy = UnitsHelper.UNIT_MAP[unitFrom] - UnitsHelper.UNIT_MAP[unitTo];
            if (moveDotBy > 0) {
                // Pad the string by as many characters from its current dot position
                // so there is room to move the dot
                const additionalCharacters = moveDotBy - dotFromEnd + 1;
                if (additionalCharacters > 0) {
                    // Add additional characters only if we need them
                    workingValue = `${workingValue}${"0".repeat(additionalCharacters)}`;
                }
            }
            else {
                // Pad the string by as many characters from its current dot position
                // so there is room to move the dot
                const additionalCharacters = Math.abs(moveDotBy - dotFromEnd + 2);
                workingValue = `${"0".repeat(additionalCharacters)}${workingValue}`;
            }
            // Remove current dot and add moved dot back in
            const newDotIndex = workingValue.indexOf(".");
            workingValue = workingValue.replace(".", "");
            workingValue = `${workingValue.substr(0, newDotIndex + moveDotBy)}.${workingValue.substr(newDotIndex + moveDotBy)}`;
            // Strip any leading zeros
            workingValue = workingValue.replace(/^0+(?!\.|$)/, "");
            // Strip any trailing zeros and dot zeros
            workingValue = workingValue.replace(/(\.[0-9]*[1-9])0*|\.0*/, "$1");
            // Add the negative back if there was one
            if (isNeg) {
                workingValue = `-${workingValue}`;
            }
            return workingValue;
        }
    }
}
/**
 * Conversion table for units.
 */
UnitsHelper.UNIT_MAP = {
    i: 0,
    Ki: 3,
    Mi: 6,
    Gi: 9,
    Ti: 12,
    Pi: 15
};
exports.UnitsHelper = UnitsHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdHNIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy91bml0c0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFFL0M7O0dBRUc7QUFDSDtJQWFJOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLE1BQWM7UUFDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxJQUFJLHFCQUFTLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxnQ0FBZ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFN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