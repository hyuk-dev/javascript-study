// quiz.js
/*
당신은 사용자 정보를 처리하는 시스템을 개발하고 있습니다.
현재 모든 코드가 index.js 한 파일에 있어서 유지보수가 어려운 상황입니다.

아래 코드를 모듈화하여 더 효율적인 구조로 개선해야 합니다.

요구사항:
1. 아래 함수들을 역할에 맞게 세 개의 모듈 파일로 분리하세요:
  - validation.js: 사용자 데이터 검증 관련 함수들 // validator 관련 함수들
  - transformation.js: 사용자 데이터 변환 관련 함수들 // assignUserGrade, formatUserData ....
  - serialization.js: 데이터 직렬화 관련 함수들 // serializeUser...

2. index.js의 모듈들을 각각 다른 파일로 만들어서, import하여 processUserData 함수를 완성하세요.

3. 아래 테스트 케이스로 결과를 검증하세요:
const testCase1 = {
   name: "강태진",
   email: "taejin@taejin.com",
   age: 25
};

const testCase2 = {
   name: "신진호",
   email: "jinho@jinho.com",
   age: 15
};

const testCase3 = {
   name: "이동혁",
   email: "hyuk@hyuk.com",
   age: 45
};

const result1 = processUserData(testCase1);
console.log(result1);
// 출력: "강태진,taejin@taejin.com,25,ADULT,2024-12-26"

const result2 = processUserData(testCase2);
console.log(result2);
// 출력: "신진호,jinho@jinho.com,15,JUNIOR,2024-12-26"

const result3 = processUserData(testCase3);
console.log(result3);
// 출력: "이동혁,hyuk@hyuk.com,45,SENIOR,2024-12-26"
*/
