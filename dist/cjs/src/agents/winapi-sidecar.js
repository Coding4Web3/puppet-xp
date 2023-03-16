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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChatVersion = void 0;
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
const cjs_js_1 = require("../cjs.js");
const winapi = fs_1.default.readFileSync(path_1.default.join(cjs_js_1.codeRoot, 'src', 'agents', 'winapi.js'), 'utf-8');
let WeChatVersion = class WeChatVersion extends sidecar_1.SidecarBody {
    //       @Call(agentTarget('getWechatVersion'))
    //    getWechatVersion ():Promise<string> { return Ret() }
    getWechatVersion() { return (0, sidecar_1.Ret)(); }
    agentReady() { return (0, sidecar_1.Ret)(); }
};
__decorate([
    (0, sidecar_1.Call)((0, sidecar_1.agentTarget)('getWechatVersionStringFunction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeChatVersion.prototype, "getWechatVersion", null);
__decorate([
    (0, sidecar_1.Hook)((0, sidecar_1.agentTarget)('agentReadyCallback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeChatVersion.prototype, "agentReady", null);
WeChatVersion = __decorate([
    (0, sidecar_1.Sidecar)('WeChat.exe', winapi)
], WeChatVersion);
exports.WeChatVersion = WeChatVersion;
//# sourceMappingURL=winapi-sidecar.js.map