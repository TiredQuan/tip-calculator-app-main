let bill=0
let selectTip=0
let numPp=0
let tipAmt=0
let totalPer=0
calcTip = () =>{
    
    bill=parseFloat(document.getElementById('biller').value)
    numPp=parseFloat(document.getElementById('numPp').value)
    tipAmt=bill+(bill/100*selectTip)
    totalPer=tipAmt/numPp
    if(Number.isFinite(tipAmt)){
        document.getElementById('tipAmt').textContent='$'+tipAmt.toFixed(2)
    }else{
        document.getElementById('tipAmt').textContent='$0.00'
    }

    if(Number.isFinite(totalPer)){
        document.getElementById('totalPp').textContent='$'+totalPer.toFixed(2)
    }else{
        document.getElementById('totalPp').textContent='$0.00'
    }
}
tippercent = (x) =>{
    if(x!='custom'){
        selectTip=x
        let tipBtn=document.getElementsByClassName('btn')
        for(let i=0;i<tipBtn.length;i++){
            tipBtn[i].classList.remove("active")
        }
        document.getElementById('custom').value=''
        let selectedPercent = document.getElementById(`per${selectTip}`)
        selectedPercent.classList.add('active')
    } else{
        let tipBtn=document.getElementsByClassName('btn')
        selectTip=parseInt(document.getElementById('custom').value)
        for(let i=0;i<tipBtn.length;i++){
            tipBtn[i].classList.remove("active")
        }
    }
    calcTip()
}
tippercent(5)



billCheck=()=> {
    let errorBill=document.getElementById('biller')
    let errorMsg=document.getElementById('billErr')
    if(errorBill.value==''||Number.parseInt(errorBill.value)==0){
        errorBill.classList.add('error')
        errorMsg.style.display="block"
    } else{
        errorBill.classList.remove('error')
        errorMsg.style.display="none"
    }
}
peopleCheck=()=>{
    let errorPeePee=document.getElementById('numPp')
    let errorMsg=document.getElementById('error-msg')
    if(errorPeePee.value==''||Number.parseInt(errorPeePee.value)==0){
        errorPeePee.classList.add('error')
        errorMsg.style.display="block"
    } else{
        errorPeePee.classList.remove('error')
        errorMsg.style.display="none"
    }
}
document.addEventListener('keyup',e=()=>{
    if(document.getElementById('biller').value!=''||document.getElementById('custom').value!=''||document.getElementById('numPp').value!=''){
        document.getElementById('reset').disabled = false
    } else {
        document.getElementById('reset').disabled = true
    }
})

resetClick =()=>{
    document.getElementById('biller').value=''
    document.getElementById('numPp').value=''
    document.getElementById('tipAmt').textContent='$0.00'
    document.getElementById('totalPp').textContent='$0.00'
    tippercent(5)
    document.getElementById('reset').disabled = true
}