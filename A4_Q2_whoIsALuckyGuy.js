const players = [
  { name: 'Bernard', email: 'bernard@example.com', ticket: 'XL3558' },
  { name: 'Youchi', email: 'youchi@example.com', ticket: 'AH9188' },
  { name: 'Yenting', email: 'yenting@example.com', ticket: 'LO9903' },
  { name: 'Angela', email: 'angela@example.com', ticket: 'HY7212' },
  { name: 'Yvonne', email: 'yvonne@example.com', ticket: 'CH7684' },
  { name: 'Ellen', email: 'ellen@example.com', ticket: 'BB1750' },
  { name: 'Walter', email: 'walter@example.com', ticket: 'EI5724' },
  { name: 'Kevin', email: 'kevin@example.com', ticket: 'TT1804' },
  { name: 'Tim', email: 'tim@example.com', ticket: 'CK4592' },
  { name: 'Russell', email: 'russell@example.com', ticket: 'SI0305' }
]
function encodeName (name) {
  // 請封裝你之前寫好的程式碼，並設計必要參數
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
  // 請封裝你之前寫好的程式碼，並設計必要參數
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

function drawWinner (players) {

  let x = Math.floor(Math.random() * players.length)
  let winner = players.splice(x,1)
  return `${winner[0]['ticket']} | ${encodeName(winner[0]['name'])} | ${encodeEmail(winner[0]['email'])}`
  
}

console.log(drawWinner(players))
console.log(drawWinner(players))
console.log(drawWinner(players))
console.log(drawWinner(players))
console.log(drawWinner(players))
