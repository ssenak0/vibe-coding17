# Youth Mental Health Crisis Center 🫂
A decentralized support platform built on the Stacks blockchain, designed to provide immediate and anonymous mental health support for young people. The project aims to offer a safe space, providing critical services such as anonymous chat, crisis resources, and access to counselors.

Repository URL:https://github.com/ssenak0/vibe-coding17

✨  Features
💬 Anonymous Support Chat: A safe environment where young people can chat securely with trained volunteers or professionals without revealing their identity.

📞 Crisis Resource Hotlines: An up-to-date list of local and national hotlines for emergency situations.

🗓️ Counselor Availability Tracker: A system that displays the availability of professional counselors on the platform, making it easy to schedule appointments.

✨ Recovery Stories: Anonymous recovery stories shared to provide hope and inspiration to other young people.

📚 Educational Content: A hub for articles and resources on mental health statistics, crisis intervention protocols, and personal well-being.

🛠️ Technology Stack
🔗 Blockchain: Stacks

📜 Smart Contracts: Clarity

💻 Frontend: Next.js / React

🎨 Styling: Tailwind CSS (or another CSS library for the Teal/Purple theme)

🔧 Libraries: Stacks.js

🚀 Getting Started
Follow these instructions to get a local copy up and running for development and testing purposes.

Prerequisites
Make sure you have the following tools installed on your machine:

Node.js
Clarinet
Git

Installation
Clone the repository:


git clone [YOUR_GITHUB_REPO_URL_HERE]
Navigate to the project directory:



cd youth-mental-health-center
Install frontend dependencies:



cd front-end
npm install
🏃‍♀️ Usage
Start the Clarinet console to interact with your contracts in a simulated environment:



clarinet console
Start the frontend development server:



# From the `front-end` directory
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

📄 Smart Contract Documentation
A smart contract can be used for certain features of the project (e.g., verified counselor registrations or donations).

Contract Name	Description
support-hub.clar	Manages the registration of verified counselors and handles platform donations.

E-Tablolar'a aktar
Key Functions
register-counselor(details): Registers a counselor who has passed the verification process.

get-counselor-info(counselor-id): (read-only) Returns information for a specific counselor.

send-support-donation(amount): Allows users to send STX donations to support the platform's development.

🌐 Deployment
Testnet
Generate the deployment plan:



clarinet deployment generate --testnet
Apply the deployment plan:



clarinet deployments apply --testnet deployments/default.testnet-plan.yaml
✅ Testing
To run the contract unit tests, use the following command in the project root directory:


Issues: Please open an issue on GitHub for any bugs or feature requests.

🙏 Acknowledgments
To the Hiro team and the entire Stacks community.
