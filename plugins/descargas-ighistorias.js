/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `ððĢðð§ððĻð ððĄ ðĢðĪðĒðð§ð ðð ðŠðĻðŠðð§ððĪ ðð ððĢðĻðĐððð§ððĒ ðĨðð§ð ðððĻððð§ððð§ ðĄððĻ ðððĻðĐðĪð§ðððĻ\nððððĒðĨðĄðĪ\n*${usedPrefix + command} gatadios*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `ð *ððĢððĪð§ðĒðð§ðĐð ðĻðĪðð§ð ðĄððĻ ðĢðĪðŦððððððĻ ðŪ ð§ðððŠðð§ðð ðĐððĢðð§ ðĄð ðŠĖðĄðĐððĒð ðŦðð§ðĻððĪ.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ððĢðĻðĐððð§ððĒ', null, null, [
['ðððĢðŠ ðŋððĻððð§ðððĻ ð', '#descargasmenu'],
['ðððĢðŠ ðūðĪðĒðĨðĄððĐðĪ âĻ', '.allmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.exp = 87
export default handler
