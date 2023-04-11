// Es.7
function changeH1() {
    // let myH1 = document.getElementsByTagName('h1')[0].innerText = "US Shippings";
    document.querySelector('h1').innerText = "US Shippings";
}

// Es.8
function changeBgColor() {
    document.style.backgroundColor = "red";
}
//changeBgColor();

// Es.9
function changeAddress() {
    document.getElementById('address').innerText = "123 Main Street, New York, NY 10";
}

// Es.10    
function addClass() {
    let myAnchors = document.getElementsByTagName('a');

    for (let i = 0; i < myAnchors.length; i++) {
        myAnchors[i].classList.add('my-class');
    }

    console.log(myAnchors);
}

// Es.11
function removeAddClass() {
    let myImages = document.getElementsByTagName('img');

    for (let i = 0; i < myImages.length; i++) {
        myImages[i].classList.toggle('my-images');
    }
}

// Es.12
function changeColorPrice() {
    let myPrice = document.getElementsByClassName('price');

    for (let i = 0; i < myPrice.length; i++) {
        
        if (myPrice[i].style.color === "red") {
            myPrice[i].style.color = "black";
            } else { 
                myPrice[i].style.color = "red";
            }
    }   

}
