var expect = chai.expect;

describe ('Node', function () {
  const testDataOne = "10";
  const testDataTwo = "20";
  
  let node, temp, index, len;
  
  beforeEach (function () {
    node = new Node(testDataOne);
    temp = null;
    index = null;
    len = null;
  });

  it ('should not be undefined', function () {
    expect(node).to.not.be.undefined;
  });
  
  it ('should be correct type', function () {
    expect(node instanceof Node).to.be.true;
  });
  
  it ('should not be incorrect type', function () {
    expect(node instanceof LinkedList).to.be.false;
  });

  it ('should have data passed to constructor', function () {
    expect(node.data).to.equal(testDataOne);
  });
  
  it ('should not have data different from data passed to constructor', function () {
    expect(node.data).to.not.equal(testDataTwo);
  });

  it ('should have proper default value for "next" property', function () {
    expect(node.next).to.be.null;
  });
});

describe ('LinkedList', function () {
  const testArrayOne = [ "Utah", "Maine", "Virginia", "South Carolina", "Hawaii", "Michigan", "Kansas", "North Dakota", "Iowa", "Oregon", "Arkansas", "Connecticut", "Florida", "Rhode Island", "Nevada", "Montana", "West Virginia", "Georgia", "Alaska", "Tennessee", "California", "Idaho", "Kentucky", "Maryland", "Missouri", "New Mexico", "Ohio", "Wisconsin", "Illinois", "Mississippi", "Delaware", "New York", "North Carolina", "Colorado", "Wyoming", "Texas", "Washington", "New Hampshire", "Louisiana", "South Dakota", "Alabama", "Vermont", "Pennsylvania", "Arizona", "Massachusetts", "New Jersey", "Oklahoma", "Indiana", "Minnesota", "Nebraska" ];
  
  const testArrayOneStr = "[Utah, Maine, Virginia, South Carolina, Hawaii, Michigan, Kansas, North Dakota, Iowa, Oregon, Arkansas, Connecticut, Florida, Rhode Island, Nevada, Montana, West Virginia, Georgia, Alaska, Tennessee, California, Idaho, Kentucky, Maryland, Missouri, New Mexico, Ohio, Wisconsin, Illinois, Mississippi, Delaware, New York, North Carolina, Colorado, Wyoming, Texas, Washington, New Hampshire, Louisiana, South Dakota, Alabama, Vermont, Pennsylvania, Arizona, Massachusetts, New Jersey, Oklahoma, Indiana, Minnesota, Nebraska]";

  const testArrayTwo = [ "one", "two", "three", "one", "four", "five", "two", "three", "five" ];
  const testArrayTwoStr = "[one, two, three, one, four, five, two, three, five]";
  
  let linkedList, len;
  
  beforeEach (function () {
    linkedList = new LinkedList(testArrayOne);
    len = linkedList.size;
  });

  describe ('basic tests', function () {
    it ('should not be undefined', function () {
      expect(linkedList).to.not.be.undefined;
    });

    it ('should be correct type', function () {
      expect(linkedList instanceof LinkedList).to.be.true;
    });
    
    it ('should not be incorrect type', function () {
      expect(linkedList instanceof Node).to.be.false;
    });
    
    it ('should have data passed to constructor', function () {
      expect(linkedList.toString()).to.equal(testArrayOneStr);
    });
    
    it ('should not have data different from data passed to constructor', function () {
      expect(linkedList.toString()).to.not.equal(testArrayTwoStr);
    });
    
    it ('should have correct initial size', function () {
      expect(linkedList.size).to.equal(50);
    });

    it ('should have correct initial head data value', function () {
      expect(linkedList.head.data).to.equal('Utah');
    });

    it ('should have correct initial tail data value', function () {
      expect(linkedList.tail.data).to.equal('Nebraska');
    });
  });
    
  describe ('tests of individual functions', function () {
    it ('has the correct data using getFirst()', function () {
      expect(linkedList.getFirst()).to.equal('Utah');
    });

    it ('has the correct data using getLast()', function () {
      expect(linkedList.getLast()).to.equal('Nebraska');
    });
    
    it ('has the correct data using get() with various indexes', function () {
      // positive test cases
      expect(linkedList.get(0)).to.equal('Utah');
      expect(linkedList.get(1)).to.equal('Maine');
      expect(linkedList.get(linkedList.size - 1)).to.equal('Nebraska');
      expect(linkedList.get(linkedList.size - 2)).to.equal('Minnesota');
      expect(linkedList.get(24)).to.equal('Missouri');      
      
      // negative test cases
      expect(linkedList.get(0)).to.not.equal('One');
      expect(linkedList.get(1)).to.not.equal('For');
      expect(linkedList.get(linkedList.size - 1)).to.not.equal('The');
      expect(linkedList.get(linkedList.size - 2)).to.not.equal('Money');
      expect(linkedList.get(24)).to.not.equal('And');      
      expect(linkedList.get(-10)).to.be.undefined;      
      expect(linkedList.get(100)).to.be.undefined;      
    });
    
    it ('has the correct data using set() with various indexes', function () {
      // set data for test cases
      linkedList.set(0, 'hatU');
      linkedList.set(1, 'eniaM');
      linkedList.set(linkedList.size - 1, 'aksarbeN');
      linkedList.set(linkedList.size - 2, 'atosenniM');
      linkedList.set(24, 'iruossiM');      

      // positive test cases
      expect(linkedList.get(0)).to.equal('hatU');
      expect(linkedList.get(1)).to.equal('eniaM');
      expect(linkedList.get(linkedList.size - 1)).to.equal('aksarbeN');
      expect(linkedList.get(linkedList.size - 2)).to.equal('atosenniM');
      expect(linkedList.get(24)).to.equal('iruossiM');      

      // negative test cases
      expect(linkedList.get(0)).to.not.equal('Utah');
      expect(linkedList.get(1)).to.not.equal('Maine');
      expect(linkedList.get(linkedList.size - 1)).to.not.equal('Nebraska');
      expect(linkedList.get(linkedList.size - 2)).to.not.equal('Minnesota');
      expect(linkedList.get(24)).to.not.equal('Missouri'); 
      
      temp = linkedList.set(-10, 'hatU');
      expect(temp).to.be.undefined;     
      temp = linkedList.set(100, 'hatU');
      expect(temp).to.be.undefined;     
      linkedList.set(24);      
      expect(linkedList.get(24)).to.be.undefined;      
    });    
    
    it ('has the correct data using add() to append a node to end', function () {
      linkedList.add('District of Columbia');
      expect(linkedList.get(linkedList.size - 1)).to.equal('District of Columbia');
      expect(linkedList.get(linkedList.size - 1)).to.not.equal('Nebraska');
      expect(linkedList.tail.data).to.equal('District of Columbia');
      expect(linkedList.tail.next).to.be.null;
    });
    
    it ('has the correct data using addFirst() to prepend a node to start', function () {
      linkedList.addFirst('Guam');
      expect(linkedList.get(0)).to.equal('Guam');
      expect(linkedList.get(0)).to.not.equal('Utah');
      expect(linkedList.get(1)).to.equal('Utah');
      expect(linkedList.head.data).to.equal('Guam');
      expect(linkedList.head.next.data).to.equal('Utah');
    });
    
    it ('has the correct data using addLast() to append a node to end', function () {
      linkedList.addLast('Puerto Rico');
      expect(linkedList.get(linkedList.size - 1)).to.equal('Puerto Rico');
      expect(linkedList.get(linkedList.size - 1)).to.not.equal('Nebraska');
      expect(linkedList.get(linkedList.size - 2)).to.equal('Nebraska');
      expect(linkedList.tail.data).to.equal('Puerto Rico');
      expect(linkedList.tail.next).to.be.null;
    });
    
    it ('has the correct data using addAt() to append nodes at various locations', function () {
      linkedList.addAt(0, 'Midway Island');
      linkedList.addAt(1, 'Bikini Atoll');
      linkedList.addAt(linkedList.size - 1, 'Coney Island');
      linkedList.addAt(linkedList.size - 2, 'Mt. Tom');
      linkedList.addAt(24, 'Riverside Park');

      // positive tests
      expect(linkedList.get(0)).to.equal('Midway Island');
      expect(linkedList.get(1)).to.equal('Bikini Atoll');
      expect(linkedList.get(linkedList.size - 1)).to.equal('Coney Island');
      expect(linkedList.get(linkedList.size - 3)).to.equal('Mt. Tom');
      expect(linkedList.get(24)).to.equal('Riverside Park');
      expect(linkedList.head.data).to.equal('Midway Island');
      expect(linkedList.tail.data).to.equal('Coney Island');
      expect(linkedList.tail.next).to.be.null;
      
      // negative tests
      expect(linkedList.get(0)).to.not.equal('Utah');
      expect(linkedList.get(1)).to.not.equal('Maine');
      expect(linkedList.get(linkedList.size - 1)).to.not.equal('Nebraska');
      expect(linkedList.get(linkedList.size - 3)).to.not.equal('Indiana');
      expect(linkedList.get(24)).to.not.equal('Missouri');
      temp = linkedList.addAt(-10, 'Riverside Park');
      expect(temp).to.be.undefined;
      temp = linkedList.addAt(100, 'Riverside Park');
      expect(temp).to.be.undefined;
    });
    
        
    it ('should indicate list created with no items is empty', function () {
      linkedList = new LinkedList();
      expect(linkedList.isEmpty()).to.be.true;
      expect(linkedList.size).to.equal(0);
    });
    
    it('should indicate removeFirst() removed the first item', function () {
      temp = linkedList.removeFirst();
      expect(temp instanceof Node).to.be.true;
      expect(temp.data).to.equal('Utah');
      expect(linkedList.getFirst()).to.not.equal('Utah');
      expect(linkedList.getFirst()).to.equal('Maine');
      expect(linkedList.size).to.equal(49);
    });

    it('should indicate removeFirst() run iteratively removed all items', function () {
      for (index = 0;index < len - 1;index++) {
        temp = linkedList.removeFirst();
        expect(temp instanceof Node).to.be.true;
        expect(temp.data).to.not.be.undefined;
        expect(temp.data).to.not.be.null;
        expect(linkedList.size).to.equal(len - 1 - index);
        expect(linkedList.isEmpty()).to.be.false;
      }
      temp = linkedList.removeFirst();
      expect(temp instanceof Node).to.be.true;
      expect(linkedList.isEmpty()).to.be.true;

      temp = linkedList.removeFirst();
      expect(temp instanceof Node).to.be.false;
      expect(temp).to.not.be.undefined;
      expect(temp).to.not.be.null;
      expect(temp).to.equal(-1);
      expect(linkedList.isEmpty()).to.be.true;
    });
    
    it('should indicate removeLast() removed the last item', function () {
      temp = linkedList.removeLast();
      expect(temp instanceof Node).to.be.true;
      expect(temp.data).to.equal('Nebraska');
      expect(linkedList.getLast()).to.not.equal('Nebraska');
      expect(linkedList.getLast()).to.equal('Minnesota');
      expect(linkedList.size).to.equal(49);
    });

    it('should indicate removeLast() run iteratively removed all items', function () {
      for (index = 0;index < len - 1;index++) {
        temp = linkedList.removeLast();
        expect(temp instanceof Node).to.be.true;
        expect(temp.data).to.not.be.undefined;
        expect(temp.data).to.not.be.null;
        expect(linkedList.size).to.equal(len - 1 - index);
        expect(linkedList.isEmpty()).to.be.false;
      }
      temp = linkedList.removeLast();
      expect(temp instanceof Node).to.be.true;
      expect(linkedList.isEmpty()).to.be.true;

      temp = linkedList.removeLast();
      expect(temp instanceof Node).to.be.false;
      expect(temp).to.not.be.undefined;
      expect(temp).to.not.be.null;
      expect(temp).to.equal(-1);
      expect(linkedList.isEmpty()).to.be.true;
    });
    
    it('should indicate removeAt() removed the correct item', function () {
      temp = linkedList.removeAt(0);
      expect(temp instanceof Node).to.be.true;
      expect(temp.data).to.equal('Utah');
      expect(linkedList.getFirst()).to.not.equal('Utah');
      expect(linkedList.getFirst()).to.equal('Maine');
      expect(linkedList.size).to.equal(49);

      temp = linkedList.removeAt(48);
      expect(temp instanceof Node).to.be.true;
      expect(temp.data).to.equal('Nebraska');
      expect(linkedList.getLast()).to.not.equal('Nebraska');
      expect(linkedList.getLast()).to.equal('Minnesota');
      expect(linkedList.size).to.equal(48);

      temp = linkedList.removeAt(24);
      expect(temp instanceof Node).to.be.true;
      expect(temp.data).to.equal('New Mexico');
      expect(linkedList.get(24)).to.not.equal('New Mexico');
      expect(linkedList.get(24)).to.equal('Ohio');
      expect(linkedList.size).to.equal(47);
    });
    
    it('should indicate clear() removed all items and reset properties', function () {
      expect(linkedList.size).to.equal(50);
      expect(linkedList.head).to.not.be.null;
      expect(linkedList.head.data).to.equal('Utah');
      expect(linkedList.tail).to.not.be.null;
      expect(linkedList.tail.data).to.equal('Nebraska');
      linkedList.clear();
      expect(linkedList.size).to.equal(0);
      expect(linkedList.head).to.be.null;
      expect(linkedList.tail).to.be.null;
    });

    it('should indicate if list contains various items', function () {
      expect(linkedList.contains('Utah')).to.be.true;
      expect(linkedList.contains('Ohio')).to.be.true;
      expect(linkedList.contains('Nebraska')).to.be.true;
      expect(linkedList.contains('Springfield')).to.be.false;
    });
    
    describe('tests requiring data with duplicated items', function () {
      beforeEach (function () {
        linkedList = new LinkedList(testArrayTwo);
      });
            
      it ('has the correct data using remove() to delete first occurrence of data', function () {
        temp = linkedList.remove('three');
        expect(temp instanceof Node).to.be.true;
        expect(temp.data).to.equal('three');
        expect(linkedList.get(2)).to.equal('one');

        temp = linkedList.remove('three');
        expect(temp instanceof Node).to.be.true;
        expect(temp.data).to.equal('three');
        expect(linkedList.get(6)).to.equal('five');
        
        temp = linkedList.remove('three');
        expect(temp).to.equal(-1);
        
        expect(linkedList.toString()).to.not.equal(testArrayTwoStr);
        expect(linkedList.toString()).to.equal('[one, two, one, four, five, two, five]');
      });

      it ('has the correct data using indexOf() search for first occurrence of data', function () {
        index = linkedList.indexOf('one');
        expect(index).to.equal(0);
        
        index = linkedList.indexOf('one');
        expect(index).to.equal(0);
        
        index = linkedList.indexOf('five');
        expect(index).to.equal(5);
        
        index = linkedList.indexOf('ten');
        expect(index).to.equal(-1);

        index = linkedList.indexOf();
        expect(index).to.equal(-1);
      });
      
      // [ "one", "two", "three", "one", "four", "five", "two", "three", "five" ]      
      it ('has the correct data using lastIndexOf() search for first occurrence of data', function () {
        index = linkedList.lastIndexOf('one');
        expect(index).to.equal(3);
        
        index = linkedList.lastIndexOf('two');
        expect(index).to.equal(6);
        
        index = linkedList.lastIndexOf('five');
        expect(index).to.equal(8);
        
        index = linkedList.lastIndexOf('ten');
        expect(index).to.equal(-1);
        
        index = linkedList.lastIndexOf();
        expect(index).to.equal(-1);
      });      
    });
  });
});