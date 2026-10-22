import{c as A,f as V,b as L,n as w,a5 as y,s as p}from"./appMount-B1bHNKRQ.js";import{r as k}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=A("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),M=[{category:"pre_event",title:"תבנית הודעת טרום מפגש",description:"הודעה שנשלחת לפני המפגש"},{category:"lottery_results",title:"תבנית הודעת תוצאות הגרלה",description:"הודעה שנשלחת לאחר הרצת ההגרלה"},{category:"lottery_saturation",title:"תבנית הודעת רוויה",description:"הודעה שנשלחת כאשר יש רוויה בהגרלה"},{category:"game_summary",title:"תבנית הודעת סיכום משחק",description:"הודעה שנשלחת לאחר סיום המפגש"},{category:"player_swap",title:"תבנית הודעת החלפת שחקנים",description:"הודעה שנשלחת כאשר מתבצעת החלפה"}],O=[{eventType:"ranking",label:"מן המניין",icon:"🏆"},{eventType:"fcfs",label:"כל הקודם זוכה",icon:"⚡"},{eventType:"non_ranking",label:"שלא מן המניין",icon:"📋"},{eventType:"extra",label:"אקסטרא",icon:"⭐"}];function C(_,t){return _==="pre_event"?t==="ranking"?"pre_event":t==="fcfs"?"pre_event_fcfs":`pre_event_${t}`:t==="ranking"?_:`${_}_${t}`}function K(_,t){return C(_,t==="fcfs"||t==="non_ranking"||t==="extra"?t:"ranking")}const u={pre_event:"whatsapp_template_pre_event",pre_event_fcfs:"whatsapp_template_pre_event_fcfs",pre_event_non_ranking:"whatsapp_template_pre_event_non_ranking",pre_event_extra:"whatsapp_template_pre_event_extra",lottery_results:"whatsapp_template_lottery_results",lottery_results_fcfs:"whatsapp_template_lottery_results_fcfs",lottery_results_non_ranking:"whatsapp_template_lottery_results_non_ranking",lottery_results_extra:"whatsapp_template_lottery_results_extra",lottery_saturation:"whatsapp_template_lottery_saturation",lottery_saturation_fcfs:"whatsapp_template_lottery_saturation_fcfs",lottery_saturation_non_ranking:"whatsapp_template_lottery_saturation_non_ranking",lottery_saturation_extra:"whatsapp_template_lottery_saturation_extra",game_summary:"whatsapp_template_game_summary",game_summary_fcfs:"whatsapp_template_game_summary_fcfs",game_summary_non_ranking:"whatsapp_template_game_summary_non_ranking",game_summary_extra:"whatsapp_template_game_summary_extra",player_swap:"whatsapp_template_player_swap",player_swap_fcfs:"whatsapp_template_player_swap_fcfs",player_swap_non_ranking:"whatsapp_template_player_swap_non_ranking",player_swap_extra:"whatsapp_template_player_swap_extra"},d="whatsapp_template_variable_values",c={pre_event:`*ביום {תאריך} בשעה {שעה} שולחן ערוך מארח את מפגש {מספר_מפגש} (סבב {מספר_מפגש_בסבב}) - {הערות}*

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

{קישור_דף_הרשמה}`,lottery_results:`*תוצאות ההגרלה למפגש {תאריך} בשעה {שעה}*

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

בהצלחה! 🎉`},P={pre_event:{ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{שעה}","{מספר_מפגש}","{מספר_מפגש_בסבב}","{הערות}","{מארח}","{כתובת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{שעה}","{מספר_מפגש}","{הערות}","{מארח}","{כתובת}","{שריון_טבלה}","{שריון_הגרלה}","{שריון_יום_הולדת}","{שריון_מתארח}","{אורחי_החלפה}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},lottery_results:{ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],fcfs:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],non_ranking:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{קישור_לאירוע}","{קישור_דף_הרשמה}"],extra:["{תאריך}","{שעה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{רשימת_נכנסים_הפוכה}","{רשימת_ממתינים_הפוכה}","{רשימת_משתתפים_מעודכנת}","{רשימת_ממתינים_מעודכנת}","{קישור_לאירוע}","{קישור_דף_הרשמה}"]},lottery_saturation:{ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{סוג_רוויה}","{הודעת_רוויה}","{רשימת_נכנסים}","{רשימת_ממתינים}","{הודעת_שריונים}","{קישור_לאירוע}"]},game_summary:{ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],fcfs:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],non_ranking:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"],extra:["{תאריך}","{סיכום_טקסט}","{קישור_לאירוע}","{קישור_דף_הרשמה}","{קישור_אפליקציה_כללי}"]},player_swap:{ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],fcfs:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],non_ranking:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"],extra:["{תאריך}","{שעה}","{שחקן_יוצא}","{שחקן_נכנס}","{קישור_לאירוע}"]}};function j(_={}){const t=_.enabled??!0,{toast:n}=V(),m=L(),{data:o,isLoading:h}=w({queryKey:["whatsapp-templates"],enabled:t,queryFn:async()=>{const{data:e,error:a}=await p.from("settings").select("key, value").in("key",Object.values(u));if(a)throw a;const l={...c};return e==null||e.forEach(r=>{var i;const s=(i=Object.entries(u).find(([,T])=>T===r.key))==null?void 0:i[0];s&&r.value&&typeof r.value=="object"&&"template"in r.value&&(l[s]=r.value.template)}),l}}),{data:b}=w({queryKey:["whatsapp-template-variable-values"],enabled:t,queryFn:async()=>{const{data:e,error:a}=await p.from("settings").select("value").eq("key",d).maybeSingle();if(a)throw a;return e!=null&&e.value&&typeof e.value=="object"?e.value:{}}}),f=y({mutationFn:async({templateType:e,template:a})=>{const l=u[e],r={template:a},{error:s}=await p.from("settings").upsert({key:l,value:r},{onConflict:"key"});if(s)throw s},onSuccess:()=>{m.invalidateQueries({queryKey:["whatsapp-templates"]}),n({title:"נשמר בהצלחה",description:"התבנית נשמרה"})},onError:e=>{n({title:"שגיאה בשמירה",description:e.message,variant:"destructive"})}}),g=y({mutationFn:async e=>{for(const[a,l]of Object.entries(e)){const r=u[a],s={template:l},{error:i}=await p.from("settings").upsert({key:r,value:s},{onConflict:"key"});if(i)throw i}},onSuccess:()=>{m.invalidateQueries({queryKey:["whatsapp-templates"]})},onError:e=>{n({title:"שגיאה בשמירה",description:e.message,variant:"destructive"})}}),v=y({mutationFn:async e=>{const{error:a}=await p.from("settings").upsert({key:d,value:e},{onConflict:"key"});if(a)throw a},onSuccess:()=>{m.invalidateQueries({queryKey:["whatsapp-template-variable-values"]})},onError:e=>{n({title:"שגיאה בשמירה",description:e.message,variant:"destructive"})}}),E=k.useCallback(e=>(o==null?void 0:o[e])??c[e],[o]),x=k.useCallback(e=>c[e],[]);return{templates:o,isLoading:h,getTemplate:E,getDefaultTemplate:x,saveTemplate:f.mutateAsync,saveAllTemplates:g.mutateAsync,isSaving:f.isPending||g.isPending,DEFAULT_TEMPLATES:c,savedVariableValues:b??{},saveVariableValues:v.mutateAsync,isSavingVariables:v.isPending}}function R(_){const t=_.includes("{רשימת_נכנסים_הפוכה}")||_.includes("{רשימת_ממתינים_הפוכה}"),n=_.includes("{רשימת_נכנסים}")||_.includes("{רשימת_ממתינים}");return t&&!n?"reversed":"normal"}function Q(_,t){return t?_.replace(/{רשימת_נכנסים}/g,"{רשימת_נכנסים_הפוכה}").replace(/{רשימת_ממתינים}/g,"{רשימת_ממתינים_הפוכה}"):_.replace(/{רשימת_נכנסים_הפוכה}/g,"{רשימת_נכנסים}").replace(/{רשימת_ממתינים_הפוכה}/g,"{רשימת_ממתינים}")}function I(_){return{normal:_.join(","),reversed:[..._].reverse().join(",")}}export{F as C,O as E,M as T,C as a,I as b,P as c,R as g,K as r,Q as t,j as u};
