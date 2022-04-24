/* ### PaginationHelper

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

*/

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
	this.collection = collection;
	this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
	return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
	return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
	if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
		return -1;
	}

	return (
		this.itemsPerPage - Math.ceil((((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) % this.itemsPerPage)
	);
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
	if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
		return -1;
	}

	return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
};

//TEST
describe('Solution', function() {
	it('should test for something', function() {
		collection = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];
		helper = new PaginationHelper(collection, 10);

		Test.expect(helper.pageCount() == 3, 'pageCount is returning incorrect value.');

		Test.expect(helper.pageItemCount(1) == 10, 'pageItemCount is returning incorrect value.');
		Test.expect(helper.pageItemCount(2) == 4, 'pageItemCount is returning incorrect value');
		Test.expect(helper.pageItemCount(3) == -1, 'pageItemCount is returning incorrect value');
		Test.expect(
			helper.pageIndex(40) == -1,
			'pageIndex returned incorrect value when provided a itemIndex argument that was out of range'
		);

		Test.expect(helper.pageIndex(22) == 2, 'pageIndex returned incorrect value');
		Test.expect(helper.pageIndex(3) == 0, 'pageIndex returned incorrect value');
		Test.expect(helper.pageIndex(0) == 0, 'pageIndex returned incorrect value. pageIndex(0) should return 0');
		Test.expect(
			helper.pageIndex(-1) == -1,
			'pageIndex returned incorrect value when provided a itemIndex argument that was out of range. pageIndex(-1) should return -1'
		);
		Test.expect(
			helper.pageIndex(-23) == -1,
			'pageIndex returned incorrect value when provided a item_index argument that was out of range. pageIndex(-23) shoudl return -1'
		);
		Test.expect(
			helper.pageIndex(-15) == -1,
			'pageIndex returned incorrect value when provided a item_index argument that was out of range.'
		);

		Test.expect(helper.itemCount() == 24, 'itemCount returned incorrect value');

		helper = new PaginationHelper([], 10);
		Test.assertEquals(helper.pageIndex(0), -1, 'pageIndex(0) called when there was an empty collection');
	});
});

/* Other solutions
#1
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}

#2
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = Math.ceil(collection.length / itemsPerPage)
  }
  
  itemCount() {
    return this.collection.length
  }
  
  pageCount() {
    return this.pages
  }
  
  pageItemCount(pageIndex) {
    if (pageIndex >= this.pages || pageIndex < 0) {
      return -1
    } else if (pageIndex === this.pages - 1) {
      return (this.collection.length % this.itemsPerPage)
    } else {
      return this.itemsPerPage
    }
  }
  
  pageIndex(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.collection.length) {
      return Math.max(Math.ceil(itemIndex / this.itemsPerPage) - 1, 0)
    } else {
      return -1
    }
  }
}

#3
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection, this.len = this.collection.length, this.ipp = itemsPerPage;
}
PaginationHelper.prototype.itemCount = function() {return this.len;}
PaginationHelper.prototype.pageCount = function() {return Math.ceil(this.len / this.ipp);}
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var pc = this.pageCount();
  return pc <= pageIndex || pageIndex < 0 ? -1 : pc - 1 == pageIndex ? this.len % this.ipp : this.ipp;
}
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return this.len <= itemIndex || itemIndex < 0 ? -1 : Math.floor(itemIndex / this.ipp);
}

#4
class PaginationHelper {
  constructor(a, p) { Object.assign(this, {a, p}) };  
  itemCount() { return this.a.length };  
  pageCount() { return -~(this.a.length / this.p) };
  pageItemCount(i) { return i<this.pageCount() ? (i+1)*this.p <= this.itemCount() ? this.p : this.itemCount() % this.p : -1 }
  pageIndex(i) { return i < 0 || i >= this.itemCount() ? -1 : i / this.p | 0 }  
}
*/
