import * as PUPPET from 'wechaty-puppet';
import type { FileBoxInterface } from 'file-box';
import { WeChatSidecar } from './wechat-sidecar.js';
export type PuppetXpOptions = PUPPET.PuppetOptions;
declare class PuppetXp extends PUPPET.Puppet {
    #private;
    options: PuppetXpOptions;
    static readonly VERSION: string;
    private messageStore;
    private roomStore;
    private contactStore;
    private scanEventData?;
    private selfInfo;
    protected get sidecar(): WeChatSidecar;
    constructor(options?: PuppetXpOptions);
    version(): string;
    onStart(): Promise<void>;
    private onAgentReady;
    private onLogin;
    private onLogout;
    private onScan;
    private onHookRecvMsg;
    onStop(): Promise<void>;
    login(contactId: string): void;
    ding(data?: string): void;
    notSupported(name: string): void;
    private loadContactList;
    private loadRoomList;
    /**
     *
     * ContactSelf
     *
     *
     */
    contactSelfQRCode(): Promise<string>;
    contactSelfName(name: string): Promise<void>;
    contactSelfSignature(signature: string): Promise<void>;
    /**
   *
   * Contact
   *
   */
    contactAlias(contactId: string): Promise<string>;
    contactAlias(contactId: string, alias: string | null): Promise<void>;
    contactPhone(contactId: string): Promise<string[]>;
    contactPhone(contactId: string, phoneList: string[]): Promise<void>;
    contactCorporationRemark(contactId: string, corporationRemark: string): Promise<void>;
    contactDescription(contactId: string, description: string): Promise<void>;
    contactList(): Promise<string[]>;
    contactAvatar(contactId: string): Promise<FileBoxInterface>;
    contactAvatar(contactId: string, file: FileBoxInterface): Promise<void>;
    contactRawPayloadParser(payload: PUPPET.payloads.Contact): Promise<PUPPET.payloads.Contact>;
    contactRawPayload(id: string): Promise<PUPPET.payloads.Contact>;
    /**
   *
   * Conversation
   *
   */
    conversationReadMark(conversationId: string, hasRead?: boolean): Promise<void>;
    /**
   *
   * Message
   *
   */
    messageContact(messageId: string): Promise<string>;
    messageImage(messageId: string, imageType: PUPPET.types.Image): Promise<FileBoxInterface>;
    messageRecall(messageId: string): Promise<boolean>;
    messageFile(id: string): Promise<FileBoxInterface>;
    messageUrl(messageId: string): Promise<PUPPET.payloads.UrlLink>;
    messageMiniProgram(messageId: string): Promise<PUPPET.payloads.MiniProgram>;
    messageLocation(messageId: string): Promise<PUPPET.payloads.Location>;
    messageRawPayloadParser(payload: PUPPET.payloads.Message): Promise<PUPPET.payloads.Message>;
    messageRawPayload(id: string): Promise<PUPPET.payloads.Message>;
    messageSendText(conversationId: string, text: string, mentionIdList?: string[]): Promise<void>;
    messageSendFile(conversationId: string, file: FileBoxInterface): Promise<void>;
    messageSendContact(conversationId: string, contactId: string): Promise<void>;
    messageSendUrl(conversationId: string, urlLinkPayload: PUPPET.payloads.UrlLink): Promise<void>;
    messageSendMiniProgram(conversationId: string, miniProgramPayload: PUPPET.payloads.MiniProgram): Promise<void>;
    messageSendLocation(conversationId: string, locationPayload: PUPPET.payloads.Location): Promise<void | string>;
    messageForward(conversationId: string, messageId: string): Promise<void>;
    /**
   *
   * Room
   *
   */
    roomRawPayloadParser(payload: PUPPET.payloads.Room): Promise<PUPPET.payloads.Room>;
    roomRawPayload(id: string): Promise<PUPPET.payloads.Room>;
    roomList(): Promise<string[]>;
    roomDel(roomId: string, contactId: string): Promise<void>;
    roomAvatar(roomId: string): Promise<FileBoxInterface>;
    roomAdd(roomId: string, contactId: string): Promise<void>;
    roomTopic(roomId: string): Promise<string>;
    roomTopic(roomId: string, topic: string): Promise<void>;
    roomCreate(contactIdList: string[], topic: string): Promise<string>;
    roomQuit(roomId: string): Promise<void>;
    roomQRCode(roomId: string): Promise<string>;
    roomMemberList(roomId: string): Promise<string[]>;
    roomMemberRawPayload(roomId: string, contactId: string): Promise<PUPPET.payloads.RoomMember>;
    roomMemberRawPayloadParser(rawPayload: PUPPET.payloads.RoomMember): Promise<PUPPET.payloads.RoomMember>;
    roomAnnounce(roomId: string): Promise<string>;
    roomAnnounce(roomId: string, text: string): Promise<void>;
    /**
   *
   * Room Invitation
   *
   */
    roomInvitationAccept(roomInvitationId: string): Promise<void>;
    roomInvitationRawPayload(roomInvitationId: string): Promise<any>;
    roomInvitationRawPayloadParser(rawPayload: any): Promise<PUPPET.payloads.RoomInvitation>;
    /**
   *
   * Friendship
   *
   */
    friendshipRawPayload(id: string): Promise<any>;
    friendshipRawPayloadParser(rawPayload: any): Promise<PUPPET.payloads.Friendship>;
    friendshipSearchPhone(phone: string): Promise<null | string>;
    friendshipSearchWeixin(weixin: string): Promise<null | string>;
    friendshipAdd(contactId: string, hello: string): Promise<void>;
    friendshipAccept(friendshipId: string): Promise<void>;
    /**
   *
   * Tag
   *
   */
    tagContactAdd(tagId: string, contactId: string): Promise<void>;
    tagContactRemove(tagId: string, contactId: string): Promise<void>;
    tagContactDelete(tagId: string): Promise<void>;
    tagContactList(contactId?: string): Promise<string[]>;
}
export { PuppetXp };
export default PuppetXp;
//# sourceMappingURL=puppet-xp.d.ts.map