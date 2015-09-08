describe('cryptosquare', function() {
  it("return lowercase string", function() {
    expect(cryptosquare("A")).to.eql("a");
  });

  it("return only letters", function() {
    expect(cryptosquare("A9070909        ////")).to.eql("a");
  });
  //
  // it("return array of strings properly split", function() {
  //   expect(cryptosquare("abcd")).to.eql(["ab", "cd"]);
  // });
  //
  // it("return array of strings properly split that is not perfectly square", function() {
  //   expect(cryptosquare("abcdefg")).to.eql(["abc", "def", "g"]);
  // });

  it("return encrypted string", function() {
    expect(cryptosquare("abcd")).to.eql("acbd");
  });

  // it("return encrypted string, non-square", function() {
  //   expect(cryptosquare("abcdefghij")).to.eql("aeibfjcgdh");
  // });
  //
  // it("return long encrypted string", function() {
  //   expect(cryptosquare("This is a very weird exercise we are doing right now, huh?")).to.eql("tvrieihhedsdguireeohhsyxwitiweennseragoaicrrw");
  // });

  it("return long encrypted string", function() {
    expect(cryptosquare("This is a very weird exercise we are doing right now, huh?")).to.equal("tvrie ihhed sdgui reeoh hsyxw itiwe ennse ragoa icrrw");
  });

  it("return long encrypted string, non-divisible by 5", function() {
    expect(cryptosquare("This is a very weird exercise we are doing right now, huhh?")).to.equal("tvrie ihhed sdgui reeoh hsyxw ithiw eenns erago aicrr w");
  });

  // it("return encrypted array", function() {
  //   expect(cryptosquare("don't compare yourself to others, compare yourself to the person you were yesterday")).to.eql("drfcuhotoetoreuenyomspwrtoopeeedcutalrramrhrfseymseetoyperyonealsotys");
  // });
});
