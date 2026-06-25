// Tab Management
function showTab(tabIndex) {
    const tabs = document.querySelectorAll('.vault-form');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
        buttons[index].classList.remove('active');
    });
    
    tabs[tabIndex].classList.add('active');
    buttons[tabIndex].classList.add('active');
}

// Deposit and Withdraw Functions
function updateAmountPreview() {
    const amount = document.getElementById('deposit-amount').value;
    const asset = document.getElementById('deposit-asset').value;
    const symbol = document.getElementById('deposit-symbol');
    const estimatedSpan = document.getElementById('deposit-estimated');
    
    symbol.textContent = asset;
    
    if (amount) {
        const fee = (parseFloat(amount) * 0.01).toFixed(2); // 1% fee
        const estimated = (parseFloat(amount) - fee).toFixed(2);
        estimatedSpan.textContent = `${estimated} ${asset}`;
    } else {
        estimatedSpan.textContent = '0.00 ' + asset;
    }
}

function updateWithdrawPreview() {
    const asset = document.getElementById('withdraw-asset').value;
    const symbol = document.getElementById('withdraw-symbol');
    
    symbol.textContent = asset;
    
    // Update available balance based on selected asset
    const balances = {
        'USDT': '4,250',
        'ETH': '2.85',
        'BTC': '0.42'
    };
    
    document.getElementById('withdraw-available').textContent = `${balances[asset]} ${asset}`;
}

function makeDeposit() {
    const amount = document.getElementById('deposit-amount').value;
    const asset = document.getElementById('deposit-asset').value;
    
    if (!amount || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    alert(`Deposit initiated:\n\nAsset: ${asset}\nAmount: ${amount}\n\nThis would connect to your wallet and process the transaction.`);
    document.getElementById('deposit-amount').value = '';
    updateAmountPreview();
}

function makeWithdraw() {
    const amount = document.getElementById('withdraw-amount').value;
    const asset = document.getElementById('withdraw-asset').value;
    
    if (!amount || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    alert(`Withdrawal initiated:\n\nAsset: ${asset}\nAmount: ${amount}\n\nThis would process your withdrawal to your connected wallet.`);
    document.getElementById('withdraw-amount').value = '';
    updateWithdrawPreview();
}

// Wallet Connection
function connectWallet() {
    alert('Wallet connection:\n\nThis would trigger Web3 connection to MetaMask or other wallet providers.\n\nFeature requires Web3.js or ethers.js integration.');
}

// Start Investing
function startInvesting() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

// Whitepaper
function viewWhitepaper() {
    alert('Whitepaper:\n\nThis would open or download the AlpsCoinChain whitepaper PDF.');
}

// Buy Token
function buyToken() {
    alert('Buy $ALPS Token:\n\nThis would redirect to a DEX (Decentralized Exchange) or integrated purchase page where you can buy $ALPS tokens.');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateAmountPreview();
    updateWithdrawPreview();
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.feature-card, .step, .section-header');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});