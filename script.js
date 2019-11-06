// class for basic buttons
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
// class for buttons with sup
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
// class for function buttons
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
const textAreaStack = [];

// save the language in localStorage
if(localStorage.getItem('lang')) {lang = localStorage.getItem('lang');}
else { lang = 'ru';}

// buttons initialization
const key1 = new Btn(192,lang,'button','`','Ё');const key2 = new BtnSup(49,lang,'button','1','!','!');
const key3 = new BtnSup(50,lang,'button','2','@','\"');const key4 = new BtnSup(51,lang,'button','3','#','№');
const key5 = new BtnSup(52,lang,'button','4','$',';');const key6 = new BtnSup(53,lang,'button','5','%','%');
const key7 = new BtnSup(54,lang,'button','6','^',':');const key8 = new BtnSup(55,lang,'button','7','&','?');
const key9 = new BtnSup(56,lang,'button','8','*','*');const key10 = new BtnSup(57,lang,'button','9','(','(');
const key11 = new BtnSup(48,lang,'button','0',')',')'); const key12 = new BtnSup(189,lang,'button','-','_','_');
const key13 = new BtnSup(187,lang,'button','=','+','+');const key14 = new BtnFunc(8,'button backspace','backspace','');

const key15 = new BtnFunc(9,'button tab','Tab','\t'); const key16 = new Btn(81,lang,'button','Q','Й');
const key17 = new Btn(87,lang,'button','W','Ц');const key18 = new Btn(69,lang,'button','E','У');
const key19 = new Btn(82,lang,'button','R','К');const key20 = new Btn(84,lang,'button','T','Е');
const key21 = new Btn(89,lang,'button','Y','Н');const key22 = new Btn(85,lang,'button','U','Г');
const key23 = new Btn(73,lang,'button','I','Ш');const key24 = new Btn(79,lang,'button','O','Щ');
const key25 = new Btn(80,lang,'button','P','З');const key26 = new Btn(219,lang,'button','[','Х');
const key27 = new Btn(221,lang,'button',']','Ъ');const key28 = new Btn(220,lang,'button','\\','\\');
const key29 = new BtnFunc(46,'button tab','Del','');

const key30 = new BtnFunc(20,'button caps','Caps Lock','');const key31 = new Btn(65,lang,'button','A','Ф');
const key32 = new Btn(83,lang,'button','S','Ы');const key33 = new Btn(68,lang,'button','D','В');
const key34 = new Btn(70,lang,'button','F','А');const key35 = new Btn(71,lang,'button','G','П');
const key36 = new Btn(72,lang,'button','H','Р');const key37 = new Btn(74,lang,'button','J','О');
const key38 = new Btn(75,lang,'button','K','Л');const key39 = new Btn(76,lang,'button','L','Д');
const key40 = new Btn(186,lang,'button',';','Ж');const key41 = new Btn(222,lang,'button','\'','Э');
const key42 = new BtnFunc(13,'button enter','Enter','\n');

const key43 = new BtnFunc('ShiftLeft','button shift','Shift',''); const key44 = new Btn(90,lang,'button','Z','Я');
const key45 = new Btn(88,lang,'button','X','Ч');const key46 = new Btn(67,lang,'button','C','С');
const key47 = new Btn(86,lang,'button','V','М');const key48 = new Btn(66,lang,'button','B','И');
const key49 = new Btn(78,lang,'button','N','Т');const key50 = new Btn(77,lang,'button','M','Ь');
const key51 = new Btn(188,lang,'button',',','Б');const key52 = new Btn(190,lang,'button','.','Ю');
const key53 = new Btn(191,lang,'button','/','.');const key54 = new BtnFunc(38,'button','<img src="./images/up.png" alt="up"','');
const key55 = new BtnFunc('ShiftRight','button shift2','Shift','');

const key56 = new BtnFunc('ControlLeft','button','Ctrl','');const key57 = new BtnFunc('AltLeft','button','Alt','');
const key58 = new BtnFunc(32,'button space','',' ');const key59 = new BtnFunc('AltRight','button','Alt','');
const key60 = new BtnFunc('ControlRight','button','Ctrl','');
const key61 = new BtnFunc(37,'button','<img src="./images/left.png" alt="left">','');
const key62 = new BtnFunc(40,'button','<img src="./images/down.png" alt="down">','');
const key63 = new BtnFunc(39,'button','<img src="./images/right.png" alt="right">','');

//save button in array
const arrayKeyboard = [[key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11,key12,key13,key14],
                     [key15,key16,key17,key18,key19,key20,key21,key22,key23,key24,key25,key26,key27,key28,key29],
                     [key30,key31,key32,key33,key34,key35,key36,key37,key38,key39,key40,key41,key42],
                     [key43,key44,key45,key46,key47,key48,key49,key50,key51,key52,key53,key54,key55],
                     [key56,key57,key58,key59,key60,key61,key62,key63]
]
// keyboard loading function with current language
function loadKeyboard(lang){
    for(let i=0; i<arrayKeyboard.length; i++){
        document.querySelector('.keyboard').insertAdjacentHTML('beforeend', `<div class="row${i}"></div>`);
        for(let j=0; j< arrayKeyboard[i].length; j++) {
            arrayKeyboard[i][j].lang = lang;
            document.querySelector(`.row${i}`).insertAdjacentHTML('beforeend', `<div class="${arrayKeyboard[i][j].cssClass}" id="${arrayKeyboard[i][j].keyCode}">${arrayKeyboard[i][j].textBtn}</div>`);
        }
    }
}
//Get the object with the 'item' key from the array
function returnObj(arr, item){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j< arr[i].length; j++) {
            if(arr[i][j].keyCode == item) {return arr[i][j]}
        }
    }
}
// function for handling mousedown and mouseup events
function clickListener(){
    document.querySelector('.keyboard').addEventListener('mousedown', function(event) {
        let btn2 = returnObj(arrayKeyboard, event.target.id);
        document.getElementById(btn2.keyCode).classList.add('active'); 
    });
    document.querySelector('.keyboard').addEventListener('mouseup', function(event) {
        let btn2 = returnObj(arrayKeyboard, event.target.id);
        document.getElementById(btn2.keyCode).classList.remove('active');
        if (event.target.id == 20 ){key30.capsLockBtn = !key30.capsLockBtn}
        if (event.target.id == 8 || event.target.id == 46){
            textAreaStack.pop(key30.capsLockBtn);
        } 
        else {
            textAreaStack.push(btn2.print(key30.capsLockBtn));
        }
        document.getElementById('textarea').value = textAreaStack.join('');
         
    });
}
// creating DOM elements
document.body.insertAdjacentHTML('afterbegin', '<div class="container"></div>');
document.body.children[0].insertAdjacentHTML('afterbegin', '<div class="textarea-wrapper"></div>');
document.querySelector('.textarea-wrapper').insertAdjacentHTML('afterbegin', ' <textarea class="textarea" name="textarea" id="textarea" cols="30" rows="10"></textarea>');
document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');

loadKeyboard(lang);

clickListener();

//event handling keydown
document.addEventListener('keydown', function(event) {
    textarea.focus();
    event.preventDefault();
    let btn;
    if(event.which === 16 || event.which === 17 || event.which === 18) {
        btn = returnObj(arrayKeyboard,event.code);
    } else {
        btn = returnObj(arrayKeyboard,event.which);
    }
    
    document.getElementById(btn.keyCode).classList.add('active');
    if (event.key == 'Shift' && (event.ctrlKey)|| event.metaKey) {
        if(lang ==='ru'){lang = 'eng'} else{lang = 'ru'};
      }
  });
//event handling keyup
document.addEventListener('keyup', function(event) {
    event.preventDefault();
    let btn;
    if(event.which === 16 ||event.which === 17 || event.which === 18) {
        btn = returnObj(arrayKeyboard,event.code);
    } else {
        btn = returnObj(arrayKeyboard,event.which);
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

