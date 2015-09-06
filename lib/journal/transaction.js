/**
 * Transaction
 * @return {Transaction}
 */
function Transaction() {
  
  if( !(this instanceof Transaction) )
    return new Transaction()
  
}

/**
 * Transaction prototype
 * @type {Object}
 */
Transaction.prototype = {
  
  constructor: Transaction,
  
}

// Exports
module.exports = Transaction
