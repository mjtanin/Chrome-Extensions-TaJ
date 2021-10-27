const on = document.querySelector('#on');
const off = document.querySelector('#off');
let imgon = true;

chrome.storage.sync.set({imgon}, function() {
  console.log('Value is set to ' + imgon);
});

on.addEventListener('click', () => {
  imgon = true;
  isActive()

  chrome.storage.sync.set({imgon}, function() {
    console.log('Value is set to ' + imgon);
  });
})

off.addEventListener('click', () => {
  imgon = false;
  isActive()

  chrome.storage.sync.set({imgon}, function() {
    console.log('Value is set to ' + imgon);
  });
})


function isActive(){
  if(imgon) {
    off.style.display = 'block';
    on.style.display = 'none';
  }else {
    on.style.display = 'block';
    off.style.display = 'none';
  }
}

addEventListener('load', () => {
  isActive();
  console.log('tanin');
});

