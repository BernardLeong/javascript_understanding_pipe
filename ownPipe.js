const pipeAgain = (f1,f2,f3) => {
    return(arg,arg2)=>{
        var addition = f1(arg,arg2)
        var tax = f2(addition)
        var stringify = tax.toString();
        var decimal_pt = stringify.indexOf('.')
        var last_index = stringify.indexOf(stringify.slice(-1))
        if (last_index - decimal_pt > 4){
            var final_result = f3(tax)
        }else{
            var final_result = tax
        }
        return final_result + addition
    }
}

const add = (numOne,numTwo) => numOne+numTwo
const calculateTax = sum => sum*0.07
const rounder = tax => Math.round(tax*100)/100
const calTaxTotal = pipeAgain(add,calculateTax,rounder)
console.log(calTaxTotal(13,57) );