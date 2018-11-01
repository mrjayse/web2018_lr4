function Person(name, age){
	this.age = age;
	this.name = name;
}

Person.prototype.SetName = function (name){
	this.name = name;
}

Person.prototype.SetAge = function (age){
	this.age = age;
}

Person.prototype.Print = function (){
	console.log("Person (name: "+this.name+", age: "+this.age+")");
}



function Student(name, age, group, course = 1){
	this.name = name;
	this.age = age;
	this.group = group;
	this.course = course;
}

Student.prototype.__proto__ = Person.prototype;

Student.prototype.NextCourse = function (){
	this.course++;
}

Student.prototype.Print = function (){
	console.log("Student (name: "+this.name+", age: "+this.age+", group: "+this.group+", course: "+this.course+")");
}



function Teacher(name, age, disciplines = []){
	this.name = name;
	this.age = age;
	this.disciplines = disciplines;	
}

Teacher.prototype.__proto__ = Person.prototype;

Teacher.prototype.AddDiscipline = function (discipline){
	if(this.disciplines.indexOf(discipline) == -1){
		this.disciplines.push(discipline);
	}
}

Teacher.prototype.RemoveDiscipline = function (discipline){
	var idx = idx;
	if(idx !== -1){
		this.disciplines.splice(idx,1);
	}
}

Teacher.prototype.Print = function (){
	console.log("Teacher (name: "+this.name+", age: "+this.age+", disciplines: "+this.disciplines+")");
}


//tests
var pers = new Person("tester", 120);
pers.Print();
pers.SetAge(20);
pers.SetName("test name");
pers.Print();

var stud = new Student("some student", 18, "group");
stud.Print();
stud.SetAge(21);
stud.SetName("test student name");
stud.NextCourse();
stud.Print();

var tchr = new Teacher("teacher name", 40);
tchr.Print();
tchr.AddDiscipline("web");
tchr.SetAge(50);
tchr.SetName("thcr name");
tchr.Print();
tchr.AddDiscipline("web");
tchr.Print();
tchr.RemoveDiscipline("web");
tchr.Print();