import Lottie from "lottie-react";
import calender from "../../../assets/calender.json";
import note from "../../../assets/note.json";
import converter from "../../../assets/converter.json";
import { Link } from "react-router-dom";
const Widgets = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 sm:mt-10  lg:mx-10 my-10 md:my-28 justify-items-center gap-3 ">
        <Link to="/calendar">
          <div className="">
            <div className="card card-compact  bg-slate-700 text-white shadow-2xl">
              <figure>
                <Lottie
                  animationData={calender}
                  loop={true}
                  style={{ width: "453px", height: "268px" }}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-bold italic">Calender</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Notes">
          <div>
            <div className="card card-compact  bg-slate-700 text-white shadow-2xl">
              <figure>
                <Lottie
                  animationData={note}
                  loop={true}
                  style={{ width: "453px", height: "268px" }}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-bold italic">Note</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/pdfConverter">
          <div>
            <div className="card card-compact  bg-slate-700 text-white shadow-2xl">
              <figure>
                <Lottie
                  animationData={converter}
                  loop={true}
                  style={{ width: "453px", height: "268px" }}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-bold italic">PDF Converter</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Widgets;
