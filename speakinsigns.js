const _0x3a4ca6=_0x33f8;(function(_0x440add,_0x26ea26){const _0x3b5ebd=_0x33f8,_0x192bf0=_0x440add();while(!![]){try{const _0x2c3c79=-parseInt(_0x3b5ebd(0x1c8))/0x1*(parseInt(_0x3b5ebd(0x1d5))/0x2)+-parseInt(_0x3b5ebd(0x1b6))/0x3*(-parseInt(_0x3b5ebd(0x1ad))/0x4)+-parseInt(_0x3b5ebd(0x1bc))/0x5+parseInt(_0x3b5ebd(0x1a1))/0x6+-parseInt(_0x3b5ebd(0x1a0))/0x7+-parseInt(_0x3b5ebd(0x1d2))/0x8+parseInt(_0x3b5ebd(0x1a4))/0x9;if(_0x2c3c79===_0x26ea26)break;else _0x192bf0['push'](_0x192bf0['shift']());}catch(_0xdb99ef){_0x192bf0['push'](_0x192bf0['shift']());}}}(_0x1a83,0x52780));const micButton=document[_0x3a4ca6(0x1a2)]('.mic'),createdTextBox=document[_0x3a4ca6(0x1a2)](_0x3a4ca6(0x1e3));let recognition;function _0x1a83(){const _0x5bc5ed=['4257141GOPseG','2801208RVtOqB','querySelector','AmbientLight','12292362gDPrFS','\x20not\x20found\x20for\x20Letter_','transcript','No\x20speech\x20detected.\x20Please\x20make\x20sure\x20microphone\x20is\x20close\x20and\x20speak\x20more\x20clearly.','set','addEventListener','DirectionalLight','onresult','innerHeight','316HiLnLc','log','models/Letter_','Animation\x20','forEach','position','animations','.mic','indexOf','2523QuxjLj','animation-part','.glb:','value','name','\x20for\x20Letter_','770885XqmIjs','aspect','ArmatureAction','split','setSize','SpeechRecognition','lang','getElementById','filter','match','undefined','results','8QDyIUD','webkitSpeechRecognition','GLTFLoader','resize','innerWidth','maxAlternatives','domElement','remove','length','onend','1762376HtjdKa','scale','ArmatureAction.001','144674QbLlpP','orientation','interimResults','add','Playing\x20','rotation','appendChild','Voice\x20recognition\x20started.\x20Speak\x20now.','updateProjectionMatrix','userAgent','onerror','Letter\x20Sequence:','click','clipAction','.created-text','error','Scene','play','update','Error\x20loading\x20Letter_'];_0x1a83=function(){return _0x5bc5ed;};return _0x1a83();}micButton[_0x3a4ca6(0x1a9)](_0x3a4ca6(0x1e1),()=>{const _0x157b9e=_0x3a4ca6;recognition=new(window[(_0x157b9e(0x1c1))]||window[(_0x157b9e(0x1c9))])(),recognition[_0x157b9e(0x1c2)]='en-US',recognition[_0x157b9e(0x1d7)]=![],recognition['maxAlternatives']=0x1,recognition['start']();const _0x37963c=0x2710,_0x179b22=setTimeout(()=>{recognition['stop']();},_0x37963c);recognition[_0x157b9e(0x1ab)]=_0x453a94=>{const _0x5efdf4=_0x157b9e;clearTimeout(_0x179b22);const _0x4ed15d='biba';_0x4ed15d=_0x453a94[_0x5efdf4(0x1c7)][0x0][0x0][_0x5efdf4(0x1a6)],createdTextBox[_0x5efdf4(0x1b9)]=_0x4ed15d,playLetterSequence(_0x4ed15d);},recognition[_0x157b9e(0x1d1)]=()=>{clearTimeout(_0x179b22);},recognition[_0x157b9e(0x1df)]=_0x5cb420=>{console['error']('Speech\x20recognition\x20error:\x20',_0x5cb420['error']);};});const scene=new THREE[(_0x3a4ca6(0x1e5))](),camera=new THREE['PerspectiveCamera'](0x4b,window[_0x3a4ca6(0x1cc)]/window[_0x3a4ca6(0x1ac)],0.1,0x3e8),renderer=new THREE['WebGLRenderer']({'antialias':!![],'alpha':!![]});renderer['setSize'](window[_0x3a4ca6(0x1cc)],window[_0x3a4ca6(0x1ac)]),document[_0x3a4ca6(0x1c3)](_0x3a4ca6(0x1b7))[_0x3a4ca6(0x1db)](renderer[_0x3a4ca6(0x1ce)]);const ambientLight=new THREE[(_0x3a4ca6(0x1a3))](0xffffff,0.2);scene[_0x3a4ca6(0x1d8)](ambientLight);const lightPositions=[{'x':0xa,'y':0xa,'z':0xa},{'x':-0xa,'y':0xa,'z':0xa},{'x':0xa,'y':-0xa,'z':0xa},{'x':-0xa,'y':-0xa,'z':0xa},{'x':0xa,'y':0xa,'z':-0xa},{'x':-0xa,'y':0xa,'z':-0xa},{'x':0xa,'y':-0xa,'z':-0xa},{'x':-0xa,'y':-0xa,'z':-0xa}];lightPositions[_0x3a4ca6(0x1b1)](_0x480463=>{const _0x33962d=_0x3a4ca6,_0x984815=new THREE[(_0x33962d(0x1aa))](0xffffff,0.5);_0x984815[_0x33962d(0x1b2)][_0x33962d(0x1a8)](_0x480463['x'],_0x480463['y'],_0x480463['z']),scene['add'](_0x984815);});function isMobileDevice(){const _0x3aeaf1=_0x3a4ca6;return typeof window[_0x3aeaf1(0x1d6)]!==_0x3aeaf1(0x1c6)||navigator[_0x3aeaf1(0x1de)][_0x3aeaf1(0x1b5)]('Mobile')!==-0x1;}function adjustCameraPosition(){const _0x4b61a6=_0x3a4ca6;isMobileDevice()?camera[_0x4b61a6(0x1b2)]['z']=0x26:camera[_0x4b61a6(0x1b2)]['z']=0xf;}adjustCameraPosition();const loader=new THREE[(_0x3a4ca6(0x1ca))](),animationMap={'a':_0x3a4ca6(0x1d4),'b':_0x3a4ca6(0x1be),'c':_0x3a4ca6(0x1be),'d':'ArmatureAction.001','e':_0x3a4ca6(0x1be),'f':'ArmatureAction','g':_0x3a4ca6(0x1be),'h':_0x3a4ca6(0x1be),'i':'ArmatureAction.001','j':'ArmatureAction.001','k':_0x3a4ca6(0x1d4),'l':_0x3a4ca6(0x1d4),'m':_0x3a4ca6(0x1be),'n':_0x3a4ca6(0x1be),'o':'ArmatureAction','p':_0x3a4ca6(0x1d4),'q':_0x3a4ca6(0x1be),'r':_0x3a4ca6(0x1d4),'s':_0x3a4ca6(0x1d4),'t':_0x3a4ca6(0x1d4),'u':_0x3a4ca6(0x1d4),'v':_0x3a4ca6(0x1d4),'w':_0x3a4ca6(0x1d4),'x':_0x3a4ca6(0x1d4),'y':_0x3a4ca6(0x1d4),'z':'ArmatureAction'};function playAnimation(_0x2c7f4d,_0x425cec){const _0x2d1b26=_0x3a4ca6,_0x3be40f=_0x2d1b26(0x1af)+_0x2c7f4d+'.glb';loader['load'](_0x3be40f,function(_0x215465){const _0x3ac537=_0x2d1b26,_0x1403f7=_0x215465['scene'];_0x1403f7[_0x3ac537(0x1d3)][_0x3ac537(0x1a8)](0.5,0.5,0.5),_0x1403f7[_0x3ac537(0x1b2)][_0x3ac537(0x1a8)](0x0,-0x5,0x0),_0x1403f7[_0x3ac537(0x1da)]['x']=Math['PI']*0x2,_0x1403f7[_0x3ac537(0x1da)]['y']=4.71239,scene[_0x3ac537(0x1d8)](_0x1403f7);const _0x4d58c3=new THREE['AnimationMixer'](_0x1403f7),_0x13159b=animationMap[_0x2c7f4d],_0x505323=_0x215465[_0x3ac537(0x1b3)]['find'](_0x3b43b6=>_0x3b43b6[_0x3ac537(0x1ba)]===_0x13159b);if(_0x505323){const _0x4808b8=_0x4d58c3[_0x3ac537(0x1e2)](_0x505323);_0x4808b8[_0x3ac537(0x19d)](),console[_0x3ac537(0x1ae)](_0x3ac537(0x1d9)+_0x13159b+_0x3ac537(0x1bb)+_0x2c7f4d);function _0x3a767c(){const _0x3cb914=_0x3ac537;requestAnimationFrame(_0x3a767c),_0x2c7f4d=='g'||_0x2c7f4d=='h'||_0x2c7f4d=='j'?_0x4d58c3[_0x3cb914(0x19e)](0.005*(0xf0/refreshRate)):_0x4d58c3[_0x3cb914(0x19e)](0.01*(0xf0/refreshRate)),renderer['render'](scene,camera);}_0x3a767c(),_0x2c7f4d=='g'||_0x2c7f4d=='h'||_0x2c7f4d=='j'?setTimeout(()=>{const _0x3d4d5a=_0x3ac537;scene[_0x3d4d5a(0x1cf)](_0x1403f7);if(_0x425cec)_0x425cec();},0xbb8):setTimeout(()=>{scene['remove'](_0x1403f7);if(_0x425cec)_0x425cec();},0x5dc);}else{console[_0x3ac537(0x1e4)](_0x3ac537(0x1b0)+_0x13159b+_0x3ac537(0x1a5)+_0x2c7f4d);if(_0x425cec)_0x425cec();}},undefined,function(_0x4680ec){const _0x5d4bc6=_0x2d1b26;console[_0x5d4bc6(0x1e4)](_0x5d4bc6(0x19f)+_0x2c7f4d+_0x5d4bc6(0x1b8),_0x4680ec);if(_0x425cec)_0x425cec();});}function _0x33f8(_0xc637bc,_0x167c05){const _0x1a8327=_0x1a83();return _0x33f8=function(_0x33f8f9,_0x52405e){_0x33f8f9=_0x33f8f9-0x19d;let _0x26b30d=_0x1a8327[_0x33f8f9];return _0x26b30d;},_0x33f8(_0xc637bc,_0x167c05);}function playLetterSequence(_0x135e67='biba'){let _0x578349=0x0;function _0x267dca(){const _0x481d7a=_0x33f8;_0x578349<_0x135e67[_0x481d7a(0x1d0)]&&playAnimation(_0x135e67[_0x578349],()=>{_0x578349++,_0x267dca();});}_0x267dca();}function initSpeechRecognition(){const _0x227fa0=_0x3a4ca6,_0x45df44=window[_0x227fa0(0x1c1)]||window[_0x227fa0(0x1c9)],_0x20bd57=new _0x45df44();_0x20bd57['lang']='en-US',_0x20bd57['interimResults']=![],_0x20bd57[_0x227fa0(0x1cd)]=0x1;let _0x5d6ba8=![];_0x20bd57[_0x227fa0(0x1ab)]=function(_0x37b734){const _0x4cb514=_0x227fa0,_0x3c555d=_0x37b734[_0x4cb514(0x1c7)][0x0][0x0][_0x4cb514(0x1a6)]['toLowerCase'](),_0x25e49a=document[_0x4cb514(0x1a2)](_0x4cb514(0x1e3));_0x25e49a&&(_0x25e49a[_0x4cb514(0x1b9)]=_0x3c555d);const _0x4f3cbc=_0x3c555d[_0x4cb514(0x1bf)]('')[_0x4cb514(0x1c4)](_0x1d1d6b=>_0x1d1d6b[_0x4cb514(0x1c5)](/[a-z]/));console[_0x4cb514(0x1ae)](_0x4cb514(0x1e0),_0x4f3cbc),playLetterSequence(_0x4f3cbc),_0x5d6ba8=!![];},_0x20bd57[_0x227fa0(0x1d1)]=function(){const _0x41564c=_0x227fa0;!_0x5d6ba8&&alert(_0x41564c(0x1a7)),_0x5d6ba8=![];},document[_0x227fa0(0x1a2)](_0x227fa0(0x1b4))['addEventListener'](_0x227fa0(0x1e1),function(){const _0x1bd0b1=_0x227fa0;_0x20bd57['start'](),console[_0x1bd0b1(0x1ae)](_0x1bd0b1(0x1dc));});}initSpeechRecognition(),window['addEventListener'](_0x3a4ca6(0x1cb),()=>{const _0x56208d=_0x3a4ca6;adjustCameraPosition(),renderer[_0x56208d(0x1c0)](window['innerWidth'],window[_0x56208d(0x1ac)]),camera[_0x56208d(0x1bd)]=window[_0x56208d(0x1cc)]/window['innerHeight'],camera[_0x56208d(0x1dd)]();});