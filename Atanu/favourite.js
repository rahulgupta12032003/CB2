let favProduct=JSON.parse(localStorage.getItem("favourite"));
let fav=document.getElementById("fav");
let cartData=JSON.parse(localStorage.getItem("cartItem"))||[];



const favAppend= (data)=>{
   fav.innerHTML=null;

   data.map((el,index)=>{
       let topBox=document.createElement("div");

       let hr=document.createElement("hr");
       let removeImg=document.createElement("img");
       removeImg.src="./remove.png";
       removeImg.setAttribute("id","removeA")
        removeImg.addEventListener("click",()=>{
            removeFav(index);
         })

       let box= document.createElement("div");
       box.setAttribute("id","favAtanu")

        let imageDiv=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        img.setAttribute("id","favimg")
        imageDiv.append(img);

       let tbox=document.createElement("div");
        let t=document.createElement("h4");
        t.style.marginTop="0px"
        t.innerText=el.title;
        tbox.append(t);

        let cpBox=document.createElement("div");
            let p=document.createElement("p");
            p.setAttribute("id","pri")
            p.innerText="$"+" "+el.price;
                let cart=document.createElement("button");
                cart.innerText="ADD TO CART";
                cart.setAttribute("id","cartA");
                cart.addEventListener("click",(el)=>{
                    cartData.push(el);
                    localStorage.setItem("cartItem",JSON.stringify(cartData));
                    });

        let btmBox=document.createElement("div");
        btmBox.setAttribute("id","btmBox");

        let leftAdi=document.createElement("a");
        leftAdi.href="./favourite.html";
        leftAdi.innerText="ADD TO ADDITINAL LIST";

        let rightAdi=document.createElement("a");
        rightAdi.href="";
        rightAdi.innerText="ADD TO REGISTER";
    btmBox.append(leftAdi,rightAdi);

     topBox.append(hr,removeImg);
     box.append(imageDiv,tbox);
     cpBox.append(p,cart);

     let mainBox=document.createElement("div");
        mainBox.setAttribute("id","xyzMain")
        mainBox.append(box,cpBox);

     
     fav.append(topBox,mainBox,btmBox);
   })
}

favAppend(favProduct);

const removeFav=(i)=>{
    fav.innerHTML="";
    favProduct=favProduct.filter(function(el,index){
        return i!= index;
    });
    favAppend(favProduct);
    localStorage.setItem("favourite",JSON.stringify(favProduct));
};