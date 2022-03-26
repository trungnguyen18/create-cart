// bắt đầu ta sẽ css từ thẻ product-item đi vào
const btn = document.querySelectorAll("button")
//querySelectorall: để lấy tát cả nút button
// console.log(btn)
btn.forEach(function(button,index){
    // console.log(button,index)
    //để lấy tất cả button, index để lấy stt
    button.addEventListener("click", function(event){{
        var btnItem = event.target //click vào nó sẽ chọn phần tu đó
        var product = btnItem.parentElement
        // console.log(product) sẽ show thẻ div product-item
        var productimg = product.querySelector("img").src
        // biến productimg rồi đi từ product
        // console.log(productimg) chúng ta lấy đương dẫn ả
        var productname = product.querySelector("h1").innerText
        //lấy thẻ h1 vì nó bao tên sp
        var productprice = product.querySelector("span").innerText
        //lấy thẻ span vì chỉ có 1 nếu nhiều thì ta phải đặt class or id rồi đi vào
        //console.log(productprice,productimg,productname) để kiểm tra kết quả lấy ra
        addcart(productprice,productimg,productname)//tạo 1 hàm
    }})
})
function addcart(productprice,productimg,productname){
    var addtr = document.createElement("tr")//tạo phần tử trong tr
    //var trcontent = productprice (text)
    var cartitem = document.querySelectorAll("tbody tr")//copy từ carttotal
    for(var i = 0; i < cartitem.length;i++){
        var productT = document.querySelectorAll(".title")
        //lấy tên sản phẩm để so sánh nếu có rồi thì alert
        if(productT[i].innerHTML==productname){
            alert("Sản phẩm của bạn đã có trong giỏ hàng.")
            return
        }
    }
    var trcontent = '<tr><td style="display:flex;align-items:center;"><img style="width: 70px;" src="'+productimg+'" alt=""><span class="title">'+productname+'</span></td><td><p><span class="price">'+productprice+'</span><sup>đ</sup></p></td><td><input style="width:30px; outline:none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="deletecart">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")//lấy tất cả tr trong thẻ tbody
    //console.log(cartTable)
    cartTable.append(addtr)//thêm nội dung vào thẻ tbody

    carttotal()
    deletecart()
}
//-----------carttotal---------------------
function carttotal(){
    var cartitem = document.querySelectorAll("tbody tr")
    var totalC = 0 //đặt totalc ban đầu bằng 0
    //console.log(cartitem.length) length sẽ đếm bn thẻ tr
    for(var i = 0; i < cartitem.length;i++){
        //console.log(i) kiểm tra i
        var inputvalue = cartitem[i].querySelector("input").value
        //console.log(inputvalue)
        var productprice = cartitem[i].querySelector(".price").innerHTML
        //console.log(productprice)
        totalA = inputvalue*productprice*1000
        //totalB = totalA.toLocaleString("de-DE")
        //console.log(totalB)
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
        
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartprice = document.querySelector(".cart-icon span")//icon gio hàng sẽ hiển thị giá
    //lấy class và thẻ span để tính tổng tiền
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartprice.innerHTML = totalC.toLocaleString('de-DE')//icon gio hàng sẽ hiển thị giá giống với cart
    //console.log(cartTotalA)
    inputchange()
}
//-----------cart Delete---------------------
function deletecart(){
    var cartitem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartitem.length;i++){
        var productT = document.querySelectorAll(".deletecart")        
       // console.log(productT)
        //lấy tên sản phẩm để so sánh nếu có rồi thì alert
        productT[i].addEventListener("click", function(event){
            var cartdelete = event.target
            var cartitemR = cartdelete.parentElement.parentElement
            //console.log(productT) ta phải dùng 2 parentelement để ra thẻ td, tr
            cartitemR.remove()
            carttotal()
            //console.log(cartitemR)
        })
        
    }
}
//hàm làm tăng số lượng sản phẩm thì giá tăng theo và ngược lại
function inputchange(){
    var cartitem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartitem.length;i++){
        var inputvalue = cartitem[i].querySelector("input")        
       // console.log(productT), bỏ queryselectorall vì chỉ có 1 ô input
       inputvalue.addEventListener("change", function(){
        carttotal()
       })
       
        
    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click", function(){
    //console.log(cartshow) kiểm tra nhận được lệnh chưa
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click", function(){
    //console.log(cartbtn) kiểm tra nhận được lệnh chưa
    document.querySelector(".cart").style.right = "-100%"
})