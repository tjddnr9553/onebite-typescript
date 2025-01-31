// 타입스크립트 클래스
var employee = {
    name: "차성욱",
    age: 28,
    position: "developer",
    work: function () {
        console.log("일 하는중");
    }
};
var Employee = /** @class */ (function () {
    function Employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Employee.prototype.work = function () {
        console.log("일 하는중");
    };
    return Employee;
}());
var employeeB = new Employee("차성욱", 28, "개발자");
console.log(employeeB);
