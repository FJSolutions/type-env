require('ts-node').register()
const { configure } = require('japa')

configure({
  files: [
    'tests/*.test.ts',
  ]
})