[@iota-pico/data](../README.md) > [Transaction](../classes/transaction.md)



# Class: Transaction


A class for handling transactions.

## Index

### Properties

* [address](transaction.md#address)
* [attachmentTimestamp](transaction.md#attachmenttimestamp)
* [attachmentTimestampLowerBound](transaction.md#attachmenttimestamplowerbound)
* [attachmentTimestampUpperBound](transaction.md#attachmenttimestampupperbound)
* [branchTransaction](transaction.md#branchtransaction)
* [bundle](transaction.md#bundle)
* [currentIndex](transaction.md#currentindex)
* [lastIndex](transaction.md#lastindex)
* [nonce](transaction.md#nonce)
* [obsoleteTag](transaction.md#obsoletetag)
* [signatureMessageFragment](transaction.md#signaturemessagefragment)
* [tag](transaction.md#tag)
* [timestamp](transaction.md#timestamp)
* [trunkTransaction](transaction.md#trunktransaction)
* [value](transaction.md#value)
* [CHECK_VALUE](transaction.md#check_value)
* [CHECK_VALUE_LENGTH](transaction.md#check_value_length)
* [LENGTH](transaction.md#length)


### Methods

* [toString](transaction.md#tostring)
* [toTrytes](transaction.md#totrytes)
* [fromParams](transaction.md#fromparams)
* [fromTrytes](transaction.md#fromtrytes)



---
## Properties
<a id="address"></a>

###  address

**●  address**:  *[Address](address.md)* 

*Defined in [data/transaction.ts:27](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L27)*





___

<a id="attachmenttimestamp"></a>

###  attachmentTimestamp

**●  attachmentTimestamp**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:37](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L37)*





___

<a id="attachmenttimestamplowerbound"></a>

###  attachmentTimestampLowerBound

**●  attachmentTimestampLowerBound**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:38](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L38)*





___

<a id="attachmenttimestampupperbound"></a>

###  attachmentTimestampUpperBound

**●  attachmentTimestampUpperBound**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:39](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L39)*





___

<a id="branchtransaction"></a>

###  branchTransaction

**●  branchTransaction**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:35](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L35)*





___

<a id="bundle"></a>

###  bundle

**●  bundle**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:33](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L33)*





___

<a id="currentindex"></a>

###  currentIndex

**●  currentIndex**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:31](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L31)*





___

<a id="lastindex"></a>

###  lastIndex

**●  lastIndex**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:32](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L32)*





___

<a id="nonce"></a>

###  nonce

**●  nonce**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:40](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L40)*





___

<a id="obsoletetag"></a>

###  obsoleteTag

**●  obsoleteTag**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:29](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L29)*





___

<a id="signaturemessagefragment"></a>

###  signatureMessageFragment

**●  signatureMessageFragment**:  *[SignatureMessageFragment](signaturemessagefragment.md)* 

*Defined in [data/transaction.ts:26](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L26)*





___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:36](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L36)*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:30](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L30)*





___

<a id="trunktransaction"></a>

###  trunkTransaction

**●  trunkTransaction**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:34](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L34)*





___

<a id="value"></a>

###  value

**●  value**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:28](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L28)*





___

<a id="check_value"></a>

### «Static» CHECK_VALUE

**●  CHECK_VALUE**:  *`string`*  =  "9".repeat(Transaction.CHECK_VALUE_LENGTH)

*Defined in [data/transaction.ts:21](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L21)*





___

<a id="check_value_length"></a>

### «Static» CHECK_VALUE_LENGTH

**●  CHECK_VALUE_LENGTH**:  *`number`*  = 16

*Defined in [data/transaction.ts:18](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L18)*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 2673

*Defined in [data/transaction.ts:15](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L15)*





___


## Methods
<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/transaction.ts:171](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L171)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/transaction.ts:163](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L163)*



Convert the transaction to trytes.




**Returns:** [Trytes](trytes.md)
The transaction as trytes.






___

<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(signatureMessageFragment: *[SignatureMessageFragment](signaturemessagefragment.md)*, address: *[Address](address.md)*, value: *`number`*, obsoleteTag: *[Tag](tag.md)*, timestamp: *`number`*, currentIndex: *`number`*, lastIndex: *`number`*, bundle: *[Hash](hash.md)*, trunkTransaction: *[Hash](hash.md)*, branchTransaction: *[Hash](hash.md)*, tag: *[Tag](tag.md)*, attachmentTimestamp: *`number`*, attachmentTimestampLowerBound: *`number`*, attachmentTimestampUpperBound: *`number`*, nonce: *[Tag](tag.md)*): [Transaction](transaction.md)



*Defined in [data/transaction.ts:65](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L65)*



Create instance of transaction from parameters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureMessageFragment | [SignatureMessageFragment](signaturemessagefragment.md)   |  The signature message fragment. |
| address | [Address](address.md)   |  The address. |
| value | `number`   |  The value. |
| obsoleteTag | [Tag](tag.md)   |  Obsolete transaction tag. |
| timestamp | `number`   |  The timestamp. |
| currentIndex | `number`   |  The current index. |
| lastIndex | `number`   |  The last index. |
| bundle | [Hash](hash.md)   |  The bundle. |
| trunkTransaction | [Hash](hash.md)   |  The trunk transaction. |
| branchTransaction | [Hash](hash.md)   |  The branch transaction. |
| tag | [Tag](tag.md)   |  The tag. |
| attachmentTimestamp | `number`   |  The attachment timestamp. |
| attachmentTimestampLowerBound | `number`   |  The attachment timestamp lower bound. |
| attachmentTimestampUpperBound | `number`   |  The attachment timestamp upper bound. |
| nonce | [Tag](tag.md)   |  The nonce. |





**Returns:** [Transaction](transaction.md)
New instance of transaction.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(trytes: *[Trytes](trytes.md)*): [Transaction](transaction.md)



*Defined in [data/transaction.ts:104](https://github.com/iotaeco/iota-pico-data/blob/5a71c27/src/data/transaction.ts#L104)*



Create instance of transaction from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)   |  The trytes for the this. |





**Returns:** [Transaction](transaction.md)
An instance of this.






___

