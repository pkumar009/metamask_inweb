const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const showBalance = document.querySelector(".showBalance");
const logoutButton = document.querySelector(".disablelogout");
const profileButton = document.querySelector(".profile");
const walletButton = document.querySelector(".walletButton");
const showwallet = document.querySelector(".showwallet");

document.querySelector(".enableEthereumButton").style.display = "none";

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
else{
  ethereumButton.innerHTML = "Please Install Metamask";
}  document.querySelector(".intro").style.display = "none";

document.querySelector(".disablelogout").style.display = "none";

ethereumButton.addEventListener('click', () => {
  getAccount();
});

walletButton.addEventListener('click', () => {
  wallet();
});
logoutButton.addEventListener('click', () => {
  logout();
});

profileButton.addEventListener('click', () => {
  profile();
});
 document.querySelector(".enableEthereumButtonMeta").style.display = "none";
async function getAccount() {
  const account = await ethereum.request({ method: 'eth_requestAccounts' });
  sessionStorage.setItem("accountId", account[0]);
   showAccount.innerHTML = account[0];
  if(sessionStorage.getItem("accountId"))
  {
    document.querySelector(".disablelogout").style.display = "block";
    document.querySelector(".intro").style.display = "block";
    document.querySelector(".enableEthereumButton").style.display = "none";
  }
} 
if(sessionStorage.getItem("accountId"))
{
  document.querySelector(".disablelogout").style.display = "block";
  document.querySelector(".intro").style.display = "block";
  document.querySelector(".enableEthereumButton").style.display = "none";
  showAccount.innerHTML = sessionStorage.getItem("accountId");
}

function logout()
{
  sessionStorage.removeItem('accountId');
  document.querySelector(".disablelogout").style.display = "none";
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".showwallet").style.display = "none";
  // document.querySelector(".enableEthereumButton").style.display = "block";
}  

function profile()
{
  showAccount.innerHTML = sessionStorage.getItem("accountId");
  if(!sessionStorage.getItem("accountId"))
  {
    document.querySelector(".enableEthereumButton").style.display = "block";
  }
  
}
function wallet()
{
  showwallet.innerHTML = sessionStorage.getItem("accountId");
  if(!sessionStorage.getItem("accountId"))
  {
    document.querySelector(".enableEthereumButton").style.display = "block";
  }
  
}
