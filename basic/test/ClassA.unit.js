
describe("src/ClassA", function () {
    var ClassA = require("src/ClassA");
    describe("sum()", function() {
       it("should add two numbers", function() {
           var target = new ClassA();
           var actual = target.sum(2, 4);
           actual.should.equal(6);
       }) 
    });
});
