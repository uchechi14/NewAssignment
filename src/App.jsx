// import Header from "./components/Header";
// import Hero from "./components/Hero";
import styled from'./App.module.css'
const App = () => {
  return (
   <>
       <div className = {styled.container}>
        <div className= {styled.wrapper}>
          <div className={styled.logo}>Logo</div>
          <div className={styled.navHolder}>
            <div>How it works</div>
            <div>Library</div>
            <div>Pricing</div>
          </div>
          <button className="button">Login</button>
        </div>
      </div>
    <div className={styled.HeroPage}>
        <div className={styled.HeroWrapper}>
          <div className={styled.TextSide}>
            <div className={styled.headText}>Melodies that help you stay focus</div>
            <div className={styled.bodyText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus obcaecati illum velit nobis quos neque ab esse, in cum possimus dolores distinctio omnis itaque earum cumque inventore asperiores autem. Ipsam.</div>
          <div className={styled.searchBar}>
            <div className= {styled.searchWrapper}>
            <div className={styled.details}>
              <div className={styled.emailAddress}>Your email address</div>
              <b>uchechinnorom9@gmail.com</b>
            </div>
            <button>Get Started</button>
        </div>
            </div>
          </div>
          <div className={styled.imageSide}>
          </div> 
        </div>
      </div>
    
    {/* <Header />
    <Hero /> */}
   </>
  )
};

export default App