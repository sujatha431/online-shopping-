
const socket = io(); // 'http://localhost:8082'

socket.on("userMsgReceive", (msg) => {
    addMsgToChatBlock(msg, 'receiveMsg')
}) // -> subscribing


var sendMsg = () => {
    var msg = document.querySelector("#userMsg").value;
    document.querySelector("#userMsg").value = '';
    addMsgToChatBlock(msg, 'sender');

    // socket.emit("userSendMsg", msg);
    socket.emit("userSendMsg", msg);

}

var addMsgToChatBlock = (msg, type) => {
    var divBlock = document.createElement("div");
    divBlock.innerHTML = msg; 
    var className = (type == 'sender') ? 'sendMsg' : 'receiveMsg';
    divBlock.setAttribute("class", className);

    document.querySelector(".msgContainer").append(divBlock);
}