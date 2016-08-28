var testArray = [ "Utah", "Maine", "Virginia", "South Carolina", "Hawaii", "Michigan", "Kansas", "North Dakota", "Iowa", "Oregon", "Arkansas", "Connecticut", "Florida", "Rhode Island", "Nevada", "Montana", "West Virginia", "Georgia", "Alaska", "Tennessee", "California", "Idaho", "Kentucky", "Maryland", "Missouri", "New Mexico", "Ohio", "Wisconsin", "Illinois", "Mississippi", "Delaware", "New York", "North Carolina", "Colorado", "Wyoming", "Texas", "Washington", "New Hampshire", "Louisiana", "South Dakota", "Alabama", "Vermont", "Pennsylvania", "Arizona", "Massachusetts", "New Jersey", "Oklahoma", "Indiana", "Minnesota", "Nebraska" ];
/**
 * Constructor for the Node class.
 * @param {*} data whatever will be stored in the node
 * @returns {Node} instance of the Node class
 */
function Node (data) {
  // ensure Node objects are created with "new" operator
  if (!(this instanceof Node)) {
    return new Node(data);
  }
  this.data = data;
  this.next = null;
}

/**
 * Constructor for the LinkedList class.
 * @param {array|undefined} items optional list of things to store
 * @returns {LinkedList} instance of the LinkedList class
 */
function LinkedList (items) {
  var idx, len;
  
  // ensure LinkedList objects are created with "new" operator
  if (!(this instanceof LinkedList)) {
    return new LinkedList(items);
  }
  
  this.size = 0;
  this.head = null;
  this.tail = null;
  
  // constructor iterates array parameter and calls add() to populate list
  if (items) {
    len = items.length;
    for (idx = 0;idx < len;idx++) {
      this.add(items[idx]);
    }
  }
}

/**
 * Return data from first node.
 * @returns {*} first node data
 */
LinkedList.prototype.getFirst = function () {
  if (this.head) {
    return this.head.data;
  }
}

/**
 * Return data from last node.
 * @returns {*} last node data
 */
LinkedList.prototype.getLast = function () {
  if (this.tail) {
    return this.tail.data;
  }
} 

/**
 * Return data from node at index.
 * @returns {*} index node data
 */
LinkedList.prototype.get = function (index) {
  var idx = 0, curr = this.head;
  
  // invalid index
  if (index < 0 || index >= this.size) {
    return;
  }
  
  // if idx >= index then curr has been set to the index item
  while (idx < index) {
    if (curr) {
      curr = curr.next;
      idx++;
    }
  }
  
  return curr.data;
} 

/**
 * Change data for node at index.
 * @param {number} index node index
 * @param {*} data node data
 */
LinkedList.prototype.set = function (index, data) {
  var idx = 0, curr = this.head;
  
  // invalid index
  if (index < 0 || index >= this.size) {
    return;
  }
  
  // if idx >= index then curr has been set to the index item
  while (idx < index) {
    curr = curr.next;
    idx++;
  }
  curr.data = data;
} 

/**
 * Create node and add it to end.
 * @param {*} data node data
 */
LinkedList.prototype.add = function (data) {
  var temp;

  // only add if we have data        
  if (data) {
    this.size++;
    // get last item
    temp = this.tail;
    
    // set last item to new node
    this.tail = new Node(data);

    // if there was a last item, set it's next to tail
    if (temp) {
      temp.next = this.tail;
    }      
    
    // if head was null, adding first item, so set head to tail              
    if (this.head === null) {
      this.head = this.tail;
    }
  }
} 

/**
 * Create node and add it to start.
 * @param {*} data node data
 */
LinkedList.prototype.addFirst = function (data) {
  var temp;

  // only add if we have data        
  if (data) {
    this.size++;

    // get last item
    temp = this.head;
    
    // set first item to new node
    this.head = new Node(data);

    // set previous head to be the new head next
    this.head.next = temp;
    
    // if tail was null, adding first item, so set head to tail              
    if (this.tail === null) {
      this.tail = this.head;
    }
  }
}

/**
 * Create node and add it to end.
 * @param {*} data node data
 */
LinkedList.prototype.addLast = function (data) {
  // only add if we have data        
  if (data) {
    this.size++;

    // set last item next to new node
    this.tail.next = new Node(data);

    // set new tail to new node
    this.tail = this.tail.next;
    
    // if head was null, adding first item, so set head to tail              
    if (this.head === null) {
      this.head = this.tail;
    }
  }        
} 

/**
 * Create node and add it at index.
 * @param {number} index node index
 * @param {*} data node data
 */
LinkedList.prototype.addAt = function (index, data) {
  var idx = 0, curr = this.head, temp;
  
  // invalid index
  if (index < 0 || index >= this.size) {
    return;
  }
  
  if (index === 0) {
    this.addFirst(data);
    return;
  }

  if (index === this.size - 1) {
    this.addLast(data);
    return;
  }

  this.size++;
          
  if (data) {
    // if idx >= index - 1 then curr has been set to the item at index
    while (idx < index - 1) {
      if (curr) {
        curr = curr.next;
        idx++;
      }
    }
    
    // curr is at the index where we want to add
    temp = curr.next;      
    curr.next = new Node(data);  
    curr.next.next = temp;
  }
} 

/**
 * Remove and return first occurence of node with data.
 * @param {*} data node data
 * @returns {Node} first node with data, -1 if not found
 */
LinkedList.prototype.remove = function (data) {
  var curr = this.head, prev, idx = 0;
  
  if (data) {
    // if idx >= this.size then curr has been set to the item at index
    while (idx < this.size) {
      if (curr.data === data) {
        if (prev) {
          prev.next = curr.next;
        } else {
          this.head = curr.next;
        }
        this.size--;
        break;
      } else {
        prev = curr;
        curr = curr.next;
        idx++;              
      }
    }   
    return curr || -1;       
  }
  return -1;
} 

/**
 * Remove and return first node.
 * @returns {Node} first node, -1 if list empty
 */
LinkedList.prototype.removeFirst = function () {
  var temp;
  
  if (this.head) {
    temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp;
  }
  return -1;
}

/**
 * Remove and return last node.
 * @returns {Node} last node, -1 if list empty
 */
LinkedList.prototype.removeLast = function () {
  if (this.tail) {
    if (this.size <= 1) {
      return this.removeFirst();
    }
    return this.removeAt(this.size - 1);
  }

  return -1;        
} 

/**
 * Remove and return node at index.
 * @param {number} index node index
 * @returns {Node} node at index
 */
LinkedList.prototype.removeAt = function (index) {
  var idx = 0, curr = this.head, temp;
  
  // invalid index
  if (index < 0 || index >= this.size) {
    return;
  }
  
  if (index === 0) {
    temp = this.head;
    this.head = temp.next;
    this.size--;
    return temp;
  }
  
  // if idx >= index - 1 then curr has been set to the item before the index item
  while (idx < index - 1) {
    if (curr) {
      curr = curr.next;
      idx++;
    }
  }
  
  temp = curr.next;
  curr.next = temp.next;  
  this.tail = curr;
  this.size--;
  
  return temp;
}

/**
 * Iterate over nodes, return string "[data1, data2, ...]".
 * @returns {string} node data
 */
LinkedList.prototype.toString = function () {
  var curr = this.head, outStr = '[';
  while (curr) {
    outStr += curr.data;
    if (curr.next) {
      outStr += ', ';
    } 
    curr = curr.next;
  }
  outStr += ']';
  return outStr;
} 

/**
 * Empty the list, removing all nodes, and cleaning properties.
 */
LinkedList.prototype.clear = function () {
  this.size = 0;
  this.head = this.tail = null;
  
} 

/**
 * Return true if list has node with data, otherwise return false.
 * @param {*} data node data
 * @returns {boolean} true if node found, otherwise false
 */
LinkedList.prototype.contains = function (data) {
  return this.indexOf(data) > -1;
}
  
/**
 * Return index of first node with data, otherwise return -1.
 * @param {*} data node data
 * @returns {number} node index, or -1
 */
LinkedList.prototype.indexOf = function (data) {
  var curr = this.head, prev, idx = 0;
  
  if (data) {
    // if idx >= this.size then node with data is not in list
    while (idx < this.size) {
      if (curr.data === data) {
        break;
      } else {
        curr = curr.next;
        idx++;              
      }
    }   
    return idx < this.size ? idx : -1;       
  }
  return -1;  
}

/**
 * Return index of last node with data, otherwise return -1.
 * @param {*} data node data
 * @returns {number} node index, or -1
 */
LinkedList.prototype.lastIndexOf = function (data) {
  var curr = this.head, prev, idx = 0, lastFoundIndex = -1;
  
  if (data) {
    // if idx >= this.size then node with data is not in list
    while (idx < this.size) {
      if (curr.data === data) {
        lastFoundIndex = idx;
      }
      curr = curr.next;
      idx++;              
    }   
  }
  return lastFoundIndex;  
}

/**
 * Return true if list size is zero, otherwise return false.
 * @returns {boolean} true if size zero, otherwise false
 */
LinkedList.prototype.isEmpty = function () {
  return this.size === 0;
}