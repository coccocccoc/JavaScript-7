// 연락처 필드에는 숫자가 아닌 값이 입력되면 테두리를 빨간색으로 
function checkPhoneInput(phoneNumber) {
  // 정규표현식 생성
  const regex = /^[0-9]*$/;
  if (regex.test(phoneNumber.value) == false) {
    phoneNumber.style.borderColor = "red";
  } else {
    phoneNumber.style.borderColor = "";
  }
}

// 지원 동기에 글자를 입력할 때 현재 입력한 글자수와 최대 글자수가 실시간으로 표시
// 30글자 초과시 글자의 색이 빨간색으로 변경
function characterCount() {
  
}

// 폼 제출 시 이름, 연락처, 지원분야 필드가 비어있는지 확인하고, 비어있으면 경고메시지 표시
function checkDataEmpty() {
  // 이름 가져오기
  const name = document.getElementById("name");
  if (name.value == "") {
    alert("이름을 입력해주세요");
    return;
  }

  // 연락처 가져오기
  const phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber.value == "") {
    alert("연락처를 입력해주세요");
    return;
  }

  // 지원분야 
}