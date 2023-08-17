let toastBox = document.getElementById('toastBox');
let successMsg = ' <i class="fa-regular fa-circle-check"></i> Successfully submitted';
let errorMsg = ' <i class="fa-regular fa-circle-xmark"></i> Please Fix the Error';
let invalidMsg = ' <i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Please Check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },6000);

}