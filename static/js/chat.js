const $chatMessages = Qs(".messages")

const getMessages = async (room_id) => {
    const roomActive = (room_id) => {
        QsAll(".list-rooms li").forEach((e) => e.classList.remove("active"))
        Qs(`#room-${room_id}`).classList.add("active")
        Qs("#selected-room").value = room_id;
    }

    let response = await fetch(`/${room_id}`)
    const html = await response.text();
    //console.log(html)
    $chatMessages.innerHTML = html

    roomActive(room_id);
}

const sendMessage = async (data) => {
    let response = await fetch(`send/${data.room_id}`, {
        method: "POST",
        headers: {'X-CSRFToken': data.csrfmiddlewaretoken},
        body: JSON.stringify(data)
    })
    const html = await response.text();
    const $uniqueMessage = Qs(".unique-message")
    $uniqueMessage.innerHTML += html
    Qs("form").reset()
}

Qs(".send-message").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(ev.target).entries())
    sendMessage(data)
})

getMessages(1)