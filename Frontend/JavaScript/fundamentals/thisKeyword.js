let student = {
  eng: 96,
  math: 99,
  phy: 87,
  bio: 98,
  getAvg() {
    let avg = (this.eng + this.math + this.phy + this.bio) / 4;

    //*this line will not able to access the subject marks above we need to use "this" keyword
    // let avg = (eng + math + phy + bio) / 4;
    console.log("Average=", avg);
  },
};

const object = {
  message: "hello world",
  logMsg() {
    console.log(this.message);
  },
};

setTimeout(object.logMsg, 1000);
