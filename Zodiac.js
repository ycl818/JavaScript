//星座資料
const zodiac = [
  { name: '牡羊',
    startMonth: 3,
    startDate: 21,
    endMonth: 4,
    endDate: 19, 
  },
  { name: '金牛', startMonth: 4, startDate: 20, endMonth: 5, endDate: 20, },
  { name: '雙子', startMonth: 5, startDate: 21, endMonth: 6, endDate: 20, },
  { name: '巨蟹', startMonth: 6, startDate: 21, endMonth: 7, endDate: 22, },
  { name: '獅子', startMonth: 7, startDate: 23, endMonth: 8, endDate: 22, },
  { name: '處女', startMonth: 8, startDate: 23, endMonth: 9, endDate: 22, },
  { name: '天秤', startMonth: 9, startDate: 23, endMonth: 10, endDate: 22, },
  { name: '天蠍', startMonth: 10, startDate: 23, endMonth: 11, endDate: 21, },
  { name: '射手', startMonth: 11, startDate: 22, endMonth: 12, endDate: 21, },
  { name: '魔羯', startMonth: 12, startDate: 22, endMonth: 1, endDate: 19, },
  { name: '水瓶', startMonth: 1, startDate: 20, endMonth: 2, endDate: 18, },
  { name: '雙魚', startMonth: 2, startDate: 19, endMonth: 3, endDate: 20, },
]

// console.log(zodiac[5].name)
const birthday = '2021/12/24'
const birthArr = birthday.split('/')
const month = Number(birthArr[1])
const date = Number(birthArr[2])
birthdayValue = dateValue(month, date)

for(let i = 0; i < zodiac.length; i++){
  const startValue = dateValue(zodiac[i].startMonth, zodiac[i].startDate)
  const endValue = dateValue(zodiac[i].endMonth, zodiac[i].endDate)

  if(birthdayValue >= startValue && birthdayValue <= endValue){
    console.log(zodiac[i].name)
  }else{
    console.log(zodiac[9].name)
    break
  }

}

function dateValue (m, d){
  return m * 100 + d
}

function createZodiac (name, startMonth, startDate, endMonth, endDate){
  return{
    name: name,
    startMonth: startMonth,
    startDate: startDate,
    endMonth: endMonth,
    endDate: endDate,
  }
}

