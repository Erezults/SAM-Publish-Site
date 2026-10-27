import{c as O,v as P,r as F,N as B,x as K,j as I,b as Y,w as V,aj as x,s as b}from"./appMount-Bbu0yqUN.js";import{r as L}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=O("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);function C(e){return(e||"").trim().replace(/\/+$/,"")}function q(e,t){const s=C(e);if(!t)return s;const n=t.startsWith("/")?t:`/${t}`;return`${s}${n}`}const D={pre_event:"whatsapp_template_pre_event",pre_event_fcfs:"whatsapp_template_pre_event_fcfs",pre_event_non_ranking:"whatsapp_template_pre_event_non_ranking",pre_event_extra:"whatsapp_template_pre_event_extra"},A="whatsapp_template_variable_values",z="https://sam.erezults.com",U={pre_event:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} (סבב {מספר_מפגש_בסבב}) - {הערות}*

*🛡️ אירוח:* {מארח}

*🛡️ טבלה:* {שריון_טבלה}

*🛡️ הגרלה:* {שריון_הגרלה}

*🛡️ יום הולדת (אופצ'):* {שריון_יום_הולדת}

*🛡️ מתארח:* {שריון_מתארח}

* 🛑 הגעה ע״ב מקום פנוי:* {אורחי_החלפה}

להרשמה - פתח את הקישור הבא:

{קישור_דף_הרשמה}`,pre_event_fcfs:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} (סבב {מספר_מפגש_בסבב}) - {הערות}*

*⚡ סוג המפגש:* כל הקודם זוכה

*🛡️ אירוח:* {מארח}

*🛡️ מתארח:* {שריון_מתארח}

להרשמה - פתח את הקישור הבא:

{קישור_דף_הרשמה}`,pre_event_non_ranking:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} - {הערות}*

*📋 סוג המפגש:* שלא מן המניין

*🏠 אירוח:* {מארח}

להרשמה - פתח את הקישור הבא:

{קישור_דף_הרשמה}`,pre_event_extra:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} - {הערות}*

*⭐ סוג המפגש:* אקסטרא

*🛡️ אירוח:* {מארח}

*🛡️ טבלה:* {שריון_טבלה}

*🛡️ הגרלה:* {שריון_הגרלה}

*🛡️ יום הולדת (אופצ'):* {שריון_יום_הולדת}

*🛡️ מתארח:* {שריון_מתארח}

* 🛑 הגעה ע״ב מקום פנוי:* {אורחי_החלפה}

להרשמה - פתח את הקישור הבא:

{קישור_דף_הרשמה}`};function N(e){return e==="fcfs"?"pre_event_fcfs":e==="non_ranking"?"pre_event_non_ranking":e==="extra"?"pre_event_extra":"pre_event"}const Q=["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"];function H(e){const t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");if(!t)return"";const s=Number(t[1]),n=Number(t[2]),o=Number(t[3]);return`${Q[new Date(Date.UTC(s,n-1,o)).getUTCDay()]} ${o}.${n}.${s}`}function W(e,t){if(e&&typeof e=="object"&&"template"in e){const s=e.template;if(typeof s=="string")return s}return U[t]}function G(e){var r,l,i,p,u;const{event:t}=e;let s="",n="";t.host_id&&(s=((r=e.hostProfile)!=null&&r.is_test_account?"":(l=e.hostProfile)==null?void 0:l.emoji)||"🏠",n=((i=e.hostProfile)==null?void 0:i.address)||"");const o=new Map;for(const _ of e.shieldProfiles||[])_.id&&o.set(_.id,_);const c=[],g=[],d=[];for(const _ of e.shields||[]){const f=o.get(_.profile_id);!f||!f.emoji||!P(f)||(_.shield_type==="veteran_shield"?F(_.status,_.veteran_grade??null)&&c.push(f.emoji):_.shield_type==="birthday_shield"?_.status==="available"&&B(f.birthday,t.event_date)&&g.push(f.emoji):_.shield_type==="lottery_shield"&&_.status==="available"&&d.push(f.emoji))}let m="";if(e.hasHostedShield){const _=e.hostedBeneficiary;_?P(_)&&(m=_.emoji||"🏡"):m="🏡"}const h=(e.guestCandidates||[]).filter(_=>P(_)&&K(_)).map(_=>_.emoji).filter(Boolean);let E="";const v=(p=e.activeRound)==null?void 0:p.event_ids;if(Array.isArray(v)){const _=v.indexOf(t.id);_>=0&&(E=`${_+1}/${(u=e.activeRound)==null?void 0:u.games_count}`)}const a=N(t.event_type);return{template:W(e.templateSetting,a),formattedDate:H(t.event_date),formattedTime:(t.event_time||"").slice(0,5),eventNumber:t.event_number??null,roundPosition:E,adminNotes:t.admin_notes||"",hostEmoji:s,address:t.custom_address||n,veteranEmojis:c,birthdayEmojis:g,lotteryEmojis:d,hostedEmoji:m,guestEntryEmojis:h,appUrl:C(e.customDomain||z),freeTexts:e.variableValues||{}}}function J(e){var o,c;const t=((o=e.eventNumber)==null?void 0:o.toString())??null,s=t?`${q(e.appUrl,"/")}?game=${t}`:e.appUrl;return[[/{תאריך}/g,e.formattedDate],[/{שעה}/g,e.formattedTime],[/{מספר_מפגש}/g,((c=e.eventNumber)==null?void 0:c.toString())||""],[/{מספר_מפגש_בסבב}/g,e.roundPosition],[/{הערות}/g,e.adminNotes],[/{מארח}/g,e.hostEmoji||""],[/{כתובת}/g,e.address],[/{שריון_טבלה}/g,e.veteranEmojis.join(", ")],[/{שריון_יום_הולדת}/g,e.birthdayEmojis.join(", ")],[/{שריון_הגרלה}/g,e.lotteryEmojis.join(", ")],[/{שריון_מתארח}/g,e.hostedEmoji||""],[/{אורחי_החלפה}/g,e.guestEntryEmojis.join(", ")||"אין"],[/{קישור_לאירוע}/g,s],[/{קישור_דף_הרשמה}/g,q(e.appUrl,"/event-card")],[/{קישור_אפליקציה_כללי}/g,e.appUrl],[/{קישור}/g,s],[/{מלל_חופשי_1}/g,e.freeTexts.מלל_חופשי_1||""],[/{מלל_חופשי_2}/g,e.freeTexts.מלל_חופשי_2||""],[/{מלל_חופשי_3}/g,e.freeTexts.מלל_חופשי_3||""],[/{סיכום_טקסט}/g,e.freeTexts.סיכום_טקסט||""]].reduce((g,[d,m])=>g.replace(d,()=>m),e.template)}function y(e,t){var s;if(e.error){const n=((s=e.error)==null?void 0:s.message)||String(e.error);throw new Error(`pre-event message: failed to load ${t}: ${n}`)}return e.data}const k="is_test_account, deleted_at";async function X(e,t){var R;const s=y(await e.from("events").select("id, event_date, event_time, event_type, event_number, host_id, admin_notes, custom_address").eq("id",t).single(),"event"),n=D[N(s.event_type)],[o,c,g,d,m,h]=await Promise.all([e.from("settings").select("key, value").in("key",[n,A,"system"]),s.host_id?e.from("profiles").select(`emoji, address, ${k}`).eq("id",s.host_id).maybeSingle():Promise.resolve({data:null,error:null}),e.from("player_shields").select("profile_id, shield_type, status, veteran_grade").in("shield_type",["veteran_shield","birthday_shield","lottery_shield"]).or("status.eq.available,and(shield_type.eq.veteran_shield,veteran_grade.eq.priority)"),s.host_id?e.from("player_shields").select("beneficiary_profile_id").eq("profile_id",s.host_id).eq("shield_type","hosted_shield").eq("status","used").eq("used_event_id",s.id):Promise.resolve({data:[],error:null}),e.from("profiles").select(`emoji, next_event_guest_entry, is_absent, is_suspended, consistency_status, ${k}`).is("deleted_at",null),e.from("rounds").select("event_ids, games_count").eq("is_locked",!1).order("start_date",{ascending:!1}).limit(1).maybeSingle()]),E=y(o,"settings")||[],v=j=>{var S;return((S=E.find(M=>M.key===j))==null?void 0:S.value)??null},a=v("system"),r=v(A),l=y(g,"shields")||[],i=[...new Set(l.map(j=>j.profile_id))],u=((R=(y(d,"hosted shield")||[])[0])==null?void 0:R.beneficiary_profile_id)??null,[_,f]=await Promise.all([i.length>0?e.from("profiles").select(`id, emoji, birthday, ${k}`).in("id",i):Promise.resolve({data:[],error:null}),u?e.from("profiles").select(`emoji, ${k}`).eq("id",u).maybeSingle():Promise.resolve({data:null,error:null})]);return{event:s,templateSetting:v(n),variableValues:r&&typeof r=="object"?r:null,customDomain:(a==null?void 0:a.customDomain)??null,hostProfile:y(c,"host profile"),shields:l,shieldProfiles:y(_,"shield profiles")||[],hasHostedShield:!!u,hostedBeneficiary:y(f,"hosted beneficiary"),guestCandidates:y(m,"guest-entry profiles")||[],activeRound:y(h,"active round")}}async function ae(e,t){return J(G(await X(e,t)))}const _e=[{category:"pre_event",title:"תבנית הודעת טרום מפגש",description:"הודעה שנשלחת לפני המפגש"},{category:"lottery_results",title:"תבנית הודעת תוצאות הגרלה",description:"הודעה שנשלחת לאחר הרצת ההגרלה"},{category:"lottery_saturation",title:"תבנית הודעת רוויה",description:"הודעה שנשלחת כאשר יש רוויה בהגרלה"},{category:"game_summary",title:"תבנית הודעת סיכום משחק",description:"הודעה שנשלחת לאחר סיום המפגש"},{category:"player_swap",title:"תבנית הודעת החלפת שחקנים",description:"הודעה שנשלחת כאשר מתבצעת החלפה"}],re=[{eventType:"ranking",label:"מן המניין",icon:"🏆"},{eventType:"fcfs",label:"כל הקודם זוכה",icon:"⚡"},{eventType:"non_ranking",label:"שלא מן המניין",icon:"📋"},{eventType:"extra",label:"אקסטרא",icon:"⭐"}];function Z(e,t){return e==="pre_event"?t==="ranking"?"pre_event":t==="fcfs"?"pre_event_fcfs":`pre_event_${t}`:t==="ranking"?e:`${e}_${t}`}function ne(e,t){return Z(e,t==="fcfs"||t==="non_ranking"||t==="extra"?t:"ranking")}const w={...D,lottery_results:"whatsapp_template_lottery_results",lottery_results_fcfs:"whatsapp_template_lottery_results_fcfs",lottery_results_non_ranking:"whatsapp_template_lottery_results_non_ranking",lottery_results_extra:"whatsapp_template_lottery_results_extra",lottery_saturation:"whatsapp_template_lottery_saturation",lottery_saturation_fcfs:"whatsapp_template_lottery_saturation_fcfs",lottery_saturation_non_ranking:"whatsapp_template_lottery_saturation_non_ranking",lottery_saturation_extra:"whatsapp_template_lottery_saturation_extra",game_summary:"whatsapp_template_game_summary",game_summary_fcfs:"whatsapp_template_game_summary_fcfs",game_summary_non_ranking:"whatsapp_template_game_summary_non_ranking",game_summary_extra:"whatsapp_template_game_summary_extra",player_swap:"whatsapp_template_player_swap",player_swap_fcfs:"whatsapp_template_player_swap_fcfs",player_swap_non_ranking:"whatsapp_template_player_swap_non_ranking",player_swap_extra:"whatsapp_template_player_swap_extra"},$=A,T={...U,lottery_results:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

*ממתינים בהגרלה הבאה:* 🛡️
{רשימת_ממתינים}

בהצלחה!`,lottery_results_fcfs:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

*⚡ כל הקודם זוכה*

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

*ממתינים:*
{רשימת_ממתינים}

בהצלחה!`,lottery_results_non_ranking:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

*📋 שלא מן המניין*

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

*ממתינים:*
{רשימת_ממתינים}

בהצלחה!`,lottery_results_extra:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

*⭐ מפגש אקסטרא*

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

*ממתינים:*
{רשימת_ממתינים}

בהצלחה!`,lottery_saturation:`*עדכון הגרלה - מפגש {תאריך}*

📊 *{סוג_רוויה}*

{הודעת_רוויה}

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

בהצלחה!`,lottery_saturation_fcfs:`*עדכון הגרלה - מפגש {תאריך}*

*⚡ כל הקודם זוכה*

📊 *{סוג_רוויה}*

{הודעת_רוויה}

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

בהצלחה!`,lottery_saturation_non_ranking:`*עדכון הגרלה - מפגש {תאריך}*

*📋 שלא מן המניין*

📊 *{סוג_רוויה}*

{הודעת_רוויה}

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

בהצלחה!`,lottery_saturation_extra:`*עדכון הגרלה - מפגש {תאריך}*

*⭐ מפגש אקסטרא*

📊 *{סוג_רוויה}*

{הודעת_רוויה}

*נכנסים למשחק:* 🎉
{רשימת_נכנסים}

בהצלחה!`,game_summary:`*סיכום משחק - {תאריך}*

{סיכום_טקסט}

צפו בטבלה המעודכנת באפליקציה:
{קישור_אפליקציה_כללי}`,game_summary_fcfs:`*סיכום משחק - {תאריך}*

*⚡ כל הקודם זוכה*

{סיכום_טקסט}

צפו בטבלה המעודכנת באפליקציה:
{קישור_אפליקציה_כללי}`,game_summary_non_ranking:`*סיכום משחק - {תאריך}*

*📋 שלא מן המניין*

{סיכום_טקסט}

צפו בטבלה המעודכנת באפליקציה:
{קישור_אפליקציה_כללי}`,game_summary_extra:`*סיכום משחק - {תאריך}*

*⭐ מפגש אקסטרא*

{סיכום_טקסט}

צפו בטבלה המעודכנת באפליקציה:
{קישור_אפליקציה_כללי}`,player_swap:`*עדכון החלפת שחקנים - מפגש {תאריך}*

{שחקן_יוצא} לא יגיע למפגש ויקבל זיכוי הגעה.
{שחקן_נכנס} נכנס במקומו וירשם כאורח (על בסיס מקום פנוי) במפגש הבא.

בהצלחה! 🎉`,player_swap_fcfs:`*עדכון החלפת שחקנים - מפגש {תאריך}*

*⚡ כל הקודם זוכה*

{שחקן_יוצא} לא יגיע למפגש.
{שחקן_נכנס} נכנס במקומו.

בהצלחה! 🎉`,player_swap_non_ranking:`*עדכון החלפת שחקנים - מפגש {תאריך}*

*📋 שלא מן המניין*

{שחקן_יוצא} לא יגיע למפגש.
{שחקן_נכנס} נכנס במקומו.

בהצלחה! 🎉`,player_swap_extra:`*עדכון החלפת שחקנים - מפגש {תאריך}*

*⭐ מפגש אקסטרא*

{שחקן_יוצא} לא יגיע למפגש ויקבל זיכוי הגעה.
{שחקן_נכנס} נכנס במקומו וירשם כאורח (על בסיס מקום פנוי) במפגש הבא.

בהצלחה! 🎉`},oe={pre_event:{ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},lottery_results:{ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],fcfs:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],non_ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],extra:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"]},lottery_saturation:{ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"]},game_summary:{ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},player_swap:{ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"]}};function ie(e={}){const t=e.enabled??!0,{toast:s}=I(),n=Y(),{data:o,isLoading:c}=V({queryKey:["whatsapp-templates"],enabled:t,queryFn:async()=>{const{data:a,error:r}=await b.from("settings").select("key, value").in("key",Object.values(w));if(r)throw r;const l={...T};return a==null||a.forEach(i=>{var u;const p=(u=Object.entries(w).find(([,_])=>_===i.key))==null?void 0:u[0];p&&i.value&&typeof i.value=="object"&&"template"in i.value&&(l[p]=i.value.template)}),l}}),{data:g}=V({queryKey:["whatsapp-template-variable-values"],enabled:t,queryFn:async()=>{const{data:a,error:r}=await b.from("settings").select("value").eq("key",$).maybeSingle();if(r)throw r;return a!=null&&a.value&&typeof a.value=="object"?a.value:{}}}),d=x({mutationFn:async({templateType:a,template:r})=>{const l=w[a],i={template:r},{error:p}=await b.from("settings").upsert({key:l,value:i},{onConflict:"key"});if(p)throw p},onSuccess:()=>{n.invalidateQueries({queryKey:["whatsapp-templates"]}),s({title:"נשמר בהצלחה",description:"התבנית נשמרה"})},onError:a=>{s({title:"שגיאה בשמירה",description:a.message,variant:"destructive"})}}),m=x({mutationFn:async a=>{for(const[r,l]of Object.entries(a)){const i=w[r],p={template:l},{error:u}=await b.from("settings").upsert({key:i,value:p},{onConflict:"key"});if(u)throw u}},onSuccess:()=>{n.invalidateQueries({queryKey:["whatsapp-templates"]})},onError:a=>{s({title:"שגיאה בשמירה",description:a.message,variant:"destructive"})}}),h=x({mutationFn:async a=>{const{error:r}=await b.from("settings").upsert({key:$,value:a},{onConflict:"key"});if(r)throw r},onSuccess:()=>{n.invalidateQueries({queryKey:["whatsapp-template-variable-values"]})},onError:a=>{s({title:"שגיאה בשמירה",description:a.message,variant:"destructive"})}}),E=L.useCallback(a=>(o==null?void 0:o[a])??T[a],[o]),v=L.useCallback(a=>T[a],[]);return{templates:o,isLoading:c,getTemplate:E,getDefaultTemplate:v,saveTemplate:d.mutateAsync,saveAllTemplates:m.mutateAsync,isSaving:d.isPending||m.isPending,DEFAULT_TEMPLATES:T,savedVariableValues:g??{},saveVariableValues:h.mutateAsync,isSavingVariables:h.isPending}}function le(e){const t=e.includes("{רשימת_נכנסים_הפוכה}")||e.includes("{רשימת_ממתינים_הפוכה}"),s=e.includes("{רשימת_נכנסים}")||e.includes("{רשימת_ממתינים}");return t&&!s?"reversed":"normal"}function ue(e,t){return t?e.replace(/{רשימת_נכנסים}/g,"{רשימת_נכנסים_הפוכה}").replace(/{רשימת_ממתינים}/g,"{רשימת_ממתינים_הפוכה}"):e.replace(/{רשימת_נכנסים_הפוכה}/g,"{רשימת_נכנסים}").replace(/{רשימת_ממתינים_הפוכה}/g,"{רשימת_ממתינים}")}function pe(e){return{normal:e.join(","),reversed:[...e].reverse().join(",")}}export{se as C,re as E,_e as T,ae as a,pe as b,Z as c,oe as d,le as g,q as j,C as n,ne as r,ue as t,ie as u};
