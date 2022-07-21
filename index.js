let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// 3 variables 

console.log(weeklyExpenseQuestions)

 for(let i = 0; i < weeklyExpenseQuestions.length; i++)
 
 {

    let response = parseInt(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + response
    
    console.log(weeklyExpenses + response)
    console.log(weeklyExpenses)

 }