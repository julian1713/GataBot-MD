import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

var handler = m => m
handler.all = async function (m) {

const response = await fetch('https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/official_accounts.json')  
const data = await response.json()
let { accounts, channels, groups, collaboration, sponsors, others } = data.info

global.yt = accounts.youTube
global.yt2 = others.yt_vid
global.ig = accounts.instagram
global.md = accounts.gatabot_md
global.fb = accounts.facebook
global.tk = accounts.tiktok
global.ths = accounts.threads
global.paypal = accounts.paypal
global.asistencia = others.assistance_num
global.bot = 'No disponible'
global.cuentas = accounts.all

global.canal1 = channels.channel1
global.canal2 = channels.channel2
global.canal3 = channels.channel3
global.canal4 = channels.channel4

global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.grupo3 = groups.group3
global.grupo4 = groups.group4
global.grupo5 = groups.group5
global.grupo6 = groups.group6

global.grupo_collab1 = collaboration.group1
global.grupo_collab2 = collaboration.group2
global.grupo_collab3 = collaboration.group3
global.grupo_collab4 = collaboration.group4

global.patrocinador1 = sponsors.boxmine
global.patrocinador2 = sponsors.cafirexos
global.patrocinador3 = sponsors.vortexus
global.patrocinador4 = sponsors.asif

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, nna, asistencia].getRandom()

global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

global.img = 'https://i.imgur.com/IXlUwTW.jpg'
global.img2 = 'https://i.imgur.com/EXTbyyn.jpg'

global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem

global.img5 = 'https://i.imgur.com/iL1snRx.jpeg'
global.img6 = 'https://i.imgur.com/cYFgSKv.jpeg'
global.img7 = 'https://i.imgur.com/JqL3h2V.jpeg'
global.img8 = 'https://i.imgur.com/PCujt1s.jpeg'
global.img9 = 'https://i.imgur.com/xfUEdDb.jpeg'

global.img10 = 'https://i.imgur.com/DvHoMc3.jpg'
global.img11 = 'https://i.imgur.com/5Q1MqGD.jpg'
global.img12 = 'https://i.imgur.com/vWnsjh8.jpg'
global.img13 = 'https://i.imgur.com/pCfFOgw.jpeg'
global.img14 = 'https://i.imgur.com/knBDWRA.jpeg'
global.img15 = 'https://i.imgur.com/QrkkKx7.jpeg'

global.img16 = 'https://i.imgur.com/11MRjo4.jpeg' //+18

global.img17 = 'https://i.imgur.com/JpYfcH0.jpeg'
global.img18 = 'https://i.imgur.com/9yLH4W4.jpeg'

global.logogit = 'https://tinyurl.com/2qvl9vgs'

global.gataVidMenu = ['https://qu.ax/AAvg.mp4', 'https://qu.ax/SeFS.mp4', 'https://qu.ax/NqZN.mp4'].getRandom()
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
}
export default handler
