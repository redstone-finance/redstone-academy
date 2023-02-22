/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    { type: 'doc', label: 'Intro', id: 'docs-intro' },
    {
      type: 'category',
      label: 'Warp Contracts SDK',
      items: [
        { type: 'doc', label: 'Overview', id: 'sdk/overview' },
        {
          type: 'category',
          label: 'Basics',
          items: [
            { type: 'doc', label: 'Installation', id: 'sdk/basic/installation' },
            { type: 'doc', label: 'Warp Factory', id: 'sdk/basic/factory' },
            { type: 'doc', label: 'Contract methods', id: 'sdk/basic/contract-methods' },
            { type: 'doc', label: 'Contract Deployment', id: 'sdk/basic/deployment' },
            { type: 'doc', label: 'Contracts upgrades', id: 'sdk/basic/evolve' },
            { type: 'doc', label: 'SmartWeave Global API', id: 'sdk/basic/smartweave-global' },
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            { type: 'doc', label: 'SmartWeave protocol', id: 'sdk/advanced/smartweave-protocol' },
            { type: 'doc', label: 'WASM', id: 'sdk/advanced/wasm' },
            { type: 'doc', label: 'Internal contract calls', id: 'sdk/advanced/internal-calls' },
            { type: 'doc', label: 'Contract manifest', id: 'sdk/advanced/manifest' },
            { type: 'doc', label: 'KV Storage', id: 'sdk/advanced/kv-storage' },
            { type: 'doc', label: 'Custom Warp instance', id: 'sdk/advanced/custom-warp' },
            { type: 'doc', label: 'Custom transactions signing', id: 'sdk/advanced/custom-signing' },
            {
              type: 'category',
              label: 'Plugins',
              items: [
                { type: 'doc', label: 'Overview', id: 'sdk/advanced/plugins/overview' },
                { type: 'doc', label: 'Deployment', id: 'sdk/advanced/plugins/deployment' },
                { type: 'doc', label: 'Subscription', id: 'sdk/advanced/plugins/subscription' },
                { type: 'doc', label: 'Signature', id: 'sdk/advanced/plugins/signature' },
                { type: 'doc', label: 'Evaluation Progress', id: 'sdk/advanced/plugins/evaluation-progress' },
                { type: 'doc', label: 'Isolated-VM', id: 'sdk/advanced/plugins/isolated-vm' },
                { type: 'doc', label: 'SmartWeave extension - NLP', id: 'sdk/advanced/plugins/nlp' },
                { type: 'doc', label: 'SmartWeave extension - Ethers', id: 'sdk/advanced/plugins/ethers' },
                { type: 'doc', label: 'Custom SmartWeave extension', id: 'sdk/advanced/plugins/custom-extension' },
              ],
            },
            { type: 'doc', label: 'Bundled contract format', id: 'sdk/advanced/bundled-contract' },
            { type: 'doc', label: 'Register contract', id: 'sdk/advanced/register-contract' },
            { type: 'doc', label: 'VM2 sandboxing', id: 'sdk/advanced/vm2' },
            { type: 'doc', label: 'VRF', id: 'sdk/advanced/vrf' },
            { type: 'doc', label: 'Unsafe client', id: 'sdk/advanced/unsafe-client' },
            { type: 'doc', label: 'Cache', id: 'sdk/advanced/cache' },
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Warp Sequencer',
      id: 'sdk/advanced/bundled-interaction',
    },
    {
      type: 'doc',
      label: 'Warp Syncer',
      id: 'syncer/overview',
    },
    {
      type: 'category',
      label: 'Warp Gateway',
      items: [
        { type: 'doc', label: 'Overview', id: 'gateway/overview' },
        { type: 'doc', label: 'Installation & running', id: 'gateway/installation' },
        {
          type: 'category',
          label: 'HTTP Api',
          items: [
            {
              type: 'category',
              label: 'GET requests',
              items: [
                {
                  type: 'doc',
                  label: 'Contracts',
                  id: 'gateway/http/get/contracts',
                },
                {
                  type: 'doc',
                  label: 'Contract',
                  id: 'gateway/http/get/contract',
                },
                {
                  type: 'doc',
                  label: 'Contract data',
                  id: 'gateway/http/get/contract-data',
                },
                {
                  type: 'doc',
                  label: 'Search',
                  id: 'gateway/http/get/search',
                },
                {
                  type: 'doc',
                  label: 'NFTs owned by address',
                  id: 'gateway/http/get/nft-owned-by-address',
                },
                {
                  type: 'doc',
                  label: 'Interactions',
                  id: 'gateway/http/get/interactions',
                },
                {
                  type: 'doc',
                  label: 'Interaction',
                  id: 'gateway/http/get/interaction',
                },
                {
                  type: 'doc',
                  label: 'Stats - total transactions',
                  id: 'gateway/http/get/stats-total-txs',
                },
                {
                  type: 'doc',
                  label: 'Stats - transactions per day',
                  id: 'gateway/http/get/stats-per-day',
                },
                {
                  type: 'doc',
                  label: 'Arweave network info',
                  id: 'gateway/http/get/arweave-info',
                },
                {
                  type: 'doc',
                  label: 'Arweave network info',
                  id: 'gateway/http/get/arweave-info',
                },
                {
                  type: 'doc',
                  label: 'Arweave network block height',
                  id: 'gateway/http/get/arweave-block',
                },
                {
                  type: 'doc',
                  label: 'Contract source',
                  id: 'gateway/http/get/contract-source',
                },
                {
                  type: 'doc',
                  label: 'Contracts by source',
                  id: 'gateway/http/get/contracts-by-source',
                },
                {
                  type: 'doc',
                  label: 'Creator',
                  id: 'gateway/http/get/creator',
                },
              ],
            },
            {
              type: 'category',
              label: 'POST requests',
              items: [
                {
                  type: 'doc',
                  label: 'Deploy contract',
                  id: 'gateway/http/post/deploy-contract',
                },
                {
                  type: 'doc',
                  label: 'Deploy contract source',
                  id: 'gateway/http/post/deploy-source',
                },
                {
                  type: 'doc',
                  label: 'Deploy bundled contract',
                  id: 'gateway/http/post/deploy-bundled',
                },
                {
                  type: 'doc',
                  label: 'Register contract',
                  id: 'gateway/http/post/register-contract',
                },
                {
                  type: 'doc',
                  label: 'Sequencer',
                  id: 'gateway/http/post/sequencer',
                }
              ],
            },
          ],
        },
      ],
    },
    { type: 'category', label: 'Warp Contracts CLI', items: [
      {
        type: 'doc',
        label: 'Installation',
        id: 'cli/installation'
      },
      {
        type: 'doc',
        label: 'Usage',
        id: 'cli/usage'
      },
      {
        type: 'doc',
        label: 'Commands',
        id: 'cli/commands'
      }
    ] },
    {
      type: 'doc',
      label: 'Warp D.R.E. Node',
      id: 'dre/overview',
    },
    {
      type: 'doc',
      label: 'Warp Aggregate Node',
      id: 'aggregate-node/overview',
    },
    // { type: 'doc', label: 'Evolve', id: 'evolve' },
    // { type: 'doc', label: 'Internal calls', id: 'internal-calls' },
    // { type: 'doc', label: 'VRF', id: 'vrf' },
    // { type: 'doc', label: 'SmartWeave Global', id: 'smartweave-global' },
  ],
};

module.exports = sidebars;
