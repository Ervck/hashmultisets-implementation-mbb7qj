import HashMap from './HashMap';

// SIMPLIFYING REQUIREMENT : Different elements of type T must return different strings when toString() is called on them

// NEED TO COMMENT OUT ANYTHING INVOLVING this.hashSet AS THIS USES BUILT-IN SET CLASS

class Hashset<T> {
  private hashMap:HashMap<T>;
  private hashSet:Set<T>;

  /**
   * constructs a new Hashset with a HashMap with size slots
   */
  constructor(size?:number) {
    this.hashSet = new Set<T>();
  }
  /**
   * checks if item is present in set
   * @param item - item to check if it's present
   * @returns true exactly when the item is present in the set
   */
  has(item:T):boolean {
    return this.hashSet.has(item);
  }
  /**
   * adds item to set if it's not already present
   * @param item - item to add
   * @returns the set object (this)
   */
  add(item:T):Hashset<T> {
    // when adding items to the hash map, 
    // convert the item to a string using .toString()
    // values are items themselves
    this.hashSet.add(item);
    return this;
  }

  /**
   * removes item from set if it's present
   * @returns true if item was present before removing
   */
  delete(item:T):boolean {
    return this.hashSet.delete(item);
  }

  /**
   * returns the union of this set with set S
   * The union of two sets A and B is the set of elements
   * that appear in A or in B (create a new set to do this)
   * @param S - the hashset to take a union with
   * @returns the union of this set and S
   */
  union(S:Hashset<T>):Hashset<T> {

  const result = new Hashset<T>();
  const iter = S.values();
  for (let i = iter.next(); !i.done; i = iter.next()){
      result.add(i.value); 
  }
  const iter2nd = this.values();
  for (let i = iter2nd.next(); !i.done; i = iter2nd.next()){
      result.add(i.value);
  }
  return result;

  }
  /**
   * returns the intersection of this set with set S
   * The intersection of two sets A and B is the set of elements
   * that appear in *BOTH* A and B (create a new set to do this)
   * @param S - the hashset to take an intersection with
   * @returns the intersection of this set and S
   */
  intersect(S:Hashset<T>):Hashset<T> {
    /*
    const result = new Hashset<T>();
    const iter = S.values();

   for (let i = iter.next(); !i.done; i = iter.next()){
    
   }

   */
  }
  /**
   * returns the difference of this set with set S
   * The difference of two sets A and B is the set of elements
   * that appear in A and do *NOT* appear in B (create a new set to do this)
   * @param S - takes the difference of S from this set
   * @returns the difference of this set and S
   */
  difference(S:Hashset<T>):Hashset<T> {
    
  }
  /** 
   * returns true exactly when this set is a subset of S
   * A is a subset of S exactly when every element in 
   * A occurs in S
   * @param S - the set to check
   * @returns true exactly when this set is a subset of S
   */
  
  isSubsetOf(S:Hashset<T>):boolean {
    return Array.from(this.hashSet).every(x => S.hashSet.has(x));
  }

  /**
   * number of items in set
   */
  get size():number {
    return this.hashSet.size;
  }

  /**
   * THIS IS SIMPLIFIED A LITTLE - specification allows optional context
   * Calls callbackFn(item) for each item in set
   * 
   * @param callbackFn - the function to call
   */
  public forEach(callbackFn: (item:T) => void):void {
    // implement this
    this.hashSet.forEach(callbackFn); 
  }

  /**
   * creates and returns an Iterator of items in the set
   * (DOCS also require this be done in insertion order)
   * @returns Iterator of values
   */
  public *values():IterableIterator<T> {
    yield *this.hashSet.values();
    //yield true;
  }
}

export default Hashset;