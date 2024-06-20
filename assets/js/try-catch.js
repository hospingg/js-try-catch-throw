
// 1. Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, 
// і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.
function pow(base, exponent){
        if (typeof base !== "number" || typeof exponent !== "number"){
            throw TypeError("The arguments must be number")
        }
        if(!Number.isInteger(exponent)){
            throw ReferenceError('The exponent should be integer')
        }
        if (exponent<0){
            throw ReferenceError('The exponent should be positive')
        }
        if(exponent > 0){
            return base * pow(base, exponent-1)
        }
        if(exponent === 0){
            return 1
        }
    }
try{
    pow(4, 3.5)
}
catch(err){
    console.log(err)
}

// Для спрощення замість рекурсивного алгоритму можна реалізувати повернення значення base**exponent, показник exponent вважайте цілим невід'ємним числом, 
// реалізувати тільки те, що стосується роботи з помилками.

function pow2(base, exponent){
    if (typeof base !== "number" || typeof exponent !== "number"){
        throw TypeError("The arguments must be number")
    }
    if(!Number.isInteger(exponent)){
        throw RangeError('The exponent should be integer')
    }
    if (exponent<0){
        throw RangeError('The exponent should be positive')
    }
    return base**exponent
}
try{
    pow2(3, -2)
}
catch(err){
    console.log(err)
}

// 2. * Реалізувати функцію для валідації імейлу. Імейл має бути рядком і
// містити символ "@", цей символ не має бути першим або останнім. Функція
// має повертати відвалідований імейл або викидати помилку, якщо імейл не
// валідний.

function isEmailCorrect(email){
    if(typeof email !== 'string' ){
        throw TypeError('Email should be sting')
    }
    if(!email.includes('@')){
        throw RangeError('The email does not have "@" ')
    }
    if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
        throw RangeError('"@" cannot be the first or last character');
    }
    return email
}
try{
    isEmailCorrect('@emma@gmail.com')
}
catch(err){
    console.log(err)
}