var HFS = module.exports

HFS.VERSION_STRING = "hfs-2 (4-12-99)"

// ???
HFS.LINK_MAX = 32767
// ???
HFS.MAX_DEFERRED_ALLOC = 1024 * 1024

// 400 megs is a "big" file (i.e. one that when deleted
// would touch enough data that we should break it into
// multiple separate transactions)
HFS.BIGFILE_SIZE = 400 * 1024 * 1024

// Size of I/O transfer to read entire MDB (???)
// (MDB = Master Directory Block)
HFS.MDB_SIZE = 512
HFS.MDB_OFFSET = 2

// HFS mount point flags
HFS.READ_ONLY            = 0x001
HFS.UNKNOWN_PERMS        = 0x002
HFS.WRITEABLE_MEDIA      = 0x004
HFS.CLEANED_ORPHANS      = 0x008
HFS.X                    = 0x010
HFS.CASE_SENSITIVE       = 0x020
HFS.STANDARD             = 0x040
HFS.METADATA_ZONE        = 0x080
HFS.FRAGMENTED_FREESPACE = 0x100
HFS.NEED_JNL_RESET       = 0x200
HFS.HAS_SPARSE_DEVICE    = 0x400

/**
 * VFS/HFS Journal
 * @type {Function}
 */
HFS.Journal = require( './journal' )
