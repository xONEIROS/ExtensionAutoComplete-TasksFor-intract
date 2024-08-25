document.getElementById('runScript').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: () => {
(function(_0x129557,_0x5eb73f){const _0x5a4515=_0x37ee,_0x317428=_0x129557();while(!![]){try{const _0x2dd985=-parseInt(_0x5a4515(0xfd))/0x1*(-parseInt(_0x5a4515(0x102))/0x2)+-parseInt(_0x5a4515(0x109))/0x3*(parseInt(_0x5a4515(0x10c))/0x4)+parseInt(_0x5a4515(0xfa))/0x5*(-parseInt(_0x5a4515(0xfe))/0x6)+parseInt(_0x5a4515(0x10e))/0x7+-parseInt(_0x5a4515(0x10b))/0x8+parseInt(_0x5a4515(0x10a))/0x9+parseInt(_0x5a4515(0x100))/0xa;if(_0x2dd985===_0x5eb73f)break;else _0x317428['push'](_0x317428['shift']());}catch(_0x520e1b){_0x317428['push'](_0x317428['shift']());}}}(_0x5d50,0x72567));function _0x37ee(_0x2bd914,_0x5484e4){const _0x5d508c=_0x5d50();return _0x37ee=function(_0x37eedb,_0xec17dc){_0x37eedb=_0x37eedb-0xfa;let _0x12d490=_0x5d508c[_0x37eedb];return _0x12d490;},_0x37ee(_0x2bd914,_0x5484e4);}function triggerClick(_0x578023){const _0x51aaf7=_0x37ee,_0x2f26dd=new MouseEvent(_0x51aaf7(0x103),{'view':window,'bubbles':!![],'cancelable':!![]});_0x578023['dispatchEvent'](_0x2f26dd);}function wait(_0x2f98ee){return new Promise(_0x394816=>setTimeout(_0x394816,_0x2f98ee));}async function processTasks(){const _0x48c10b=_0x37ee,_0x265245=document[_0x48c10b(0x107)](_0x48c10b(0x104));for(const _0x53e7fe of _0x265245){const _0x227f17=_0x53e7fe[_0x48c10b(0x10f)](_0x48c10b(0xff));if(_0x227f17&&_0x227f17[_0x48c10b(0x105)][_0x48c10b(0x10d)](_0x48c10b(0xfc))){console[_0x48c10b(0xfb)](_0x48c10b(0x108));continue;}triggerClick(_0x53e7fe),console['log']('Clicked\x20task\x20container'),await wait(0x3e8);const _0xde3ba9=_0x53e7fe['querySelector'](_0x48c10b(0x101));_0xde3ba9&&(triggerClick(_0xde3ba9),console[_0x48c10b(0xfb)]('Clicked\x20verify\x20button'));}console[_0x48c10b(0xfb)](_0x48c10b(0x106));}function _0x5d50(){const _0x470f68=['div[data-badge-size=\x22md\x22][data-button-badge-variant=\x22tertiary\x22]','10606830eKxXpg','button[data-verify-button-status=\x22idle\x22][data-verify-button-disabled=\x22false\x22]','2tGEljL','click','div._accordian_base_container_1vd77_1','textContent','All\x20tasks\x20processed!','querySelectorAll','Skipping\x20completed\x20task','3PEMPQa','5064093VBCBpo','746696ihsZBL','1873116knNDGk','includes','1415477brsExz','querySelector','44985YvnbBZ','log','Completed','5105fydOaF','534UDMxDJ'];_0x5d50=function(){return _0x470f68;};return _0x5d50();}processTasks();
            }
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
