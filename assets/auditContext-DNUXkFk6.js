import{c as U,a1 as V,v as j,r as M,W as B,x as F,$ as I,a0 as K,j as H,b as Y,w as L,ar as P,s as b}from"./appMount-CR0pOWw_.js";import{r as q}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=U("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),D={pre_event:"whatsapp_template_pre_event",pre_event_fcfs:"whatsapp_template_pre_event_fcfs",pre_event_non_ranking:"whatsapp_template_pre_event_non_ranking",pre_event_extra:"whatsapp_template_pre_event_extra"},A="whatsapp_template_variable_values",$={pre_event:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} (סבב {מספר_מפגש_בסבב}) - {הערות}*

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

{קישור_דף_הרשמה}`};function N(e){return e==="fcfs"?"pre_event_fcfs":e==="non_ranking"?"pre_event_non_ranking":e==="extra"?"pre_event_extra":"pre_event"}const Q=["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"];function z(e){const t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");if(!t)return"";const a=Number(t[1]),o=Number(t[2]),n=Number(t[3]);return`${Q[new Date(Date.UTC(a,o-1,n)).getUTCDay()]} ${n}.${o}.${a}`}function W(e,t){if(e&&typeof e=="object"&&"template"in e){const a=e.template;if(typeof a=="string")return a}return $[t]}function G(e){var r,l,i,p,u;const{event:t}=e;let a="",o="";t.host_id&&(a=((r=e.hostProfile)!=null&&r.is_test_account?"":(l=e.hostProfile)==null?void 0:l.emoji)||"🏠",o=((i=e.hostProfile)==null?void 0:i.address)||"");const n=new Map;for(const _ of e.shieldProfiles||[])_.id&&n.set(_.id,_);const c=[],g=[],d=[];for(const _ of e.shields||[]){const f=n.get(_.profile_id);!f||!f.emoji||!j(f)||(_.shield_type==="veteran_shield"?M(_.status,_.veteran_grade??null)&&c.push(f.emoji):_.shield_type==="birthday_shield"?_.status==="available"&&B(f.birthday,t.event_date)&&g.push(f.emoji):_.shield_type==="lottery_shield"&&_.status==="available"&&d.push(f.emoji))}let m="";if(e.hasHostedShield){const _=e.hostedBeneficiary;_?j(_)&&(m=_.emoji||"🏡"):m="🏡"}const h=(e.guestCandidates||[]).filter(_=>j(_)&&F(_)).map(_=>_.emoji).filter(Boolean);let E="";const v=(p=e.activeRound)==null?void 0:p.event_ids;if(Array.isArray(v)){const _=v.indexOf(t.id);_>=0&&(E=`${_+1}/${(u=e.activeRound)==null?void 0:u.games_count}`)}const s=N(t.event_type);return{template:W(e.templateSetting,s),formattedDate:z(t.event_date),formattedTime:(t.event_time||"").slice(0,5),eventNumber:t.event_number??null,roundPosition:E,adminNotes:t.admin_notes||"",hostEmoji:a,address:t.custom_address||o,veteranEmojis:c,birthdayEmojis:g,lotteryEmojis:d,hostedEmoji:m,guestEntryEmojis:h,appUrl:I(e.customDomain||K()),freeTexts:e.variableValues||{}}}function X(e){var n,c;const t=((n=e.eventNumber)==null?void 0:n.toString())??null,a=t?`${V(e.appUrl,"/")}?game=${t}`:e.appUrl;return[[/{תאריך}/g,e.formattedDate],[/{שעה}/g,e.formattedTime],[/{מספר_מפגש}/g,((c=e.eventNumber)==null?void 0:c.toString())||""],[/{מספר_מפגש_בסבב}/g,e.roundPosition],[/{הערות}/g,e.adminNotes],[/{מארח}/g,e.hostEmoji||""],[/{כתובת}/g,e.address],[/{שריון_טבלה}/g,e.veteranEmojis.join(", ")],[/{שריון_יום_הולדת}/g,e.birthdayEmojis.join(", ")],[/{שריון_הגרלה}/g,e.lotteryEmojis.join(", ")],[/{שריון_מתארח}/g,e.hostedEmoji||""],[/{אורחי_החלפה}/g,e.guestEntryEmojis.join(", ")||"אין"],[/{קישור_לאירוע}/g,a],[/{קישור_דף_הרשמה}/g,V(e.appUrl,"/event-card")],[/{קישור_אפליקציה_כללי}/g,e.appUrl],[/{קישור}/g,a],[/{מלל_חופשי_1}/g,e.freeTexts.מלל_חופשי_1||""],[/{מלל_חופשי_2}/g,e.freeTexts.מלל_חופשי_2||""],[/{מלל_חופשי_3}/g,e.freeTexts.מלל_חופשי_3||""],[/{סיכום_טקסט}/g,e.freeTexts.סיכום_טקסט||""]].reduce((g,[d,m])=>g.replace(d,()=>m),e.template)}function y(e,t){var a;if(e.error){const o=((a=e.error)==null?void 0:a.message)||String(e.error);throw new Error(`pre-event message: failed to load ${t}: ${o}`)}return e.data}const k="is_test_account, deleted_at";async function J(e,t){var R;const a=y(await e.from("events").select("id, event_date, event_time, event_type, event_number, host_id, admin_notes, custom_address").eq("id",t).single(),"event"),o=D[N(a.event_type)],[n,c,g,d,m,h]=await Promise.all([e.from("settings").select("key, value").in("key",[o,A,"system"]),a.host_id?e.from("profiles").select(`emoji, address, ${k}`).eq("id",a.host_id).maybeSingle():Promise.resolve({data:null,error:null}),e.from("player_shields").select("profile_id, shield_type, status, veteran_grade").in("shield_type",["veteran_shield","birthday_shield","lottery_shield"]).or("status.eq.available,and(shield_type.eq.veteran_shield,veteran_grade.eq.priority)"),a.host_id?e.from("player_shields").select("beneficiary_profile_id").eq("profile_id",a.host_id).eq("shield_type","hosted_shield").eq("status","used").eq("used_event_id",a.id):Promise.resolve({data:[],error:null}),e.from("profiles").select(`emoji, next_event_guest_entry, is_absent, is_suspended, consistency_status, ${k}`).is("deleted_at",null),e.from("rounds").select("event_ids, games_count").eq("is_locked",!1).order("start_date",{ascending:!1}).limit(1).maybeSingle()]),E=y(n,"settings")||[],v=x=>{var S;return((S=E.find(O=>O.key===x))==null?void 0:S.value)??null},s=v("system"),r=v(A),l=y(g,"shields")||[],i=[...new Set(l.map(x=>x.profile_id))],u=((R=(y(d,"hosted shield")||[])[0])==null?void 0:R.beneficiary_profile_id)??null,[_,f]=await Promise.all([i.length>0?e.from("profiles").select(`id, emoji, birthday, ${k}`).in("id",i):Promise.resolve({data:[],error:null}),u?e.from("profiles").select(`emoji, ${k}`).eq("id",u).maybeSingle():Promise.resolve({data:null,error:null})]);return{event:a,templateSetting:v(o),variableValues:r&&typeof r=="object"?r:null,customDomain:(s==null?void 0:s.customDomain)??null,hostProfile:y(c,"host profile"),shields:l,shieldProfiles:y(_,"shield profiles")||[],hasHostedShield:!!u,hostedBeneficiary:y(f,"hosted beneficiary"),guestCandidates:y(m,"guest-entry profiles")||[],activeRound:y(h,"active round")}}async function re(e,t){return X(G(await J(e,t)))}const ne=[{category:"pre_event",title:"תבנית הודעת טרום מפגש",description:"הודעה שנשלחת לפני המפגש"},{category:"lottery_results",title:"תבנית הודעת תוצאות הגרלה",description:"הודעה שנשלחת לאחר הרצת ההגרלה"},{category:"lottery_saturation",title:"תבנית הודעת רוויה",description:"הודעה שנשלחת כאשר יש רוויה בהגרלה"},{category:"game_summary",title:"תבנית הודעת סיכום משחק",description:"הודעה שנשלחת לאחר סיום המפגש"},{category:"player_swap",title:"תבנית הודעת החלפת שחקנים",description:"הודעה שנשלחת כאשר מתבצעת החלפה"}],oe=[{eventType:"ranking",label:"מן המניין",icon:"🏆"},{eventType:"fcfs",label:"כל הקודם זוכה",icon:"⚡"},{eventType:"non_ranking",label:"שלא מן המניין",icon:"📋"},{eventType:"extra",label:"אקסטרא",icon:"⭐"}];function Z(e,t){return e==="pre_event"?t==="ranking"?"pre_event":t==="fcfs"?"pre_event_fcfs":`pre_event_${t}`:t==="ranking"?e:`${e}_${t}`}function ie(e,t){return Z(e,t==="fcfs"||t==="non_ranking"||t==="extra"?t:"ranking")}const w={...D,lottery_results:"whatsapp_template_lottery_results",lottery_results_fcfs:"whatsapp_template_lottery_results_fcfs",lottery_results_non_ranking:"whatsapp_template_lottery_results_non_ranking",lottery_results_extra:"whatsapp_template_lottery_results_extra",lottery_saturation:"whatsapp_template_lottery_saturation",lottery_saturation_fcfs:"whatsapp_template_lottery_saturation_fcfs",lottery_saturation_non_ranking:"whatsapp_template_lottery_saturation_non_ranking",lottery_saturation_extra:"whatsapp_template_lottery_saturation_extra",game_summary:"whatsapp_template_game_summary",game_summary_fcfs:"whatsapp_template_game_summary_fcfs",game_summary_non_ranking:"whatsapp_template_game_summary_non_ranking",game_summary_extra:"whatsapp_template_game_summary_extra",player_swap:"whatsapp_template_player_swap",player_swap_fcfs:"whatsapp_template_player_swap_fcfs",player_swap_non_ranking:"whatsapp_template_player_swap_non_ranking",player_swap_extra:"whatsapp_template_player_swap_extra"},C=A,T={...$,lottery_results:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

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

בהצלחה! 🎉`},le={pre_event:{ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},lottery_results:{ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],fcfs:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],non_ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],extra:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"]},lottery_saturation:{ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"]},game_summary:{ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},player_swap:{ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"]}};function ue(e={}){const t=e.enabled??!0,{toast:a}=H(),o=Y(),{data:n,isLoading:c}=L({queryKey:["whatsapp-templates"],enabled:t,queryFn:async()=>{const{data:s,error:r}=await b.from("settings").select("key, value").in("key",Object.values(w));if(r)throw r;const l={...T};return s==null||s.forEach(i=>{var u;const p=(u=Object.entries(w).find(([,_])=>_===i.key))==null?void 0:u[0];p&&i.value&&typeof i.value=="object"&&"template"in i.value&&(l[p]=i.value.template)}),l}}),{data:g}=L({queryKey:["whatsapp-template-variable-values"],enabled:t,queryFn:async()=>{const{data:s,error:r}=await b.from("settings").select("value").eq("key",C).maybeSingle();if(r)throw r;return s!=null&&s.value&&typeof s.value=="object"?s.value:{}}}),d=P({mutationFn:async({templateType:s,template:r})=>{const l=w[s],i={template:r},{error:p}=await b.from("settings").upsert({key:l,value:i},{onConflict:"key"});if(p)throw p},onSuccess:()=>{o.invalidateQueries({queryKey:["whatsapp-templates"]}),a({title:"נשמר בהצלחה",description:"התבנית נשמרה"})},onError:s=>{a({title:"שגיאה בשמירה",description:s.message,variant:"destructive"})}}),m=P({mutationFn:async s=>{for(const[r,l]of Object.entries(s)){const i=w[r],p={template:l},{error:u}=await b.from("settings").upsert({key:i,value:p},{onConflict:"key"});if(u)throw u}},onSuccess:()=>{o.invalidateQueries({queryKey:["whatsapp-templates"]})},onError:s=>{a({title:"שגיאה בשמירה",description:s.message,variant:"destructive"})}}),h=P({mutationFn:async s=>{const{error:r}=await b.from("settings").upsert({key:C,value:s},{onConflict:"key"});if(r)throw r},onSuccess:()=>{o.invalidateQueries({queryKey:["whatsapp-template-variable-values"]})},onError:s=>{a({title:"שגיאה בשמירה",description:s.message,variant:"destructive"})}}),E=q.useCallback(s=>(n==null?void 0:n[s])??T[s],[n]),v=q.useCallback(s=>T[s],[]);return{templates:n,isLoading:c,getTemplate:E,getDefaultTemplate:v,saveTemplate:d.mutateAsync,saveAllTemplates:m.mutateAsync,isSaving:d.isPending||m.isPending,DEFAULT_TEMPLATES:T,savedVariableValues:g??{},saveVariableValues:h.mutateAsync,isSavingVariables:h.isPending}}function pe(e){const t=e.includes("{רשימת_נכנסים_הפוכה}")||e.includes("{רשימת_ממתינים_הפוכה}"),a=e.includes("{רשימת_נכנסים}")||e.includes("{רשימת_ממתינים}");return t&&!a?"reversed":"normal"}function ce(e,t){return t?e.replace(/{רשימת_נכנסים}/g,"{רשימת_נכנסים_הפוכה}").replace(/{רשימת_ממתינים}/g,"{רשימת_ממתינים_הפוכה}"):e.replace(/{רשימת_נכנסים_הפוכה}/g,"{רשימת_נכנסים}").replace(/{רשימת_ממתינים_הפוכה}/g,"{רשימת_ממתינים}")}function me(e){return{normal:e.join(","),reversed:[...e].reverse().join(",")}}const ee="x-audit-context";function te(e){return e.replace(/[^\x20-\x7E]/g,"").slice(0,200)}function de(e,t){return typeof(e==null?void 0:e.setHeader)!="function"?e:e.setHeader(ee,te(t))}export{_e as C,oe as E,ne as T,re as a,me as b,Z as c,le as d,pe as g,ie as r,ce as t,ue as u,de as w};
