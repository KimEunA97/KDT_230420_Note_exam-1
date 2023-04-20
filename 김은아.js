function examOne(first, second) {
  //매개변수가 문자열이면 "문자열 데이터를 입력하셨습니다."
  if (typeof (first) === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  }
  if (typeof (second) === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  }
  if (typeof (first) === "number" && typeof (second) === "number") {
    return first + second;
  }
}

// console.log(examOne(3, "ㅁㄴㅇ"));


function examTwo(first, second, third) {
  //숫자여야만 실행되도록 타입 확인 로직 작성

  if (typeof (first) === "number" && typeof (second) === "number" && typeof (third) === "number") {

    return first * second * third;

  }
  else {

    console.log("문자열만 입력하세요.")

  }

}
// console.log(examTwo(2, 3, "ㅁㄴㅇ"));



function examThree(str) {

  //문자열 타입만 실행, length 없이 길이값 구하기.
  if (typeof (str) === "string") {

    let arr = str.split("");

    let index = 0;
    arr.forEach(function () {

      index++

    })
    return "길이는 " + index;

  }

}
// console.log(examThree("hello!!!!!!!!!"));



function examFour(array) {
  //최소값 구하기
  if (Array.isArray(array)) {

    //전개연산자
    let min = Math.min(...array);
    return min;

  }
  else {
    console.log("숫자만 입력하세요.")
  }

}
// console.log(examFour([33, 111, 44, 22]));


function examFive(array) {
  //총합 구하기
  // 자바스크립트의 reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
  //accumulator = 축적기
  //currentNumber = 현재값
  if (Array.isArray(array)) {

    let num = [...array];
    let sum = num.reduce((acc, crr) => acc + crr);

    return sum;

  }

  else {
    console.log("숫자만 입력하세요.")
  }

}

// console.log(examFive([1, 2, 3]));
