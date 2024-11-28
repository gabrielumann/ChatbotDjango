const $chatMessages = document.querySelector(".messages")
const $inputMessage = document.querySelector(".form-control")
const getMessages = async (room_id) => {
    const roomActive = (room_id) => {
        document.querySelectorAll(".list-rooms li").forEach((e) => e.classList.remove("active"))
        document.querySelector(`#room-${room_id}`).classList.add("active")
    }

    let response = await fetch(`/${room_id}`)
    const html = await response.text();
    //console.log(html)
    $chatMessages.innerHTML = html

    roomActive(room_id);
}

const insertMessage = async () => {
    console.log("submit")
    let response = await fetch(`/${room_id}`)
    const html = await response.text();
    $chatMessages.innerHTML = html
    roomActive(room_id);
}

$inputMessage.addEventListener("submit", (e) => {
    e.preventDefault
    insertMessage()
})