//POST contact form submissions to the URL provided in secrets.json
//In my case, I'm using AWS (API Gateway -> Lambda -> SES)
import { contactPostUrl } from '../secrets.json'

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
    console.log(contactPostUrl, params)
    return fetch(contactPostUrl, params)
}

export default sendEmail