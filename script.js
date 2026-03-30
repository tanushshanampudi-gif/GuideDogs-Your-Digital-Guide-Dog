const video = document.getElementById("camera");
const output = document.getElementById("output");

// Start camera
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
});

// Voice input
function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();

    recognition.onresult = async function(event) {
        const userText = event.results[0][0].transcript;
        output.innerText = "You said: " + userText;

        const image = captureImage();
        const aiResponse = await sendToAI(userText, image);

        output.innerText = aiResponse;
        speak(aiResponse);
    };
}

// Capture image from camera
function captureImage() {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    return canvas.toDataURL("image/jpeg");
}

// Send to AI (Replace with real API)
async function sendToAI(query, image) {

    //  DEMO LOGIC (replace with OpenAI later)
    if (query.toLowerCase().includes("road")) {
        return "I see a road slightly to your left.";
    }
    if (query.toLowerCase().includes("hand")) {
        return "You are holding a mobile phone.";
    }
    if (query.toLowerCase().includes("read")) {
        return "The text says total 250 rupees.";
    }

    return "I see objects around you, but I need more clarity.";
}

// Speak response
const API_KEY = "your_api_key"; 

async function speak(text) {
    try {
        const response = await fetch("https://api.murf.ai/v1/speech/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": API_KEY
            },
            body: JSON.stringify({
                text: text,
                voiceId: "en-US-natalie"
            })
        });

        const data = await response.json();

        // Play Murf audio
        if (data.audioFile) {
            const audio = new Audio(data.audioFile);
            audio.play();
        } else {
            throw new Error("No audio returned");
        }

    } catch (error) {
        console.error("Murf failed, using fallback:", error);

        // 🔁 fallback (VERY IMPORTANT)
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        window.speechSynthesis.speak(speech);
    }
}
