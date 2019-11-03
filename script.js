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
    print() {

    }
  }
let lang = 'ru';
key1 = new Btn(192,lang,'button','`','Ё');key2 = new Btn(49,lang,'button','1','1');key3 = new Btn(50,lang,'button','2','2');
key4 = new Btn(51,lang,'button','3','3');key5 = new Btn(52,lang,'button','4','4');key6 = new Btn(53,lang,'button','5','5');
key7 = new Btn(54,lang,'button','6','6');key8 = new Btn(55,lang,'button','7','7');key9 = new Btn(56,lang,'button','8','8');
key10 = new Btn(57,lang,'button','9','9');key11 = new Btn(48,lang,'button','0','0'); key12 = new Btn(189,lang,'button','-','-');
key13 = new Btn(187,lang,'button','=','=');key14 = new Btn(8,lang,'button backspace','backspace','backspace');

key15 = new Btn(9,lang,'button tab','Tab','Tab'); key16 = new Btn(81,lang,'button','Q','Й');
key17 = new Btn(87,lang,'button','W','Ц');key18 = new Btn(69,lang,'button','E','У');
key19 = new Btn(82,lang,'button','R','К');key20 = new Btn(84,lang,'button','T','Е');
key21 = new Btn(89,lang,'button','Y','Н');key22 = new Btn(85,lang,'button','U','Г');
key23 = new Btn(73,lang,'button','I','Ш');key24 = new Btn(79,lang,'button','O','Щ');
key25 = new Btn(80,lang,'button','P','З');key26 = new Btn(219,lang,'button','[','Х');
key27 = new Btn(221,lang,'button',']','Ъ');key28 = new Btn(220,lang,'button','\\','\\');
key29 = new Btn(46,lang,'button tab','Del','Del');

key30 = new Btn(20,lang,'button caps','Caps Lock','Caps Lock');key31 = new Btn(65,lang,'button','A','Ф');
key32 = new Btn(83,lang,'button','S','Ы');key33 = new Btn(68,lang,'button','D','В');
key34 = new Btn(70,lang,'button','F','А');key35 = new Btn(71,lang,'button','G','П');
key36 = new Btn(72,lang,'button','H','Р');key37 = new Btn(74,lang,'button','J','О');
key38 = new Btn(75,lang,'button','K','Л');key39 = new Btn(76,lang,'button','L','Д');
key40 = new Btn(186,lang,'button',';','Ж');key41 = new Btn(222,lang,'button','\'','Э');
key42 = new Btn(13,lang,'button enter','Enter','Enter');

key43 = new Btn(16,lang,'button shift','Shift','Shift'); key44 = new Btn(90,lang,'button','Z','Я');
key45 = new Btn(88,lang,'button','X','Ч');key46 = new Btn(67,lang,'button','C','С');
key47 = new Btn(86,lang,'button','V','М');key48 = new Btn(66,lang,'button','B','И');
key49 = new Btn(78,lang,'button','N','Т');key50 = new Btn(77,lang,'button','M','Ь');
key51 = new Btn(188,lang,'button',',','Б');key52 = new Btn(190,lang,'button','.','Ю');
key53 = new Btn(191,lang,'button','/','.');key54 = new Btn(38,lang,'button','<img src="./images/up.png" alt="up"','<img src="./images/up.png" alt="up"');key55 = new Btn(16,lang,'button shift2','Shift','Shift');

key56 = new Btn(17,lang,'button','Ctrl','Ctrl');key57 = new Btn(18,lang,'button','Alt','Alt');
key58 = new Btn(32,lang,'button space',' ',' ');key59 = new Btn(18,lang,'button','Alt','Alt');
key60 = new Btn(17,lang,'button','Ctrl','Ctrl');key61 = new Btn(37,lang,'button','<img src="./images/left.png" alt="left">','<img src="./images/left.png" alt="left">');key62 = new Btn(40,lang,'button','<img src="./images/down.png" alt="down">','<img src="./images/down.png" alt="down">');key63 = new Btn(39,lang,'button','<img src="./images/right.png" alt="right">','<img src="./images/right.png" alt="right">');
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
            if(arr[i][j].keyCode === item) {return arr[i][j]}
        }
    }
}
let changeLang = false;
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    document.getElementById(String(event.which)).classList.add('active');
    if (event.key == 'Shift' && (event.ctrlKey)|| event.metaKey) {
        if(lang ==='ru'){lang = 'eng'} else{lang = 'ru'};
      }
  });
document.addEventListener('keyup', function(event) {
    event.preventDefault();
    let btn = returnObj(arrkeyboard,event.which);
    document.getElementById(String(event.which)).classList.remove('active');
    if (event.shiftKey){textAreaStack.push(btn.textBtn.toUpperCase())}
    else {textAreaStack.push(btn.textBtn.toLowerCase())}
    //textAreaStack.push(btn.textBtn.toLowerCase());
    document.getElementById('textarea').value = textAreaStack.join('');
    document.querySelector('.keyboard').remove()
    document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
    loadKeyboard(lang); 
    
    
});