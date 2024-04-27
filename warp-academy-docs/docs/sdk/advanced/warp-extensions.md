# Warp Extensions

### Input in data

According to the [SmartWeave protocol](./smartweave-protocol.md), input of the interaction can be stored in its tags, more specifically - in the Input tag. However, we are then limited by the transaction tag’s size limit - 4kb for the transaction (including all the default tags that Warp applies). Due to this problem, a new way of storing input - in the data field of the transaction - was introduced in Warp. It does not require any changes from the user perspective. Warp SDK checks the input size and decide wether it should be placed in the tag or - if it exceeds the limit - in the data field of the transaction. Interaction is then sent to the Warp Sequencer and indexed as usual - so it is available in all of the Warp tools as it’s been before. Particularly - contract state of the contract is evaluated regardless of the input type.

A new tag - `Input-Format` has been added to the interaction. It is set to either tag or data depending on the size of the interaction input, defaulting to the tag field if transaction tag size is less than the 4kb limit. However, to override this default behavior and explicitly have interaction input placed in the data field, `writeInteraction` should be called with the `inputFormatAsData` option set to `true`.

<details>
  <summary>Example</summary>

```typescript
const result = await contract.writeInteraction(
  {
    function: "NAME_OF_YOUR_FUNCTION",
    data: { ... },
  },
  { inputFormatAsData: true }
);
```
</details>

As of now, limit for the interaction data item is set to 20kb. New feature works only for the bundled data items (so no way of sending big inputs in Arweave L1 interactions).
