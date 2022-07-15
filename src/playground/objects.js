const developer = {
  salary: 100000,
  name: "Jeff",
  title: "Frontend Developer",
  experience: 3.5,
  techStack: ["javascript", "vue", "php", "laravel", "wordpress"],
  lookingForWork: true,
  newPromotion() {
    console.log("Congrats on the promotion");
    this.salary = this.salary * 1.6;
    this.lookingForWork = !this.lookingForWork;
  },
};

developer.newPromotion();
console.log("SALARY: " + developer.salary);
console.log("Open for work? " + developer.lookingForWork);
