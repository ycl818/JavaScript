// input
let name = 'Bernard'
//write your code
let ans = ''
for(let i = 0; i < name.length; i++){
  if(i > 1){
    ans += '*'
    continue
  }
  ans += name[i]
}
name = ans
// output
console.log(name)
