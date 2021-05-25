let email = 'bernard@example.com'
// write your code
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
console.log(ans)
