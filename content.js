
const body = document.getElementsByTagName('body');
let isActive = undefined;
chrome.storage.sync.get(['imgon'], function(result) {
    isActive = result.imgon;

    const imgArr = [
        'https://res.cloudinary.com/tajpro/image/upload/v1635264782/Tanin/Tanin-Ahmed_xdso8c.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312696/DSC_0011_jyj1nr.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312659/DSC_0008e_zxnlpd.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312652/DSC_0005_k7v711.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312652/DSC_0010e_vbpcpl.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312652/DSC_0010e_vbpcpl.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312652/DSC_0014e_kn3nkx.jpg',
        'https://res.cloudinary.com/tajpro/image/upload/v1635312651/DSC_0004_tw4qwp.jpg'

    ]

    let image = imgArr[Math.floor(Math.random() * imgArr.length)]

    if (body && isActive) {
        let taninDiv = document.createElement('div');
        let taninImg = document.createElement('img');
        let att = document.createAttribute("src");
        let attClass = document.createAttribute("id");
        attClass.value = "tanin";
        att.value = image;  
        taninDiv.setAttributeNode(attClass);
        taninImg.setAttributeNode(att);
        taninDiv.appendChild(taninImg)
        body[0].appendChild(taninDiv);
        
        let imgTop = false;
        let randomPostion = {
            x: innerWidth - 220 + 'px',
            y: innerHeight - 200 + 'px'
        }

        const tanin = document.querySelector('#tanin>img');
        tanin.addEventListener('mouseenter', (e)=> {
            if(!imgTop) {
            
                randomPostion.x = innerWidth - 220 + 'px';
                randomPostion.y = innerHeight - 200 + 'px'
                
            }else {
                randomPostion.y = '0px';
            }

            imgTop = !imgTop;
            
            tanin.style.left = randomPostion.x
            tanin.style.top = randomPostion.y
        })


        if(att) {
            setInterval(()=> {
                att.value = imgArr[Math.floor(Math.random() * imgArr.length)]
            }, 10000);
        }
    }

});