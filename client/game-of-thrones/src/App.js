import "./App.css";
import { useEffect, useState } from "react";
import Header from "../src/component/Header.js";
import { useSelector, useDispatch } from "react-redux";
import SubHeader from "./component/SubHeader";
import { getCharData } from "./redux/DataSlice/CharSLice";
import ReactPaginate from "react-paginate";

function App() {
  const { datas, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [id, setid] = useState("");

  useEffect(() => {
    dispatch(getCharData(0));
  }, []);
  console.log(datas[0]);

  const handelpageno = (data) => {
    console.log(data.selected);
    const page = data.selected;
    dispatch(getCharData(page));
  };
  const handeldetails = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let id = e.target.id;
    setid(id);
  };
  const onclickdata = datas.filter((data) => {
    if (data.id == id) {
      return data;
    } else {
      return data[0];
    }
  });
  console.log(onclickdata);
  console.log(id);
  return (
    <>
      <div className="background-div">
        <Header />
        <SubHeader />
        <div className="content">
          <div className="Maincontent">
            {" "}
            <span>Character list</span>
            <br></br>
            <div className="content2">
              <div className="headerforcontent">
                <span>id</span>
                <span>Name</span>
                <span>Image</span>
              </div>
              <div className="mapbackground">
                {datas.map((obj) => (
                  <div
                    onClick={handeldetails}
                    id={obj.id}
                    className="maincontainer"
                  >
                    <p>{obj.id}</p>
                    <p1>
                      {obj.firstName} {obj.lastName}
                    </p1>
                    <img src={obj.imageUrl} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="onclickcontent">
            Character details
            <div>
              {onclickdata.length>=0 && (
                <div>
                  {" "}
                  <p>Click to display in details</p>
                </div>
              )}
            </div>
            {onclickdata?.length >=0 &&
              onclickdata.map((object) => (
                <div>
                  <h4>{object.id}</h4>
                  <p>
                    {object.firstName} {object.lastName}
                  </p>
                  <img src={object.imageUrl} />
                  <p>{object.family}</p>
                </div>
              ))}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={".."}
            pageCount={15}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            containerClassName={"pagination justify-content-center "}
            pageClassName={"page-item"}
            onPageChange={handelpageno}
            previousClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
          />
        </nav>
      </div>
    </>
  );
}

export default App;
