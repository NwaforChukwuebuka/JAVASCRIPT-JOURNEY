function calcBMI(weight, height){
          var BMI = weight/(height * height);
          BMI = Math.floor(BMI);
          return (BMI);


}

console.log(calcBMI(20,80));
