describe("throwDice",function(){
  it("it does not return null", function() {
      expect(throwDice()).not.toBeNull();
  });

  it("it does return an integer", function() {
      var dice = throwDice();
      var value = dice % 1;
      expect(value).toEqual(0);
  });

  it("it returns a number greater than zero", function() {
      expect(throwDice()).toBeGreaterThan(0);
  });

  it("it returns a number less than six", function() {
      expect(throwDice()).toBeLessThan(7);
  });

  it("it returns a number", function() {
      expect(isNaN(throwDice())).toEqual(false);
  });
});
