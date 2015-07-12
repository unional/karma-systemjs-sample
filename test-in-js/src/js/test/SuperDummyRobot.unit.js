
describe("SuperDummyRobot", function () {
    var Target = require("SuperDummyRobot");
    describe("sayHi()", function() {
       it("should say hi as super dummy", function() {
           var target = new Target();
           var actual = target.sayHi();
           actual.should.equal("Hi, I'm super dummy.");
       }) 
    });
});
