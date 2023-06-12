import { FC, useState } from 'react'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullname] = useState('Dư Thanh Được')
  console.log(fullname)
  return (
    <div>
      <img src='' alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
    </div>
  )
}

export default App
