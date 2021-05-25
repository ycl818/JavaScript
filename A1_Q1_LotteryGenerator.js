let ticket = ''
//Generate A~Z
let ch = ''
for(let i = 0; i < 2; i++){
  ch += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65))
}
//Generate 0~9
let num = ''
for(let i =0 ; i < 4; i++){ 
  num += Math.floor(Math.random() * 10 )
}
ticket = ch + num
console.log(ticket)
