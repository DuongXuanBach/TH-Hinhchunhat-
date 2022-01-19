class Rectangle {
    constructor(height, width) {
        this.height= height;
        this.width = width;
    }
    getS() {
        return this.width*this.height;
    }
    getP() {
        return (this.width+this.height)*2;
    }
    draw() {
        let ctx = document.getElementById("vehinh").getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(100, 100, this.width, this.height);
    }

}

let hinhChuNhat1 = new Rectangle(700,500);
let hinhChuNhat2 = new Rectangle(100,70);
hinhChuNhat1.draw();

console.log(hinhChuNhat1.getP());
console.log(hinhChuNhat2.getS());




