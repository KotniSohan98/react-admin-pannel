import React, { useEffect } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import BasicTable from "../../components/table/BasicTable";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchRevenueData,
  fetchTransactionList,
} from "../../storeData/reactAdminActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionList());
    dispatch(fetchRevenueData());
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
