class Btn {
    constructor(keyCode,lang,cssClass,textEng,textRu ) {
      this.keyCode = keyCode;
      this.lang = lang;
      this.cssClass = cssClass;
      this.textEng = textEng;
      this.textRu = textRu; 
    }
    get textBtn() {
        if(this.lang === 'ru') return this.textRu
        else return this.textEng;
      }
  }
let lang = 'ru';
key1 = new Btn(192,lang,'button','`','ё');key2 = new Btn(49,lang,'button','1','1');key3 = new Btn(50,lang,'button','2','2');
key4 = new Btn(51,lang,'button','3','3');key5 = new Btn(52,lang,'button','4','4');key6 = new Btn(53,lang,'button','5','5');
key7 = new Btn(54,lang,'button','6','6');key8 = new Btn(55,lang,'button','7','7');key9 = new Btn(56,lang,'button','8','8');
key10 = new Btn(57,lang,'button','9','9');key11 = new Btn(48,lang,'button','0','0'); key12 = new Btn(189,lang,'button','-','-');
key13 = new Btn(187,lang,'button','=','=');key14 = new Btn(8,lang,'button backspace','backspace','backspace');
const arrkeyboard = [[key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11,key12,key13,key14]]
document.body.insertAdjacentHTML('afterbegin', '<div class="container"></div>');
document.body.children[0].insertAdjacentHTML('afterbegin', '<div class="textarea-wrapper"></div>');
document.querySelector('.textarea-wrapper').insertAdjacentHTML('afterbegin', ' <textarea class="textarea" name="textarea" id="textarea" cols="30" rows="10"></textarea>');

document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
for(let i=0; i<arrkeyboard.length; i++){
    document.querySelector('.keyboard').insertAdjacentHTML('beforeend', '<div class="row"></div>');
    for(let j=0; j< arrkeyboard[i].length; j++) {
        document.querySelector('.row').insertAdjacentHTML('beforeend', `<div class="${arrkeyboard[i][j].cssClass}">${arrkeyboard[i][j].textBtn}</div>`);
    }
}