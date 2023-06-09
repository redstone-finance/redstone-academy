# Interacting with the contract

We are displaying all the balances in the `BalancesList` component. We have access to the list thanks to `state` property we defined in the store in the Preparations section.
Now all we need to do is find a way to properly mint some FC tokens to the wallet and transfer tokens between addresses.

## 🤑 Mint tokens

We need to add `mint` function so it will be possible to fill up the wallet with some tokens.
Head to [challenge/src/components/Header/Header.vue](https://github.com/warp-contracts/academy/blob/main/warp-academy-pst/challenge/src/components/Header/Header.vue) and add declaration to `txId` variable in `mint` function by calling SDK's `writeInteraction` method:

```js
const {originalTxId: txId} = await this.contract.writeInteraction({
  function: 'mint',
  qty: parseInt(this.$refs.balanceMint.value),
});
```

...and set the balances by calling SDK's `currentState` method:

```js
const newResult = await this.contract.currentState();
```

## 💸 Transfer tokens

Head to [challenge/src/components/BalancesList/BalancesList.vue](https://github.com/warp-contracts/academy/blob/main/warp-academy-pst/challenge/src/components/BalancesList/BalancesList.vue) and add declaration to `tx` variable by calling SDK's `transfer` method:

```js
const {originalTxId: txId} = await this.contract.writeInteraction({
  function: 'mint',
  qty: parseInt(this.$refs.balanceMint.value),
});
```

Finally, set the new balances list by calling `currentState` method:

```js
let newResult = await this.contract.currentState();
```

## ✨ Conclusion

And that's it! The application should now work correctly. Congratulations! If you completed this tutorial succesfully feel free to publish your code on Github and share it on `[our Discord](https://discord.com/invite/McehtcpmST).
