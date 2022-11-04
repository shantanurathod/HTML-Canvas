window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // var image = document.querySelector("img");
    //resizing
    canvas.height = 500;
    canvas.width = 500;

    const image = new Image();
    image.src = 'temp1.svg';

    const qrImg = new Image();
    qrImg.src = "qr-none.svg";

    // ctx.drawImage(
    //     qrImg,
    //     0, 0,
    //     canvas.width, canvas.height
    // )

    ctx.drawImage(
        image,
        0, 0,
        canvas.width, canvas.height,
        // 0, 0,
        // 500, 500
    )


    ctx.font = "bold 15px sans-serif "
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Event Name", 114, 80)

    ctx.font = "bold 25px sans-serif "
    ctx.fillStyle = "#ffffff";
    ctx.fillText("1 AUG'22", 250, 70)
    
    // var downloadBtn = document.querySelector(".button-28")
    //425, 143  3.5, 1.17
});

function ImageExp() {
    // var data = canvas.toDataURL();
    // var image = new Image();
    // image.src = data;

    // var w = window.open("");
    // w.document.write(image.outerHTML);

    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();

    // var downloadBtn = document.querySelector(".button-28")
    // downloadBtn.innerText = "chal";

}
