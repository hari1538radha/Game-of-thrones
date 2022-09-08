
import './App.css';
import { useEffect, useState } from "react"
import Header from "../src/component/Header.js"
import { useSelector, useDispatch } from "react-redux"
import SubHeader from './component/SubHeader';
import { getCharData } from "./redux/DataSlice/CharSLice";
import ReactPaginate from "react-paginate"
 


function App() {
  const { datas, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharData());;
  }, [])
  console.log(datas);



  return (
    <>
      <Header />
      <SubHeader />
      <div className='content'>
        <div className='Maincontent'>  <span>Character list</span><br></br>
        <div className='content2'>
          <div className='headerforcontent'><span>id</span>
        <span>Name</span>
        <span>Image</span></div>
          <div className='mapbackground' >
            {
              datas.map((obj) =>
              (

                <div className='maincontainer'>
                  <p>{obj.id}</p>
                  <p1>
                    {obj.firstName} {obj.lastName}</p1>
                  <img src={obj.imageUrl} /></div>)
              )
            }</div></div>
         </div>
        <div className='onclickcontent'>Character details</div>

      </div><nav aria-label="Page navigation example">
      <ReactPaginate
      previousLabel= {'previous'}
      nextLabel={'next'}
      breakLabel={'..'}
      pageCount={15}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      containerClassName={'pagination justify-content-center '}
      pageClassName={'page-item'}
      previousClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      
      />
      </nav>
    </>


  );
}

export default App;
