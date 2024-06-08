import axios from "axios";
axios.defaults.withCredentials = true;

export default function index() {

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const api_response = await axios.post("http://localhost:3000/api/form", formData);
            console.log(api_response);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" />
                <input type="text" name="password" id="password" />
                <button type="submit">Send Data</button>
            </form>
        </>
    )
}
