class TitleManager {
  constructor(tagName, stateDataObject = {basicTitle : "기본 제목", newTitle: "새로운 제목"}) {
    this._tagName = tagName;
    this._stateDataObject = stateDataObject;
  }

  // property : tagName
  get tagName() {
    return this._tagName;
  }
  set tagName(value){
    if(typeof value === 'string' && value.trim() !== '') {
      this._tagName = value;
    } else {
      throw new Error('유효한 태그 이름이어야 합니다.');
    }
  }

  // property : stateData
  // * 오타인가? // * 아니다. 상관없는 것 같다.
  
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

// ? 매개변수 안에 기본값을 세팅하는 것은 class만 가능할까?
const test = new TitleManager('h1', {basicTitle:"기본 제목",newTitle: "새로운 제목" });

console.dir(test);
console.log(test.tagName);