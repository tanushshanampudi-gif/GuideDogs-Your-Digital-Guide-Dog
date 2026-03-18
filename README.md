# GuideDogs-Your-Digital-Guide-Dog
GuideDogs is a voice-first mobile application that helps visually impaired individuals understand their surroundings using simple voice commands. It can describe environments, read text aloud, and locate objects in real time, enabling users to interact with the world more independently and confidently.

##  Problem
Visually impaired individuals face challenges in understanding their surroundings, reading text, and identifying objects without assistance. Existing solutions are often complex and not fully voice-driven.

##  Solution
GuideDogs provides a simple, voice-based interface where users can ask questions, and the AI analyzes real-time camera input to generate intelligent responses delivered through speech.

##  Features
- 🎤 Voice-based interaction (Speech-to-Text)
- 📸 Real-time camera input
- 🤖 AI-based scene understanding
- 🔊 Voice responses (Text-to-Speech using Murf AI)
- 📄 Text reading (OCR simulation)
- 📍 Object detection (simulation)
  
##  Tech Stack
- HTML, CSS, JavaScript
- Web Speech API (Speech Recognition)
- Camera API (getUserMedia)
- (Future) OpenAI / Gemini Vision API
- (Future) Murf AI Text-to-Speech

##  Demo Commands
Try saying:

- “What is in front of me?”
- “Where is the road?”
- “What is in my hand?”
- “Read this receipt”

##  How It Works
1. User speaks a question  
2. System converts speech → text  
3. Camera captures the environment  
4. AI processes image + question  
5. Generates response  
6. Response is spoken back to user  

##  Future Improvements
- Real AI vision integration (no simulation)
- Full Murf AI voice integration
- Mobile app version
- Navigation assistance

##  Impact
GuideDogs empowers visually impaired individuals to interact with the world more independently, confidently, and efficiently using voice and AI.
