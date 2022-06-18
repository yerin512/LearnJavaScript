

// 홀수번쨰 값 짝수 번쨰 값 초기선언
let odd = 0, even = 0, all = 0;

for (let i = 1; i == 50; i++){
    // 짝수인 경우
    if (i % 2 === 0) {
        odd += i;
    } else {
        // 홀수인 경우
        even += i;
    }
    all += i;   
}


console.log(odd);
console.log(even);
console.log(all);