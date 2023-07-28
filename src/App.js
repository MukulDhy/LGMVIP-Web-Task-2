import React, { useState } from "react";
import Navbar from "./Navbar";
import "../src/App.css";
import Loader from "./Loader";

const App = () => {
  const [dataFromNavbar, setDataFromNavbar] = useState([]);

  console.log(dataFromNavbar);
  return (
    <>
      <Navbar setDataFromNavbar={setDataFromNavbar}></Navbar>

      <div className="px-16">
        {dataFromNavbar.length === 0 && (
          <div className="w-full h-screen flex justify-center items-center">
            {" "}
            <Loader></Loader>{" "}
          </div>
        )}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 my-2">
          {dataFromNavbar.length !== 0 &&
            dataFromNavbar.map((ele, i) => {
              return (
                <>
                  <div className="flex flex-col justify-center border-2 p-2 h-auto">
                    <img
                      src={ele.avatar}
                      alt=""
                      className="rounded-full mb-6 w-1/2 self-center"
                    />
                    <div className="text-lg flex flex-col gap-2">
                      <p>
                        Name : {ele.first_name} {ele.last_name}
                      </p>
                      <p>Email : {ele.email}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default App;
