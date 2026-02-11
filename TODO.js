let colorNames = [
  {name:"White", hex: "#FFFFFF"},
  {name:"red", hex: "#FF0000"},
  {name:"blue", hex: "#0000FF"},
  {name:"green", hex: "#00ff00"},
  {name:"black", hex: "#000000"},
]
console.log(colorNames[1].hex)

/* let students = [
  {
    name: "Tsering",
    scores: [
      {exam: "first-term", gpa:2},
      {exam: "second-term", gpa:4 }
    ]
  },
  {
    name: "Wangdue",
    scores:[
    {exam: "first-term", gpa: 3.1},
    {exam: "second-term", gpa: 2.9}
    ]
  }
]
console.log(students[0].name,"scored gpa", students[0].scores[0].gpa,"in first-term and",students[0].scores[1].gpa, "in second-term")
console.log(students[1].name, "scored gpa", students[1].scores[1].gpa, "in first-term and",students[1].scores[1].gpa, "in scond-term") */

let students = [
  {
    roll:1,
    courses: ["web", "Mobile"]
  },
  {roll: 2,
  courses:["Machine Learning", "Mobile"] 
}
]
students[1].courses[1] = "AI"
students[0].courses[1] = "AI"
console.log( students)