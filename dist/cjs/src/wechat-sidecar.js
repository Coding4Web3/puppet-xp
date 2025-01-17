"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChatSidecar = void 0;
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sidecar_1 = require("sidecar");
const cjs_js_1 = require("./cjs.js");
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
            initAgentScript = fs_1.default.readFileSync(path_1.default.join(cjs_js_1.codeRoot, 'src', 'agents', 'agent-script-3.3.0.115.js'), 'utf-8');
            break;
        case supportedVersions.v360000:
            // initAgentScript = fs.readFileSync(path.join(
            //   codeRoot,
            //   'src',
            //   'agents',
            //   'agent-script-3.6.0.18.js',
            // ), 'utf-8')
            initAgentScript = fs_1.default.readFileSync(path_1.default.join(cjs_js_1.codeRoot, 'src', 'init-agent-script.js'), 'utf-8');
            break;
        default:
            throw new Error(`Wechat version not supported. \nWechat version: ${currentVersion}, supported version: ${JSON.stringify(supportedVersions)}`);
    }
}
catch (e) { }
let WeChatSidecar = class WeChatSidecar extends sidecar_1.SidecarBody {
    getTestInfo() { return (0, sidecar_1.Ret)(); }
    getChatroomMemberNickInfo(memberId, roomId) { return (0, sidecar_1.Ret)(memberId, roomId); }
    isLoggedIn() { return (0, sidecar_1.Ret)(); }
    getMyselfInfo() { return (0, sidecar_1.Ret)(); }
    getChatroomMemberInfo() { return (0, sidecar_1.Ret)(); }
    getWeChatVersion() { return (0, sidecar_1.Ret)(); }
    getWechatVersionString() { return (0, sidecar_1.Ret)(); }
    checkSupported() { return (0, sidecar_1.Ret)(); }
    callLoginQrcode(forceRefresh) { return (0, sidecar_1.Ret)(forceRefresh); }
    getContact() { return (0, sidecar_1.Ret)(); }
    sendMsg(contactId, text) { return (0, sidecar_1.Ret)(contactId, text); }
    sendAttatchMsg(contactId, path) { return (0, sidecar_1.Ret)(contactId, path); }
    sendPicMsg(contactId, path) { return (0, sidecar_1.Ret)(contactId, path); }
    sendAtMsg(roomId, text, contactId) { return (0, sidecar_1.Ret)(roomId, text, contactId); }
    SendMiniProgram(BgPathStr, contactId, xmlstr) { return (0, sidecar_1.Ret)(BgPathStr, contactId, xmlstr); }
    recvMsg(msgType, contactId, text, groupMsgSenderId, xmlContent, isMyMsg) { return (0, sidecar_1.Ret)(msgType, contactId, text, groupMsgSenderId, xmlContent, isMyMsg); }
    checkQRLogin(status, qrcodeUrl, wxid, avatarUrl, nickname, phoneType, phoneClientVer, pairWaitTip) { return (0, sidecar_1.Ret)(status, qrcodeUrl, wxid, avatarUrl, nickname, phoneType, phoneClientVer, pairWaitTip); }
    logoutEvent(bySrv) { return (0, sidecar_1.Ret)(bySrv); }
    loginEvent() { return (0, sidecar_1.Ret)(); }
    agentReady() { return (0, sidecar_1.Ret)(); }
};
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getTestInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getTestInfo", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getChatroomMemberNickInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getChatroomMemberNickInfo", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('isLoggedInFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "isLoggedIn", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getMyselfInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getMyselfInfo", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getChatroomMemberInfoFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getChatroomMemberInfo", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getWechatVersionFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getWeChatVersion", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getWechatVersionStringFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getWechatVersionString", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('checkSupportedFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "checkSupported", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('callLoginQrcodeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "callLoginQrcode", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getContactNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "getContact", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('sendMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendMsg", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('sendPicMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendAttatchMsg", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('sendPicMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendPicMsg", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('sendAtMsgNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "sendAtMsg", null);
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('SendMiniProgramNativeFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], WeChatSidecar.prototype, "SendMiniProgram", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('recvMsgNativeCallback')),
    __param(0, (0, sidecar_1.ParamType)('int32', 'U32')),
    __param(1, (0, sidecar_1.ParamType)('pointer', 'Utf16String')),
    __param(2, (0, sidecar_1.ParamType)('pointer', 'Utf16String')),
    __param(3, (0, sidecar_1.ParamType)('pointer', 'Utf16String')),
    __param(4, (0, sidecar_1.ParamType)('pointer', 'Utf16String')),
    __param(5, (0, sidecar_1.ParamType)('int32', 'U32')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "recvMsg", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('checkQRLoginNativeCallback')),
    __param(0, (0, sidecar_1.ParamType)('int32', 'U32')),
    __param(1, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __param(2, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __param(3, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __param(4, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __param(5, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __param(6, (0, sidecar_1.ParamType)('int32', 'U32')),
    __param(7, (0, sidecar_1.ParamType)('pointer', 'Utf8String')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, Number, String]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "checkQRLogin", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('hookLogoutEventCallback')),
    __param(0, (0, sidecar_1.ParamType)('int32', 'U32')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "logoutEvent", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('hookLoginEventCallback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "loginEvent", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('agentReadyCallback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeChatSidecar.prototype, "agentReady", null);
WeChatSidecar = __decorate([
    (0, sidecar_1.Sidecar)('WeChat.exe', initAgentScript)
], WeChatSidecar);
exports.WeChatSidecar = WeChatSidecar;
//# sourceMappingURL=wechat-sidecar.js.map