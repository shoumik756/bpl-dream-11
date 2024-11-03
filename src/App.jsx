import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ButtonContainer from './components/ButtonContainer/ButtonContainer'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'

function App() {



  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const [selected, setSelected] = useState([]);

  const handleDelete = (id) => {
    const deletedPlayer = selected.find((player) => player.playerId === id);
    
    if (deletedPlayer) {
        const remainingPlayer = selected.filter((player) => player.playerId !== id);
        setSelected(remainingPlayer);
        toast.warning(`${deletedPlayer.name} Deleted!`);
    }
  
  }


  const handleSelected = (player) => {
    // const cost = parseInt(player.biddingPrice.replace(/,/g, ''),10)
    if (selected.length >= 6) {
      toast.error("You can select maximum six player, Thank You!");
    }
    else if (selected.includes(player)) {
      toast.error(`${player.name} already selected!`);
    } 
    else if(coin<(parseInt(player.biddingPrice.replace(/,/g, '')))){
      toast.error("Not enough coins!")
    }
    else {
      const newSelected = [...selected, player];
      setSelected(newSelected);
      setCoin(coin-parseInt(player.biddingPrice.replace(/,/g, '')))
      toast.success(`${player.name} selected successfully!`);
      
    }

  };



  const [coin, setCoin] = useState(0)

  const claimFreeCredit = () => {
    setCoin(coin + 5000000);
    toast.success('You have successfully claimed Free Coins');
  };

  const handleIsActiveState = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: 'available'
      })
    }
    else {
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }



  return (


    <>
      <Header coin={coin}></Header>
      <Banner claimFreeCredit={claimFreeCredit}></Banner>
      <ButtonContainer isActive={isActive} handleIsActiveState={handleIsActiveState} handleSelected={handleSelected} selected={selected} handleDelete={handleDelete}></ButtonContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss={false}
      />
      <Newsletter></Newsletter>
      <Footer></Footer>

    </>
  )
}

export default App
