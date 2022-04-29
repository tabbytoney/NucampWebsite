// Task 1

class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

testStudent = new Student("Bugs Bunny", "bugs@bunny.com");
console.log(testStudent);
if (
  testStudent.name === "Bugs Bunny" &&
  testStudent.email === "bugs@bunny.com"
) {
  console.log("TASK 1: PASS");
}

// Task 2 & 3

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = [];
  }
  registerStudent(studentToRegister) {
    if (!studentToRegister.name || !studentToRegister.email) {
      console.log("Invalid name or email");
      return false;
    }
    for (const student of this.students) {
      if (student.email === studentToRegister.email) {
        console.log(`Registering ${student.name} to the ${this.name} bootcamp`);
        return false;
      }
    }
    this.students.push(studentToRegister);
    console.log(
      `Registering ${studentToRegister.name} to ${this.name} bootcamp`
    );
    return true;
  }
  // Task 4
  listStudents() {
    if (this.students.length === 0) {
      console.log(`No students are registered to the ${this.name} bootcamp.`);
      return false;
    }

    console.log(
      `The students are registered to the ${this.name} bootcamp are: `
    );
    this.students.forEach((student) => {
      console.log(`Name: ${student.name} Email: ${student.email}`);
      return true;
    });
  }

  getInfo() {
    console.log(`The bootcamp course is ${this.name} at the ${this.level}`);
  }
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (
  reactBootcamp.name === "React" &&
  reactBootcamp.level === "Advanced" &&
  Array.isArray(reactBootcamp.students) &&
  reactBootcamp.students.length === 0
) {
  console.log("TASK 2: PASS");
}

const runTest = (bootcamp, student) => {
  const attemptOne = bootcamp.registerStudent(student);
  const attemptTwo = bootcamp.registerStudent(student);
  const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
  if (attemptOne && !attemptTwo && !attemptThree) {
    console.log("TASK 3: PASS");
  }

  bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
  if (bootcamp.listStudents()) {
    console.log("TASK 4: PASS 1/2");
  }
  bootcamp.students = [];
  if (!bootcamp.listStudents()) {
    console.log("TASK 4: PASS 2/2");
  }
};

runTest(reactBootcamp, testStudent);
