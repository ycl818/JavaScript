// DATA /////////////////////////////////////

const players = [
  { name: 'Bernard', email: 'bernard@example.com' },
  { name: 'Youchi', email: 'youchi@example.com' },
  { name: 'Yenting', email: 'yenting@example.com' },
  { name: 'Angela', email: 'angela@example.com' },
  { name: 'Yvonne', email: 'yvonne@example.com' },
  { name: 'Ellen', email: 'ellen@example.com' },
  { name: 'Walter', email: 'walter@example.com' },
  { name: 'Kevin', email: 'kevin@example.com' },
  { name: 'Tim', email: 'tim@example.com' },
  { name: 'Russell', email: 'russell@example.com' }
]

// FUNCTIONS /////////////////////////////////////

function drawWinner (players, prize) {
  // write your code here
  let x = Math.floor(Math.random() * players.length)
  let winner = players.splice(x,1)[0]
  // 設一個box 去檢查號碼是否一樣， 如重複就再產生一組。雖然重複機率極低但還是補下
  // 助教可以幫忙檢視下，我這樣想是否正確，因為實在很難處出來一樣的情況
  let winnerNumBox = []
  for(let i = 0; i < players.length; i++){
    winnerNumBox.push(0)
  }
  winnerNumBox.push(winner.number = lotteryNumber())
  for(let i = 0; i < players.length; i++){
    if(winnerNumBox.indexOf(i) !== 0){
      winner.number = lotteryNumber()
    }
  }
  announceMsg (winner, prize)
}

function announceMsg (winner, prize) {
  // 請新增 encodeName 和 encodeEmail 函式進行字串處理 
  console.log(`${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
}

// add more functions here
function lotteryNumber (){
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
  return ticket
}

function encodeName (name) {
  let ans = ''
  for(let i = 0; i < name.length; i++){
    if(i > 1){
      ans += '*'
      continue
    }
    ans += name[i]
  }
  name = ans
  return name
}

function encodeEmail (email) {
  let ch = email.split('@')[0]
  let ans = ''
  num = Math.floor(ch.length / 2)
  for(let i = 0; i < ch.length; i++){
    if(i >= num){
      ans += '...'
      break
    }
    ans += ch[i]
  }
  ans += '@'
  ans += email.split('@')[1]
  return ans
}
// EXECUTING /////////////////////////////////////

// each player gets a lottery ticket
// write your code here

// draw 3 winners and announce the results
drawWinner(players, '頭獎')
drawWinner(players, '貮獎')
drawWinner(players, '叁獎')

// the rest of players get participation award
// write your code here
while(players.length !== 0){
  drawWinner(players, '參加獎')
}
