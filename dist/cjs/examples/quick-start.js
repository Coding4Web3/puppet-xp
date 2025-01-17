"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wechaty - Conversational RPA SDK for Chatbot Makers.
 *  - https://github.com/wechaty/wechaty
 */
const wechaty_1 = require("wechaty");
const file_box_1 = require("file-box");
const puppet_xp_js_1 = require("../src/puppet-xp.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const promises_1 = __importDefault(require("timers/promises"));
function onScan(qrcode, status) {
    if (qrcode) {
        const qrcodeImageUrl = [
            'https://wechaty.js.org/qrcode/',
            encodeURIComponent(qrcode),
        ].join('');
        console.info('StarterBot', 'onScan: %s(%s) - %s', status, qrcodeImageUrl);
        qrcode_terminal_1.default.generate(qrcode, { small: true }); // show qrcode on console
        console.info(`[${status}] ${qrcode}\nScan QR Code above to log in: `);
    }
    else {
        console.info(`[${status}]`);
    }
}
async function onLogin(user) {
    wechaty_1.log.info('StarterBot', '%s login', user);
    const roomList = await bot.Room.findAll();
    console.info('room count:', roomList.length);
    const contactList = await bot.Contact.findAll();
    console.info('contact count:', contactList.length);
}
function onLogout(user) {
    wechaty_1.log.info('LogooutBot', '%s logout', user);
}
async function onMessage(message) {
    // log.info('onMessage', JSON.stringify(message))
    // Message doc : https://wechaty.js.org/docs/api/message#messageage--number
    wechaty_1.log.info('message.text()', message.text());
    let logList = [];
    logList.push({
        "method": ".talker()",
        "description": "talker",
        "content": message.talker(),
        "supported": true
    });
    logList.push({
        "method": ".listener()",
        "description": "listener",
        "content": message.listener(),
        "supported": true
    });
    logList.push({
        "method": ".room()",
        "description": "room",
        "content": message.room(),
        "supported": true
    });
    logList.push({
        "method": ".text()",
        "description": "text",
        "content": message.text().length,
        "supported": true
    });
    if (message.type() === bot.Message.Type.Recalled) {
        const recalledMessage = await message.toRecalled();
        logList.push({
            "method": ".toRecalled()",
            "description": "recalledMessage",
            "content": recalledMessage,
            "supported": true
        });
    }
    logList.push({
        "method": ".type()",
        "description": "type",
        "content": bot.Message.Type[message.type()],
        "supported": true
    });
    logList.push({
        "method": ".self()",
        "description": "self",
        "content": message.self(),
        "supported": true
    });
    logList.push({
        "method": ".mentionList()",
        "description": "mentionList",
        "content": await message.mentionList(),
        "supported": false
    });
    logList.push({
        "method": ".mentionSelf()",
        "description": "mentionSelf",
        "content": await message.mentionSelf(),
        "supported": false
    });
    logList.push({
        "method": ".date()",
        "description": "date",
        "content": message.date(),
        "supported": true
    });
    logList.push({
        "method": ".age()",
        "description": "age",
        "content": message.age(),
        "supported": false
    });
    // const contact = await bot.Contact.find({ id:"tyutluyc"} )
    // if (contact) {
    //   await message.forward(contact)
    //   console.log('forward this message to wechaty room!')
    // }
    try {
        if ([wechaty_1.types.Message.Image, wechaty_1.types.Message.Attachment].includes(message.type())) {
            const file = await message.toFileBox();
            wechaty_1.log.info('file', file);
        }
        if ([wechaty_1.types.Message.Audio, wechaty_1.types.Message.Video].includes(message.type())) {
            // const file = await message.toFileBox()
            // log.info('file', file)
        }
        if ([wechaty_1.types.Message.Contact,].includes(message.type())) {
            const contact = await message.toContact();
            wechaty_1.log.info('contact', contact);
        }
        if ([wechaty_1.types.Message.Url,].includes(message.type())) {
            const urllink = await message.toUrlLink();
            wechaty_1.log.info('urllink', JSON.stringify(urllink));
        }
        if ([wechaty_1.types.Message.MiniProgram,].includes(message.type())) {
            const miniProgram = await message.toMiniProgram();
            wechaty_1.log.info('miniProgram', JSON.stringify(miniProgram));
        }
        if ([wechaty_1.types.Message.Location,].includes(message.type())) {
            const location = await message.toLocation();
            wechaty_1.log.info('location', location);
            // log.info('location', JSON.stringify(location))
        }
    }
    catch (err) {
        console.error(err);
    }
    console.table(logList);
    // message.say(textOrContactOrFileOrUrlLinkOrMiniProgram) ⇒ Promise <void>
    // 1. send Image
    if (/^ding$/i.test(message.text())) {
        const fileBox = file_box_1.FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png');
        await message.say(fileBox);
    }
    // 2. send Text
    if (/^dong$/i.test(message.text())) {
        await message.say('dingdingding');
    }
    // 3. send Contact (not supported by `wechaty-puppet-xp`)
    if (/^luyuchao$/i.test(message.text())) {
        const contactCard = await bot.Contact.find({ name: 'luyuchao' });
        if (!contactCard) {
            console.log('not found');
            return;
        }
        await message.say(contactCard);
    }
    // 4. send UrlLink (not supported by `wechaty-puppet-xp`)
    if (/^link$/i.test(message.text())) {
        const urlLink = new bot.UrlLink({
            description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',
            thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',
            title: 'Wechaty',
            url: 'https://github.com/wechaty/wechaty',
        });
        await message.say(urlLink);
    }
    // 5. send MiniProgram (only supported send MiniProgram-card by `wechaty-puppet-xp`)
    if (/^miniprogram$/i.test(message.text())) {
        const miniProgram = new bot.MiniProgram({
            "appid": "wx2672757b4553d5d7",
            "username": "gh_b5403cc2567a@app",
            "title": "老板，跟团成功了，期待早日收到货～",
            "description": "快团团",
            "pagePath": "pages/activity/activity.html?collection_activity_no=09q1pnruc-iaYtsgvybo27McLJakXiqA&_x_group_user_no=9oQOSQZWvnckqQCQ2NxQfg%3D%3D&_kttpay_tr_sc=20&_x_rec_universal_src=24&_x_open_g_id=8fT24HFUKmI4vEbWSwGUXeKLn3-Vi2xLVZ6ph3ykqJc&ref_share_uid=6476598635&ref_share_user_no=r%2FRAJBK02Ly2uwEiZDGmwA%3D%3D&ref_share_channel=message&ref_share_id=09b1413a-fc4a-4b19-85d4-312d6ad4f835",
            "iconUrl": "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7vHclwjpAEVQaRS84MiaickACFFbiaOHvQIold00TeM5lxQ/96",
            "shareId": "1_wx2672757b4553d5d7_b7c8b70984122729d25b1e5b3555af9f_1651587810_0",
            "thumbUrl": "3057020100044b304902010002040082c1ed02032f4f560204107bc2dc0204627177fc042465326633663036612d643335312d346265372d393434302d3738396630663534393562380204011400030201000405004c52ae00",
            "thumbKey": "50bf1931a24f38414d8f62d2166bde65"
        });
        await message.say(miniProgram);
    }
    if (message.type() === wechaty_1.types.Message.Image && false) {
        const img = await message.toImage();
        const thumbFile = await img.thumbnail();
        wechaty_1.log.info('thumbFile', thumbFile.name);
        await thumbFile.toFile(`${process.cwd()}/cache/${thumbFile.name}`, true);
        await promises_1.default.setTimeout(500);
        console.info(img);
        const hdFile = await img.hd();
        wechaty_1.log.info('hdFile', hdFile.name);
        await hdFile.toFile(`${process.cwd()}/cache/${hdFile.name}`, true);
        // setTimeout(message.wechaty.wrapAsync(
        //   async function () {
        //     const imginfo = await message.toFileBox()
        //     console.info(imginfo)
        //   },
        // ), 500)
    }
}
const puppet = new puppet_xp_js_1.PuppetXp();
const bot = wechaty_1.WechatyBuilder.build({
    name: 'ding-dong-bot',
    puppet,
});
bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot.on('message', onMessage);
bot.start()
    .then(() => {
    return wechaty_1.log.info('StarterBot', 'Starter Bot Started.');
})
    .catch(console.error);
//# sourceMappingURL=quick-start.js.map