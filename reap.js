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
  // * 오타인가?
  get stateDataObject(){
    return this._stateDataObject;
  }
  set stateDataObject(value){
    const isValidObject = (obj)=>{ typeof obj === 'object' && obj !== null };
    if (isValidObject(value)){
      this._stateDataObject
    }
  }
}