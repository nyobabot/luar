/* Creditos a https://github.com/ALBERTO9883 */

let handler = async (m, { conn, text, args, usedPrefix, command }) => {	
if (!args[0]) throw `β οΈοΈ _ππ£ππ§ππ¨π πͺπ£ π©ππ­π©π€ π₯ππ§π ππ£πππππ§ π‘π ππ£ππͺππ¨π©π!_\n\nπ ππππ’π₯π‘π€ : \n*${usedPrefix + command}* texto|texto2...`
if (!text.includes('|')) throw  `*β οΈοΈ πΊπππππ ππ ππππππππ πππ* *|* \n\nπ π¬ππππππ : \n*${usedPrefix + command}* texto|texto2...`
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
return conn.sendPoll(m.chat, `π *π¬πππππππ ππππ:*\n\n${text}`, a, m)}
handler.help = ['encuesta <text|text2>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta'] 
handler.register = true
export default handler
