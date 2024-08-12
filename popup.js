document.getElementById('runScript').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: () => {
function _0x45f8(_0x3e524f,_0x4e421d){const _0x6997a5=_0x6997();return _0x45f8=function(_0x45f874,_0x331eab){_0x45f874=_0x45f874-0x144;let _0x1b1745=_0x6997a5[_0x45f874];return _0x1b1745;},_0x45f8(_0x3e524f,_0x4e421d);}(function(_0x4b923b,_0x349092){const _0x244fb2=_0x45f8,_0x364c34=_0x4b923b();while(!![]){try{const _0x468265=-parseInt(_0x244fb2(0x151))/0x1+-parseInt(_0x244fb2(0x15d))/0x2+-parseInt(_0x244fb2(0x14a))/0x3+-parseInt(_0x244fb2(0x14d))/0x4*(-parseInt(_0x244fb2(0x150))/0x5)+-parseInt(_0x244fb2(0x158))/0x6*(-parseInt(_0x244fb2(0x14c))/0x7)+parseInt(_0x244fb2(0x154))/0x8+parseInt(_0x244fb2(0x148))/0x9*(parseInt(_0x244fb2(0x152))/0xa);if(_0x468265===_0x349092)break;else _0x364c34['push'](_0x364c34['shift']());}catch(_0x15667d){_0x364c34['push'](_0x364c34['shift']());}}}(_0x6997,0xc73a1));function _0x6997(){const _0x5ba4b4=['555OVeFhD','1122886CZzLWo','338090uQgSDv','Clicked\x20on\x20verify\x20button\x20','2551648LEchQM','querySelectorAll','preventDefault','\x20task\x20element(s)\x20in\x20total.','1851888JLVMuz','Clicked\x20on\x20','log','._one_time_task_container_baselink_1ejbz_1','No\x20task\x20elements\x20found.','2198824UDWBik','stopPropagation','addEventListener','forEach','\x20verify\x20button(s)\x20in\x20total.','558GJxFpy','length','946068wCBlky','Clicked\x20on\x20task\x20element\x20','7PQNgii','22700mwCmDO','click','No\x20verify\x20buttons\x20found.'];_0x6997=function(){return _0x5ba4b4;};return _0x6997();}function clickTasksAndVerify(){const _0x4d40ef=_0x45f8,_0x2d0c7d=document['querySelectorAll'](_0x4d40ef(0x15b));if(_0x2d0c7d[_0x4d40ef(0x149)]===0x0){console[_0x4d40ef(0x15a)](_0x4d40ef(0x15c));return;}_0x2d0c7d[_0x4d40ef(0x146)]((_0x40e1c7,_0x373618)=>{const _0x4f94b8=_0x4d40ef;_0x40e1c7[_0x4f94b8(0x145)](_0x4f94b8(0x14e),_0x5c1dd3=>{const _0x2a030c=_0x4f94b8;_0x5c1dd3[_0x2a030c(0x156)](),_0x5c1dd3[_0x2a030c(0x144)]();},!![]),_0x40e1c7['click'](),console['log'](_0x4f94b8(0x14b)+(_0x373618+0x1));}),console[_0x4d40ef(0x15a)]('Clicked\x20on\x20'+_0x2d0c7d['length']+_0x4d40ef(0x157)),setTimeout(()=>{const _0x1eaade=_0x4d40ef,_0x295d70=document[_0x1eaade(0x155)]('button[data-verify-button-status=\x22idle\x22]._container_byz4l_1');if(_0x295d70[_0x1eaade(0x149)]===0x0){console[_0x1eaade(0x15a)](_0x1eaade(0x14f));return;}_0x295d70[_0x1eaade(0x146)]((_0x30ab64,_0xdd6ff5)=>{const _0x3df6ab=_0x1eaade;_0x30ab64['click'](),console[_0x3df6ab(0x15a)](_0x3df6ab(0x153)+(_0xdd6ff5+0x1));}),console[_0x1eaade(0x15a)](_0x1eaade(0x159)+_0x295d70[_0x1eaade(0x149)]+_0x1eaade(0x147));},0x1f40);}clickTasksAndVerify();
            }
        });
        let countdown = 8;
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
