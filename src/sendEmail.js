//POST contact form submissions to the URL provided in .env
//In my case, I'm using AWS (API Gateway -> Lambda -> SES)
function sendEmail (event, body) {
    event.preventDefault()
    const params = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return fetch(process.env.GATSBY_CONTACT_POST_URL, params)
}

export default sendEmail