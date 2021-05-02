import Meal from './Meal'

function App() {
  return (
    <>
      <div>
        <h1 className="font-bold text-4xl lg:text-6xl mt-10">
          Random meal generator
        </h1>
        <div className="underline mx-auto mt-4 mb-5"></div>
        <Meal />
      </div>
    </>
  )
}

export default App
