import desktopImage from "./assets/images/background-pattern-desktop.svg"
import mobileImage from "./assets/images/background-pattern-mobile.svg"
import iconStar from "./assets/images/icon-star.svg"
import Paragrap from "./components/Paragrap"
import {faqs} from "./components/Data"

function App() {

  return (
    <main className="min-h-screen relative p-4 bg-purple-100">
      {/*image*/}
      <section className="absolute w-full h-auto top-0 left-0">
        <img src={desktopImage} alt="" className="w-full h-auto object-cover hidden md:block" />
        <img src={mobileImage} alt="" className="w-full h-auto object-cover md:hidden" />
      </section>
    
      <section className="relative bg-white transition-all mx-auto  max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-5 ">
          {/*title*/}
        <div className="flex flex-left items-center gap-4">
          <img src={iconStar} alt="" className="w-8 h-8"/>
          <h1 className="font-bold text-4xl">FAQs</h1>
        </div>
        {/*paragrap*/}
        {faqs.map((faq, index) =>{
          return(
            <Paragrap 
            key={index}
            {...faq}/>
          )
         
        })}
        
      </section>
    
    </main>
  )
}

export default App
