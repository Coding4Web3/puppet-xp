import xml2js from 'xml2js';
// import readXml from 'xmlreader'
import * as PUPPET from 'wechaty-puppet';
import { log } from 'wechaty-puppet';
// import type {
//     FileBoxInterface,
// } from 'file-box'
// import {
//     FileBox,
//     FileBoxType,
// } from 'file-box'
async function XmlDecrypt(xml, msgType) {
    let res;
    log.verbose('PuppetXp', 'text xml:(%s)', xml);
    const parser = new xml2js.Parser( /* options */);
    const messageJson = await parser.parseStringPromise(xml || '');
    // log.info(JSON.stringify(messageJson))
    switch (msgType) {
        case PUPPET.types.Message.Attachment:
            break;
        case PUPPET.types.Message.Audio:
            break;
        case PUPPET.types.Message.Contact: {
            res = messageJson.msg['$'].username;
            break;
        }
        case PUPPET.types.Message.ChatHistory:
            break;
        case PUPPET.types.Message.Emoticon:
            break;
        case PUPPET.types.Message.Image:
            break;
        case PUPPET.types.Message.Text:
            break;
        case PUPPET.types.Message.Location: {
            const location = messageJson.msg.location[0]['$'];
            const LocationPayload = {
                accuracy: location.scale,
                address: location.label,
                latitude: location.x,
                longitude: location.y,
                name: location.poiname, // "东升乡人民政府(海淀区成府路45号)"
            };
            res = LocationPayload;
            break;
        }
        case PUPPET.types.Message.MiniProgram: {
            const appmsg = messageJson.msg.appmsg[0];
            const MiniProgramPayload = {
                appid: appmsg.weappinfo[0].appid[0],
                description: appmsg.des[0],
                iconUrl: appmsg.weappinfo[0].weappiconurl[0],
                pagePath: appmsg.weappinfo[0].pagepath[0],
                shareId: appmsg.weappinfo[0].shareId[0],
                thumbKey: appmsg.appattach[0].cdnthumbaeskey[0],
                thumbUrl: appmsg.appattach[0].cdnthumburl[0],
                title: appmsg.title[0],
                username: appmsg.weappinfo[0].username[0], // original ID, get from wechat (mp.weixin.qq.com)
            };
            res = MiniProgramPayload;
            break;
        }
        case PUPPET.types.Message.GroupNote:
            break;
        case PUPPET.types.Message.Transfer:
            break;
        case PUPPET.types.Message.RedEnvelope:
            break;
        case PUPPET.types.Message.Recalled:
            break;
        case PUPPET.types.Message.Url: {
            // log.info(JSON.stringify(messageJson))
            const appmsg = messageJson.msg.appmsg[0];
            const UrlLinkPayload = {
                description: appmsg.des[0],
                thumbnailUrl: appmsg.appattach[0].cdnthumburl,
                title: appmsg.title[0],
                url: appmsg.url[0],
            };
            res = UrlLinkPayload;
            break;
        }
        case PUPPET.types.Message.Video:
            break;
        case PUPPET.types.Message.Post:
            break;
        default:
            res = {};
    }
    return res;
}
export { XmlDecrypt, };
//# sourceMappingURL=xml-msgpayload.js.map