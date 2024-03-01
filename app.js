// app.js
document.addEventListener("DOMContentLoaded", async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            console.log("Ethereum successfully enabled");
        } catch (error) {
            console.error("Error enabling Ethereum:", error);
        }
    }

    const votingSystemAddress = "YOUR_CONTRACT_ADDRESS"; // Deploy your contract and replace with the actual address
    const votingSystem = new window.web3.eth.Contract(VotingSystemABI, votingSystemAddress);

    document.getElementById("voteButton").addEventListener("click", async () => {
        try {
            const accounts = await window.web3.eth.getAccounts();
            await votingSystem.methods.castVote("CandidateA").send({ from: accounts[0] });
            console.log("Vote casted successfully");
        } catch (error) {
            console.error("Error casting vote:", error);
        }
    });
});
