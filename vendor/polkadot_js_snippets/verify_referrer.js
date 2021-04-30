#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .option('signature', {
    alias: 'sig',
    type: 'string'
  })
  .option('referrer', {
    type: 'string'
  })
  .option('address', {
    alias: 'addr',
    type: 'string'
  })
  .argv

const { cryptoWaitReady, decodeAddress, signatureVerify } = require('@polkadot/util-crypto')

const isValidSignature = (message, signature, publicKey) => {
  return signatureVerify(message, signature, publicKey).isValid;
};

(async() => {
  await cryptoWaitReady()

  const referrer = argv["referrer"]
  const signature = argv["signature"]
  const address = argv["address"]

  try {
    decodeAddress(referrer)
    const publicKey = decodeAddress(address)

    // console.log(message)
    // console.log(signature)
    // console.log(address)

    const isValid = isValidSignature(
      referrer,
      signature,
      publicKey
    );

    console.log(isValid)
    process.exit(isValid ? 0 : 1);
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})();
