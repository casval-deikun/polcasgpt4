document.getElementById('connectWalletButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // 사용자의 MetaMask 지갑을 연결합니다.
            await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('sendMaticButton').style.display = 'block';
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('MetaMask is not installed!');
    }
});

document.getElementById('sendMaticButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const tx = await signer.sendTransaction({
                to: '0x92C87b1F42Ff62876E2459D9eD313A197703eF56',
                value: ethers.utils.parseEther('1') // 1 MATIC을 전송합니다.
            });
            console.log('Transaction sent:', tx);
        } catch (error) {
            console.error(error);
        }
    }
});
