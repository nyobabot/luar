import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*β­ββ[ πΎπ€π’πͺπ£πππππ€ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β πͺπππππππππ πππππππ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentaslb'],['π πππ£πͺ', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: 'π»ππ π³ππππ©ππ-π΄π«',
body: 'πΊππππ πππ πΎπππππ¨ππ', 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β π¬π πππππππ πππ πππππππ π ${groups.length} πππππ(s)*\n*π¬π πππππππ πππ ππ ππ ππππ πππππππ π πππππ πππ πͺππππ π·πππππππ. π«πππππππ.`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|comunicargrupos|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
