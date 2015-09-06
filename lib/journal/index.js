/**
 * Journal
 * @return {Journal}
 */
function Journal() {
  
  if( !(this instanceof Journal) )
    return new Journal()
  
}

// Journal open/create options are always in the low-16 bits
Journal.OPTION_FLAGS_MASK = 0x0000FFFF

// Internal journal flags (top 16 bits)
Journal.CLOSE_PENDING  = 0x00010000
Journal.INVALID        = 0x00020000
Journal.FLUSHCACHE_ERR = 0x00040000 // Means we already printed this err
Journal.NEED_SWAP      = 0x00080000 // Swap any data read from disk
Journal.DO_FUA_WRITES  = 0x00100000 // Do force-unit-access writes
Journal.USE_UNMAP      = 0x00200000 // Device supports UNMAP (TRIM)

// Flags for journal create/open. Only can use 
// the low 16 bits for flags because internal 
// bits go in the high 16.
Journal.NO_GROUP_COMMIT = 0x00000001
Journal.RESET           = 0x00000002

// Journal Header structure
Journal.Header = require( './header' )
// Journal Transaction structure
Journal.Transaction = require( './transaction' )

/**
 * Journal prototype
 * @type {Object}
 */
Journal.prototype = {
  
  constructor: Journal,
  
  startTransaction: function() {},
  startBlock: function( bp ) {},
  abortBlock: function( bp ) {},
  endBlock: function( bp ) {},
  killBlock: function( bp ) {},
  endTransaction: function() {},
  
  addTrim: function( offset, length ) {},
  removeTrim: function( offset, length ) {},
  
}

// Exports
module.exports = Journal
