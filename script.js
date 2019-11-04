class Btn {
    constructor(keyCode,lang,cssClass,textEng,textRu ) {
      this.keyCode = keyCode;
      this.lang = lang;
      this.cssClass = cssClass;
      this.textEng = textEng;
      this.textRu = textRu;
      this.shiftBtn = false;
      this.capsLockBtn = false; 
    }
    get textBtn() {
        if(this.lang === 'ru') return this.textRu
        else return this.textEng;
      }
    print(value) {
        if(value) { this.shiftBtn = !this.shiftBtn;}
        if(this.shiftBtn) {
            if(this.lang === 'ru') return this.textRu
            else return this.textEng;
        }
        else {
            if(this.lang === 'ru') return this.textRu.toLowerCase()
            else return this.textEng.toLowerCase();
            }
    }
  }
  class BtnSup extends Btn {
    constructor(keyCode,lang,cssClass,text,supEng,supRu ) {
        super(keyCode,lang,cssClass,text,text);
        this.text = text;
        this.supEng = supEng;
        this.supRu = supRu;
    }
    get textBtn() {
        if(this.lang === 'ru') return super.textBtn + `<sup>${this.supRu}</sup>`
        else return super.textBtn + `<sup>${this.supEng}</sup>`;
      }
      print() {
        if(this.shiftBtn) {
            if(this.lang === 'ru') return this.supRu
            else return this.supEng;
        }
        else {
            return this.text;
            }
        }
  }
  class BtnFunc {
    constructor(keyCode,cssClass,text, value ) {
      this.keyCode = keyCode;
      this.cssClass = cssClass;
      this.text = text;
      this.value = value;
    }
    get textBtn() {
        return this.text
      }
    print() {
        return this.value;
    }
  }
let lang;

if(localStorage.getItem('lang')) {lang = localStorage.getItem('lang');}
else { lang = 'ru';}


key1 = new Btn(192,lang,'button','`','Ё');key2 = new BtnSup(49,lang,'button','1','!','!');
key3 = new BtnSup(50,lang,'button','2','@','\"');key4 = new BtnSup(51,lang,'button','3','#','№');
key5 = new BtnSup(52,lang,'button','4','$',';');key6 = new BtnSup(53,lang,'button','5','%','%');
key7 = new BtnSup(54,lang,'button','6','^',':');key8 = new BtnSup(55,lang,'button','7','&','?');
key9 = new BtnSup(56,lang,'button','8','*','*');key10 = new BtnSup(57,lang,'button','9','(','(');
key11 = new BtnSup(48,lang,'button','0',')',')'); key12 = new BtnSup(189,lang,'button','-','_','_');
key13 = new BtnSup(187,lang,'button','=','+','+');key14 = new BtnFunc(8,'button backspace','backspace','');

key15 = new BtnFunc(9,'button tab','Tab','\t'); key16 = new Btn(81,lang,'button','Q','Й');
key17 = new Btn(87,lang,'button','W','Ц');key18 = new Btn(69,lang,'button','E','У');
key19 = new Btn(82,lang,'button','R','К');key20 = new Btn(84,lang,'button','T','Е');
key21 = new Btn(89,lang,'button','Y','Н');key22 = new Btn(85,lang,'button','U','Г');
key23 = new Btn(73,lang,'button','I','Ш');key24 = new Btn(79,lang,'button','O','Щ');
key25 = new Btn(80,lang,'button','P','З');key26 = new Btn(219,lang,'button','[','Х');
key27 = new Btn(221,lang,'button',']','Ъ');key28 = new Btn(220,lang,'button','\\','\\');
key29 = new BtnFunc(46,'button tab','Del','');

key30 = new BtnFunc(20,'button caps','Caps Lock','');key31 = new Btn(65,lang,'button','A','Ф');
key32 = new Btn(83,lang,'button','S','Ы');key33 = new Btn(68,lang,'button','D','В');
key34 = new Btn(70,lang,'button','F','А');key35 = new Btn(71,lang,'button','G','П');
key36 = new Btn(72,lang,'button','H','Р');key37 = new Btn(74,lang,'button','J','О');
key38 = new Btn(75,lang,'button','K','Л');key39 = new Btn(76,lang,'button','L','Д');
key40 = new Btn(186,lang,'button',';','Ж');key41 = new Btn(222,lang,'button','\'','Э');
key42 = new BtnFunc(13,'button enter','Enter','\n');

key43 = new BtnFunc('ShiftLeft','button shift','Shift',''); key44 = new Btn(90,lang,'button','Z','Я');
key45 = new Btn(88,lang,'button','X','Ч');key46 = new Btn(67,lang,'button','C','С');
key47 = new Btn(86,lang,'button','V','М');key48 = new Btn(66,lang,'button','B','И');
key49 = new Btn(78,lang,'button','N','Т');key50 = new Btn(77,lang,'button','M','Ь');
key51 = new Btn(188,lang,'button',',','Б');key52 = new Btn(190,lang,'button','.','Ю');
key53 = new Btn(191,lang,'button','/','.');key54 = new BtnFunc(38,'button','<img src="./images/up.png" alt="up"','');
key55 = new BtnFunc('ShiftRight','button shift2','Shift','');

key56 = new BtnFunc('ControlLeft','button','Ctrl','');key57 = new BtnFunc('AltLeft','button','Alt','');
key58 = new BtnFunc(32,'button space','',' ');key59 = new BtnFunc('AltRight','button','Alt','');
key60 = new BtnFunc('ControlRight','button','Ctrl','');
key61 = new BtnFunc(37,'button','<img src="./images/left.png" alt="left">','');
key62 = new BtnFunc(40,'button','<img src="./images/down.png" alt="down">','');
key63 = new BtnFunc(39,'button','<img src="./images/right.png" alt="right">','');
const arrkeyboard = [[key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11,key12,key13,key14],
                     [key15,key16,key17,key18,key19,key20,key21,key22,key23,key24,key25,key26,key27,key28,key29],
                     [key30,key31,key32,key33,key34,key35,key36,key37,key38,key39,key40,key41,key42],
                     [key43,key44,key45,key46,key47,key48,key49,key50,key51,key52,key53,key54,key55],
                     [key56,key57,key58,key59,key60,key61,key62,key63]
]
const textAreaStack = [];
document.body.insertAdjacentHTML('afterbegin', '<div class="container"></div>');
document.body.children[0].insertAdjacentHTML('afterbegin', '<div class="textarea-wrapper"></div>');
document.querySelector('.textarea-wrapper').insertAdjacentHTML('afterbegin', ' <textarea class="textarea" name="textarea" id="textarea" cols="30" rows="10"></textarea>');

document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');

function loadKeyboard(lang){
    for(let i=0; i<arrkeyboard.length; i++){
        document.querySelector('.keyboard').insertAdjacentHTML('beforeend', `<div class="row${i}"></div>`);
        for(let j=0; j< arrkeyboard[i].length; j++) {
            arrkeyboard[i][j].lang = lang;
            document.querySelector(`.row${i}`).insertAdjacentHTML('beforeend', `<div class="${arrkeyboard[i][j].cssClass}" id="${arrkeyboard[i][j].keyCode}">${arrkeyboard[i][j].textBtn}</div>`);
        }
    }
}
loadKeyboard(lang);

function returnObj(arr, item){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j< arr[i].length; j++) {
            if(arr[i][j].keyCode == item) {return arr[i][j]}
        }
    }
}

function clickListener(){
    document.querySelector('.keyboard').addEventListener('mousedown', function(event) {
        let btn2 = returnObj(arrkeyboard, event.target.id);
        document.getElementById(btn2.keyCode).classList.add('active'); 
    });
    document.querySelector('.keyboard').addEventListener('mouseup', function(event) {
        let btn2 = returnObj(arrkeyboard, event.target.id);
        document.getElementById(btn2.keyCode).classList.remove('active');
        if (event.target.id ==20 ){btn2.capsLockBtn = !btn2.capsLockBtn}
        if (event.target.id == 8 || event.target.id == 46){
            textAreaStack.pop();
        } 
        else {
            textAreaStack.push(btn2.print(key30.capsLockBtn));
        }
        document.getElementById('textarea').value = textAreaStack.join('');
         
    });
}

document.addEventListener('keydown', function(event) {
    textarea.focus();
    event.preventDefault();
    let btn;
    if(event.which === 16 || event.which === 17 || event.which === 18) {
        btn = returnObj(arrkeyboard,event.code);
    } else {
        btn = returnObj(arrkeyboard,event.which);
    }
    
    document.getElementById(btn.keyCode).classList.add('active');
    if (event.key == 'Shift' && (event.ctrlKey)|| event.metaKey) {
        if(lang ==='ru'){lang = 'eng'} else{lang = 'ru'};
      }
  });
document.addEventListener('keyup', function(event) {
    event.preventDefault();
    let btn;
    if(event.which === 16 ||event.which === 17 || event.which === 18) {
        btn = returnObj(arrkeyboard,event.code);
    } else {
        btn = returnObj(arrkeyboard,event.which);
    }
    document.getElementById(btn.keyCode).classList.remove('active');
    if (event.shiftKey){btn.shiftBtn = true}
    else {btn.shiftBtn = false};

    if (event.which ==20 ){btn.capsLockBtn = !btn.capsLockBtn}

    if (event.which == 8 || event.which == 46){
        textAreaStack.pop();
    } 
    else {
        textAreaStack.push(btn.print(key30.capsLockBtn));
    }
    document.getElementById('textarea').value = textAreaStack.join('');
    document.querySelector('.keyboard').remove()
    document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
    loadKeyboard(lang);
    localStorage.setItem('lang', lang);
    clickListener();
     
});

clickListener();