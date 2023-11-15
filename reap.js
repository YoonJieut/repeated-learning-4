class TitleManager {

  /**
   * 
   * @param {string} tagName 
   * @param {object} stateDataObject 
   * 
   * stateDataObject 매개변수는 값이 대입되지 않았을 때 대비하도록 기본값을 설정
   * default parameter 라고 부른다.
   */
  constructor(tagName, stateDataObject = {basicTitle : "기본 제목", newTitle: "새로운 제목"}) {
    this._tagName = tagName; // 은닉화 하였다.
    this._stateDataObject = stateDataObject;
  }

  /**
   * _tagName, 언더바가 앞에 있는 형태는 은닉화를 의미
   * 숨겨두었다 라는 뜻이며, 일반저긍로 외부에서 접근할 수 없다.
   * getter, setter를 통해서만 접근이 가능하다.
   * typescript에서는 private 키워드를 사용한다.
   * Java에서도 private 키워드를 사용한다.
   * 아래의 getter를 통해 일반적인 .tagName으로 접근이 가능
   */

  // property : tagName
  get tagName(){
    return this._tagName;
  }
  /**
   * 아래의 setter 때문에 매개변수 tagName은 일련의 검사를 거치게 된다.
   */
  set tagName(value){
    // 태그 이름 검증 로직
    // HTML을 계속 업데이트 되기 때문에, 아래의 코드는 완전하게 검사하진 못한다.
    // "문자열"과 "띄워쓰기"는 허용하지 않는 것은 불변하기 때문에
    // 해당 클래스에서 1차적인 검사를 진행한다.
    // 2차적인 것은 별도의 모듈이나 문서(html, 브라우저)에서 검사한다.
    if(typeof value === 'string' && value.trim() !== '') {
      this._tagName = value;
    } else {
      throw new Error('유효한 태그 이름이어야 합니다.');
    }
  }

  // 상태 데이터에 대한 getter 및 setter
  // property : stateData
  get stateData(){
    return this._stateDataObject;
  }
  set stateDataObject(value){
    const isValidObject = (obj)=>{ typeof obj === 'object' && obj !== null };
    if (isValidObject(value)){
      this._stateDataObject
    }
  }

  // method : updateUI
  updateUI(){
    const elements = document.getElementsByTagName(this._tagName);
    if(elements.length > 0) {
      elements[0].textContent = this._stateDataObject.basicTitle;
    } else {
      throw new Error('지정된 태그 이름의 요소를 찾을 수 없습니다.')
    }
  }

  //method : updateTitle
  updateTitle(){
    this._stateDataObject.basicTitle = this._stateDataObject.newTitle;
    this.updateUI();
  }
}

const test = new TitleManager('h1', {basicTitle:"기본 제목",newTitle: "새로운 제목" });

console.dir(test);

/**
 * 위 console.dir 테스트 결과
 * _언더바(은닉화) 처리된 것으로 조회된다.
 * 이것은 현재 개발자가 만든 것이기 때문에, 다른 외부에서 접근할 수없다.
 * 제작자 콘솔에서만 확인할 수 있다.
 * 
 * TitleManager {
  _tagName: 'h1',
  _stateDataObject: { basicTitle: '기본 제목', newTitle: '새로운 제목' }
}
 */

// * 은닉화 처리 됐음으로 getter를 통해 밑에처럼 접근이 가능하다.
console.log(test.tagName); //h1