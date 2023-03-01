import React, { useState } from 'react';

const Draw = () => {


    const [pointerColor, setPointerColor] = useState("black")

    let canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        clientX = '',
        clientY = '',
        dot_flag = false,
        y = 14,
        w = 0,
        h = 0;


    window.onload = function () {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;

        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e, '')
        }, false);

        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e, '')
        }, false);

        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e, '')
        }, false);

        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e, '')
        }, false);

        canvas.addEventListener("touchmove", function (e) {
            findxy('move', e, 'touch')
        }, false);

        canvas.addEventListener("touchstart", function (e) {
            findxy('down', e, 'touch')
        }, false);

        canvas.addEventListener("touchend", function (e) {
            findxy('up', e, 'touch')
        }, false);

        console.log("jjj", canvas, ctx);
    }

    const findxy = (result, e, source) => {
        // console.log({ result, e, source });
        if (source) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        if (result == 'down') {
            prevX = currX;
            prevY = currY;
            currX = clientX - canvas.getBoundingClientRect().left;
            currY = clientY - canvas.getBoundingClientRect().top;
            flag = true
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = pointerColor;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (result == 'up' || result == "out") {
            flag = false;
        }
        if (result == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = clientX - canvas.getBoundingClientRect().left;
                currY = clientY - canvas.getBoundingClientRect().top;
                draw();
            }
        }
    }

    console.log("pointerColor", pointerColor)

    const draw = () => {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = pointerColor;
        console.log("strokeStyle", ctx, pointerColor)
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }


    function erase() {
        let m = alert("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvas").style.display = "none";
        }
    }

    const colorPicker = (e) => {
        setPointerColor(e.target.id)
    }

    function clearcanvas1() {
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
        <>
            <div className='canvas-panel'>
                <div >
                    <h5>Try here to draw</h5>
                    <canvas id="canvas" width="500px" height="350px"></canvas>
                    <button id="canvas-clear-btn" onClick={() => clearcanvas1()}>Clear</button>
                    {/* <div className="color-palet">
                        <div className="col-12">Choose Color</div>
                        <div className="col-2"><div className="select-colour" id="green" onClick={(e) => colorPicker(e)}></div></div>
                        <div className="col-2"><div className="select-colour" id="blue" onclick="color(this)"></div></div>
                        <div className="col-2"><div className="select-colour" id="red" onclick="color(this)"></div></div>
                        <div className="col-2"><div className="select-colour" id="black" onclick="color(this)"></div></div>
                        <div className="col-eraser">Eraser <button className="select-er" id="col-eraser" onclick={() => erase()}></button></div>
                    </div> */}
                </div>
            </div>
            {/* <script src="index.js"></script> */}
        </>
    )
}
export default Draw;