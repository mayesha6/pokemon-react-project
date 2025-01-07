import Header from '../../components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'

const AppLayout = () => {
  const navigatation = useNavigation()
  console.log(navigatation)
  if(navigatation.state==='loading') return <Loading/>
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout