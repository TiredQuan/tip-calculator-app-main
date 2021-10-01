let selectTip=0
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
}


tippercent(5)