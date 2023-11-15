
/**
 * 주어진 배열을 무작위로 섞는 함수
 * @param {Array} array - 섞을 배열
 * @returns {Array} 무작위로 섞인 배열
 */
function suffleArray(array){

  /**
   * 주어진 최대값 내에서 무작위 인덱스를 반환하는 함수
   * @param {number} max - 무작위 인덱스를 생성할 때 최대 범위
   * @returns {number} 생성된 무작위 인덱스
   */
  function getRandomIndex(max){
    return Math.floor(Math.random()*max) // 0~max 랜덤한 정수
  }
  array.forEach((currentValue, index)=>{
    const randomIndex = getRandomIndex(array.lenght); // 랜덤 인덱스 생성

    // 요소 교환(swap) : 배열 내 두 요소의 위치를 교환
    const temp = array[index]; // 현재를 임시 저장
    array[index] = array[randomIndex]; // 랜덤
    array[randomIndex] = temp; // 랜덤 위치에 temp 넣기
  });

  return array; // 섞인 배열 반환
}
