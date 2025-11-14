import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { GetOneMenDataAsync, DeleteMenDataAsync } from "../Services/Action/Action";
import Loader from "../Loader/Loader";

const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { MenData, isloading, isError } = useSelector(state => state.ReducerData);
  const { user } = useSelector(state => state.AuthReducer);

  useEffect(() => {
    dispatch(GetOneMenDataAsync(id));
  }, [id]);

  if (isloading || !MenData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
        <Loader />
      </div>
    );
  }

  return (
    <section className="container py-4">
      <div className="row">
        <div className="col-md-5">
          <img src={MenData.image} alt={MenData.name} style={{ width: "100%", borderRadius: "8px" }} />
        </div>

        <div className="col-md-7">
          <h2>{MenData.name}</h2>
          <p className="text-muted">{MenData.desc}</p>
          <h4>₹ {MenData.price}</h4>

          <p><b>Brand:</b> {MenData.brand}</p>
          <p><b>Category:</b> {MenData.categoryType}</p>

          <button className="btn btn-secondary mt-3 me-2" onClick={() => navigate(-1)}>Back</button>

         
        </div>
      </div>
    </section>
  );
};

export default View;
