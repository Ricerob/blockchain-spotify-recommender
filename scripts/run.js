async function main() {
    const [owner, randoPerson] = await ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed by: ", owner.address);

    let waveCount;
    waveCounter = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();                    //Wave 1
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson).wave();   //Wave 2
    await waveTxn.wait();

    waveTxn = await waveContract.connect(randoPerson).wave();   //Wave 3
    await waveTxn.wait();

    waveTxn = await waveContract.wave();                        //Wave 4 - new featured address
    await waveTxn.wait();

    waveTxn = await waveContract.wave();                        //Wave 5
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})