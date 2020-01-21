var image = new Image();
var canvas = document.getElementById('canvas');

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img'); // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
            image.src = img.src;
        }
    });
});

function imageIsLoaded() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        ctx.drawImage(image, 0, 0);
        document.getElementById('part1').style.display = "block";
    };
};

var pixel = document.getElementById('pixel');
var procent = document.getElementById('procent');
var kat = document.getElementById('kat');
var part2 = document.getElementById('part2');
var x = document.getElementById('opcja');

function wybranie() {
    part2.style.display = 'block';
    if (x.value == "rozmycie") {
        pixel.style.display = "block";
        procent.style.display = "none";
        kat.style.display = "none";
        var slider = document.getElementById("myRange2");
        var output = document.getElementById("demo2");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    }
     else if (x.value == "obrothue") {
        pixel.style.display = "none";
        procent.style.display = "none";
        kat.style.display = "block";
        var slider = document.getElementById("myRange3");
        var output = document.getElementById("demo3");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    }
    else{
        pixel.style.display = "none";
        procent.style.display = "block";
        kat.style.display = "none";
        var slider = document.getElementById("myRange1");
        var output = document.getElementById("demo1");
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    };

};

function zaaplikuj() {
    if(x.value == 'rozmycie'){
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'blur('+document.getElementById("myRange2").value+'px)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'kontrast'){   
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'contrast('+document.getElementById("myRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'skalaszarosci'){  
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'grayscale('+document.getElementById("myRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'obrothue'){  
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'hue-rotate('+document.getElementById("myRange3").value+'deg)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'odwroceniekolorow'){ 
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'invert('+document.getElementById("myRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'saturacja'){   
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'saturate('+document.getElementById("myRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
    if(x.value == 'sepia'){ 
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'sepia('+document.getElementById("myRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
}
function reset(){
    var ctx = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        ctx.drawImage(image, 0, 0);
}
function niebieski() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'blur(5px)';
        ctx.drawImage(image, 0, 0);
    };
};

function zielony() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'grayscale(0.9)';
        console.log(ctx);
        ctx.drawImage(image, 0, 0);
    };
};
function zapisz(el){
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
}
