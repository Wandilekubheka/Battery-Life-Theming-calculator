const mathOperationHandler =(sum:string):string =>{
    let answer:number = 0
    if (sum.includes("+")){
        const numbers = sum.split("+")
        numbers.forEach(num => answer +=  parseInt(num))
    }else if (sum.includes("-")){
        const numbers = sum.split("-")
        numbers.forEach(num => answer += parseInt(num))
    }else if (sum.includes("*")){
        const numbers = sum.split("*")
        numbers.forEach(num => answer *=  parseInt(num))
    }else if (sum.includes("")){
        const numbers = sum.split("/")
        numbers.forEach(num => answer/=  parseInt(num))
    }
    return String(answer)
}


export {mathOperationHandler}