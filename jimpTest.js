var jimp = require("jimp");

jimp.read('temp1.jpg', (err, temp1) => {
    if (err) throw err;

    temp1.grayscale();
    temp1.write("grey-scaled.jpg");
})

function jimpSave() {

    jimp.read('temp1.jpg', (err, temp1) => {
        if (err) throw err;

        temp1.grayscale();
        temp1.write("grey-scaled.jpg");
    })

}