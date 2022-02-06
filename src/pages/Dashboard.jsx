import Account from "components/Account/Account";
import React from "react";
import { useMoralis } from "react-moralis";
import Working from "view/Dashboard/Working";
import Header from "view/Header/Header";

const Dashboard = () => {
  const { isAuthenticated, account } = useMoralis();

  return (
    <>
      <Header
        heroStyles={
          "page-header d-flex align-items-center justify-content-center"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fs-1 text-center">How It Working?</h1>
              <p className="text-center mt-3">
                We will create Dashboard here, when we will figure out how to do
                that😂
              </p>
            </div>
          </div>
        </div>
      </Header>

      {isAuthenticated || account ? (
        <>
          <Working />
        </>
      ) : (
        <div className="m-auto text-center my-5">
          <h1>Login to see the details</h1>
          <Account />
        </div>
      )}
    </>
  );
};

export default Dashboard;
