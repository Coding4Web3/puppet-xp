var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 *   Sidecar - https://github.com/huan/sidecar
 *
 *   @copyright 2021 Huan LI (李卓桓) <https://github.com/huan>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
import fs from 'fs';
import path from 'path';
import { Sidecar, SidecarBody, Call, Hook, ParamType, Ret, agentTarget,
// attach,
// detach,
 } from 'sidecar';
import { codeRoot } from './cjs.js';
// import { WeChatVersion } from './agents/winapi-sidecar.js'
const supportedVersions = {
    v330115: '3.3.0.115',
    v360000: '3.6.0.18',
};
// let initAgentScript = fs.readFileSync(path.join(
//   codeRoot,
//   'src',
//   'agents',
//   'agent-script-3.3.0.115.js',
// ), 'utf-8')
let initAgentScript = '';
try {
    // const wechatVersion = new WeChatVersion()
    // await attach(wechatVersion)
    // const currentVersion = await wechatVersion.getWechatVersion()
    // console.info('currentVersion is ............................................... ：', currentVersion)
    // await detach(wechatVersion)
    const currentVersion = '3.6.0.18';
    switch (currentVersion) {
        case supportedVersions.v330115:
            initAgentScript = fs.readFileSync(path.join(codeRoot, 'src', 'agents', 'agent-script-3.3.0.115.js'), 'utf-8');
            break;
        case supportedVersions.v360000:
            // initAgentScript = fs.readFileSync(path.join(
            //   codeRoot,
            //   'src',
            //   'agents',
            //   'agent-script-3.6.0.18.js',
            // ), 'utf-8')
            initAgentScript = fs.readFileSync(path.join(codeRoot, 'src', 'init-agent-script.js'), 'utf-8');
            break;
        default:
            throw new Error(`Wechat version not supported. \nWechat version: ${currentVersion}, supported version: ${JSON.stringify(supportedVersions)}`);
    }
}
catch (e) { }
let WeChatSidecar = class WeChatSidecar extends SidecarBody {
    getTestInfo() { return Ret(); }
    getChatroomMemberNickInfo(memberId, roomId) { return Ret(memberId, roomId); }
    isLoggedIn() { return Ret(); }
    getMyselfInfo() { return Ret(); }
    getChatroomMemberInfo() { return Ret(); }
    getWeChatVersion() { return Ret(); }
    getWechatVersionString() { return Ret(); }
    checkSupported() { return Ret(); }
    callLoginQrcode(forceRefresh) { return Ret(forceRefresh); }
    getContact() { return Ret(); }
    sendMsg(contactId, text) { return Ret(contactId, text); }
    sendAttatchMsg(contactId, path) { return Ret(contactId, path); }
    sendPicMsg(contactId, path) { return Ret(contactId, path); }
    sendAtMsg(roomId, text, contactId) { return Ret(roomId, text, contactId); }
    SendMiniProgram(BgPathStr, contactId, xmlstr) { return Ret(BgPathStr, contactId, xmlstr); }
    recvMsg(msgType, contactId, text, groupMsgSenderId, xmlContent, isMyMsg) { return Ret(msgType, contactId, text, groupMsgSenderId, xmlContent, isMyMsg); }
    checkQRLogin(status, qrcodeUrl, wxid, avatarUrl, nickname, phoneType, phoneClientVer, pairWaitTip) { return Ret(status, qrcodeUrl, wxid, avatarUrl, nickname, phoneType, phoneClientVer, pairWaitTip); }
    logoutEvent(bySrv) { return Ret(bySrv); }
    loginEvent() { return Ret(); }
    agentReady() { return Ret(); }
};
__decorate([
    Call(agentTarget('getTestInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getTestInfo", null);
__decorate([
    Call(agentTarget('getChatroomMemberNickInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getChatroomMemberNickInfo", null);
__decorate([
    Call(agentTarget('isLoggedInFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "isLoggedIn", null);
__decorate([
    Call(agentTarget('getMyselfInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getMyselfInfo", null);
__decorate([
    Call(agentTarget('getChatroomMemberInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getChatroomMemberInfo", null);
__decorate([
    Call(agentTarget('getWechatVersionFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getWeChatVersion", null);
__decorate([
    Call(agentTarget('getWechatVersionStringFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getWechatVersionString", null);
__decorate([
    Call(agentTarget('checkSupportedFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "checkSupported", null);
__decorate([
    Call(agentTarget('callLoginQrcodeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "callLoginQrcode", null);
__decorate([
    Call(agentTarget('getContactNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getContact", null);
__decorate([
    Call(agentTarget('sendMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendMsg", null);
__decorate([
    Call(agentTarget('sendPicMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendAttatchMsg", null);
__decorate([
    Call(agentTarget('sendPicMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendPicMsg", null);
__decorate([
    Call(agentTarget('sendAtMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendAtMsg", null);
__decorate([
    Call(agentTarget('SendMiniProgramNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "SendMiniProgram", null);
__decorate([
    Hook(agentTarget('recvMsgNativeCallback')),
    __param(0, ParamType('int32', 'U32')),
    __param(1, ParamType('pointer', 'Utf16String')),
    __param(2, ParamType('pointer', 'Utf16String')),
    __param(3, ParamType('pointer', 'Utf16String')),
    __param(4, ParamType('pointer', 'Utf16String')),
    __param(5, ParamType('int32', 'U32')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "recvMsg", null);
__decorate([
    Hook(agentTarget('checkQRLoginNativeCallback')),
    __param(0, ParamType('int32', 'U32')),
    __param(1, ParamType('pointer', 'Utf8String')),
    __param(2, ParamType('pointer', 'Utf8String')),
    __param(3, ParamType('pointer', 'Utf8String')),
    __param(4, ParamType('pointer', 'Utf8String')),
    __param(5, ParamType('pointer', 'Utf8String')),
    __param(6, ParamType('int32', 'U32')),
    __param(7, ParamType('pointer', 'Utf8String')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, Number, String]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "checkQRLogin", null);
__decorate([
    Hook(agentTarget('hookLogoutEventCallback')),
    __param(0, ParamType('int32', 'U32')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "logoutEvent", null);
__decorate([
    Hook(agentTarget('hookLoginEventCallback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "loginEvent", null);
__decorate([
    Hook(agentTarget('agentReadyCallback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "agentReady", null);
WeChatSidecar = __decorate([
    Sidecar('WeChat.exe', initAgentScript)
], WeChatSidecar);
export { WeChatSidecar };
//# sourceMappingURL=wechat-sidecar.js.map