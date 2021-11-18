import HashMap from './HashMap';

class HashMultiset {
  private hashMap:HashMap<number>;
  //private hashMap:Map<string,number>;
  /**
   * constructs a new HashMultiset with a HashMap with size slots
   */
  constructor(size?:number) {

  }
  /**
   * checks if item occurs at least once in HashMultiSet
   * @param item - item to check if it's present
   * @returns true exactly when the item occurs at least once in the set
   */
  has(item:string):boolean {

  }
  /**
   * adds item to multiset
   * @param item - item to add
   * @param times - number of times to add item
   */
  add(item:string,times:number=1):void {

  }
  /**
   * returns number of times item occurs in multiset
   * @param item - the item to count
   * @returns number of occurrences of item
   */
  count(item:string):number {

  }
  /**
   * multiplies number of times each item occurs by n
   * @param n - number to scale each item's occurrences by
   */
  scaledBy(n:number):void {

  }
  /**
   * returns the union of this multiset with set S
   * The union of two multisets A and B is the set of elements
   * that appear in A or in B (create a new set to do this)
   * with frequency the max of the occurrences in each set
   * @param S - the hashmultiset to take a union with
   * @returns the union of this multiset and S
   */
  union(S:HashMultiset):HashMultiset {
    
  }
  /** 
   * returns true exactly when this bag is a subbag of S
   * A is a subbag of S exactly when every element in 
   * A occurs at least as many times in S
   * @param S - the multiset to check
   * @returns true exactly when this multiset is a subbag of S
   */
  
  isSubBagOf(S:HashMultiset):boolean {
    
  }
}

export default HashMultiset;