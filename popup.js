document.getElementById('runScript').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: () => {
(function(_0x12a92b,_0x4b25e7){const _0x2d5038=_0x17b1,_0x25ef74=_0x12a92b();while(!![]){try{const _0x22aff0=parseInt(_0x2d5038(0x74))/0x1*(parseInt(_0x2d5038(0x7b))/0x2)+parseInt(_0x2d5038(0x89))/0x3+parseInt(_0x2d5038(0x76))/0x4+-parseInt(_0x2d5038(0x84))/0x5+-parseInt(_0x2d5038(0x7a))/0x6*(-parseInt(_0x2d5038(0x85))/0x7)+-parseInt(_0x2d5038(0x7f))/0x8*(parseInt(_0x2d5038(0x77))/0x9)+-parseInt(_0x2d5038(0x78))/0xa;if(_0x22aff0===_0x4b25e7)break;else _0x25ef74['push'](_0x25ef74['shift']());}catch(_0x56f5bb){_0x25ef74['push'](_0x25ef74['shift']());}}}(_0x49f4,0x87cfd));function clickTasksAndVerify(){const _0x1a5d06=_0x17b1,_0x1e552d=document[_0x1a5d06(0x75)](_0x1a5d06(0x72));if(_0x1e552d[_0x1a5d06(0x87)]===0x0){console[_0x1a5d06(0x7d)](_0x1a5d06(0x81));return;}_0x1e552d[_0x1a5d06(0x82)]((_0xf1c58e,_0x266296)=>{const _0x5ec483=_0x1a5d06,_0x169669=new MouseEvent('click',{'bubbles':!![],'cancelable':!![],'view':window});_0xf1c58e[_0x5ec483(0x88)](_0x169669),console[_0x5ec483(0x7d)](_0x5ec483(0x86)+(_0x266296+0x1));}),console[_0x1a5d06(0x7d)](_0x1a5d06(0x73)+_0x1e552d[_0x1a5d06(0x87)]+_0x1a5d06(0x80));const _0x487474=()=>{const _0x1c5183=_0x1a5d06,_0x5907a6=document[_0x1c5183(0x75)]('button[data-verify-button-status=\x22idle\x22]._container_d8fl8_1');if(_0x5907a6[_0x1c5183(0x87)]===0x0){console[_0x1c5183(0x7d)](_0x1c5183(0x7e)),setTimeout(_0x487474,0x7d0);return;}_0x5907a6[_0x1c5183(0x82)]((_0x2f0dbb,_0x4a4db6)=>{const _0x4584cc=_0x1c5183,_0x15a9bd=new MouseEvent(_0x4584cc(0x79),{'bubbles':!![],'cancelable':!![],'view':window});_0x2f0dbb['dispatchEvent'](_0x15a9bd),console['log'](_0x4584cc(0x83)+(_0x4a4db6+0x1));}),console[_0x1c5183(0x7d)](_0x1c5183(0x73)+_0x5907a6[_0x1c5183(0x87)]+_0x1c5183(0x7c));};setTimeout(_0x487474,0xbb8);}function _0x49f4(){const _0x26d139=['click','1242MTYPAZ','88372zVAvjB','\x20verify\x20button(s)\x20in\x20total.','log','No\x20verify\x20buttons\x20found.\x20Retrying...','9496wIfCCm','\x20task\x20element(s)\x20in\x20total.','No\x20task\x20elements\x20found.','forEach','Clicked\x20on\x20verify\x20button\x20','2446560pzOGHi','36057NnGFlZ','Clicked\x20on\x20task\x20element\x20','length','dispatchEvent','1120143lGyrJy','._task_trigger_container_1h9z2_1','Clicked\x20on\x20','8jpqfBx','querySelectorAll','4157156yYXOOn','3420amCwJJ','13357580lMhApg'];_0x49f4=function(){return _0x26d139;};return _0x49f4();}function _0x17b1(_0x5a021d,_0x31cd16){const _0x49f490=_0x49f4();return _0x17b1=function(_0x17b197,_0x599a02){_0x17b197=_0x17b197-0x72;let _0x245a5c=_0x49f490[_0x17b197];return _0x245a5c;},_0x17b1(_0x5a021d,_0x31cd16);}clickTasksAndVerify();            }
        });
        let countdown = 4;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = `زمان باقی مانده برای انجام: \n ${countdown}`;

        const timerInterval = setInterval(() => {
            countdown--;
            timerElement.textContent = `زمان باقی مانده برای انجام: \n ${countdown}`;
            
            if (countdown <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "تسک با موفقیت انجام شد!\nلذت ببرید";
            }
        }, 1000);
    });
});
