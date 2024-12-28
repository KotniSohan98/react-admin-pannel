import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="editButton">Edit</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">janedow@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+1 2345 67 89</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">
                    Elton st. 234 Garden Yd. NewYork
                  </div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
