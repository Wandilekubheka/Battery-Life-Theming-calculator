const mathOperationHandler =(sum:string):string =>{
    let answer:number = 0

    if (sum.includes("+")){
        const numbers = sum.split("+")
        return numbers[1] == "" ? sum : String(parseInt(numbers[0]) + parseInt(numbers[1]) + "+")
        
         
    }else if (sum.includes("-")){
        const numbers = sum.split("-")
        return numbers[1] == "" ? sum : String(parseInt(numbers[0]) - parseInt(numbers[1]) + "-")


    }else if (sum.includes("*")){
        const numbers = sum.split("*")
        return numbers[1] == "" ? sum : String(parseInt(numbers[0]) * parseInt(numbers[1]) +"*")


    }else if (sum.includes("/")){
        const numbers = sum.split("/")
        return numbers[1] == "" ? sum : String(parseInt(numbers[0]) / parseInt(numbers[1]) + "/")
    }
    return String(answer)
}


export {mathOperationHandler}