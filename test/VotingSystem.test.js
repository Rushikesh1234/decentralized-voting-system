const VotingSystem = artifacts.require("VotingSystem");

contract("VotingSystem", (accounts) => {
  it("should allow the admin to add voters", async () => {
    const votingSystem = await VotingSystem.deployed();
    await votingSystem.addVoter(accounts[1], { from: accounts[0] });

    const isVoter = await votingSystem.voters(accounts[1]);
    assert.isTrue(isVoter);
  });

  it("should allow registered voters to cast votes", async () => {
    const votingSystem = await VotingSystem.deployed();
    await votingSystem.addVoter(accounts[1], { from: accounts[0] });

    await votingSystem.castVote("CandidateA", { from: accounts[1] });
    const votesForCandidateA = await votingSystem.votes("CandidateA");

    assert.equal(votesForCandidateA, 1);
  });
});
